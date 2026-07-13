import "dotenv/config";

import fetch from "node-fetch";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

import { filterRelevantStories } from "../client/src/services/relevanceEngine.js";
import { buildInsightPrompt } from "../client/src/utils/buildInsightPrompt.js";

// ======================================================
// Configuration
// ======================================================

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_KEY
);

// ======================================================
// TechQuest searches
// ======================================================

const SEARCH_QUERIES = [
  `"artificial intelligence"`,
  `"machine learning"`,

  `"OpenAI" OR Anthropic OR ChatGPT`,

  `"graduate programme" OR internship OR hiring`,

  `"software engineering"`,

  `"cloud computing"`,

  `cybersecurity`,

  `universities OR scholarship`,

  `"technology policy"`,

  `"startup funding"`,

  `"developer tools"`
];

// ======================================================

async function fetchQuery(query) {

  console.log(`🔎 ${query}`);

  const url =
    "https://newsapi.org/v2/everything?" +
    new URLSearchParams({

      q: query,

      language: "en",

      sortBy: "publishedAt",

      pageSize: 10,

      apiKey: NEWS_API_KEY,

    });

  const response = await fetch(url);

  if (!response.ok) {

    throw new Error(
      `NewsAPI ${response.status}`
    );

  }

  const data = await response.json();

  return data.articles || [];
}

// ======================================================

async function fetchAllStories() {

  console.log("");

  console.log("📰 Fetching today's news...");

  const results = await Promise.all(

    SEARCH_QUERIES.map(fetchQuery)

  );

  const stories = results.flat();

  console.log(

    `Fetched ${stories.length} stories`

  );

  // Remove duplicates

  const uniqueStories = Array.from(

    new Map(

      stories.map((story) => [

        story.url,

        {
          title: story.title,

          summary: story.description,

          description: story.description,

          url: story.url,

          image: story.urlToImage,

          source: story.source?.name,

          publishedAt: story.publishedAt,

        },

      ])

    ).values()

  );

  console.log(

    `Unique stories: ${uniqueStories.length}`

  );

  return uniqueStories;

}

// ======================================================

async function generateInsight(story) {

  console.log(

    `🤖 ${story.title.substring(0,60)}...`

  );

  const completion = await openai.responses.create({

    model: "gpt-4.1-mini",

    input: buildInsightPrompt(story),

  });

  const text = completion.output_text;

  return JSON.parse(text);

}
// ======================================================
// Generate Tech Brief
// ======================================================

async function generateTechBrief(stories) {

  console.log("");
  console.log("📝 Generating Tech Brief...");

  const headlines = stories
    .map((story, index) => `${index + 1}. ${story.title}`)
    .join("\n");

  const prompt = `
You are TechQuest.

Write a fun daily tech briefing for university students and young professionals.

Keep it under 250 words.

Focus on:

- AI
- Software Engineering
- Careers
- Universities
- Startups
- Cloud
- Cybersecurity

Mention the biggest themes you notice.

Finish with one motivational sentence.

Today's stories:

${headlines}
`;

  const completion = await openai.responses.create({

    model: "gpt-4.1-mini",

    input: prompt,

  });

  return completion.output_text;

}

// ======================================================
// Main Pipeline
// ======================================================

async function main() {

  console.log("");
  console.log("🚀 TechQuest Daily Update");
  console.log("");

  //----------------------------------------------------
  // Fetch News
  //----------------------------------------------------

  const fetchedStories = await fetchAllStories();

  //----------------------------------------------------
  // Filter with YOUR relevance engine
  //----------------------------------------------------

  const filteredStories =
    filterRelevantStories(fetchedStories);

  const topStories =
    filteredStories.slice(0, 20);

  console.log("");
  console.log(
    `✅ Keeping ${topStories.length} TechQuest stories`
  );

  //----------------------------------------------------
  // Generate Tech Brief
  //----------------------------------------------------

  const techBrief =
    await generateTechBrief(topStories);

  console.log("");
  console.log("✅ Tech Brief generated");

  //----------------------------------------------------
  // Generate insights
  //----------------------------------------------------

  console.log("");
  console.log("🤖 Generating story insights...");

  const finalStories = [];

  for (const story of topStories) {

    try {

      const insight =
        await generateInsight(story);

      finalStories.push({

        ...story,

        whatHappened:
          insight.whatHappened,

        whyItMatters:
          insight.whyItMatters,

        quickCheck:
          insight.quickCheck,

      });

      console.log(
        `✅ ${story.title.substring(0,50)}...`
      );

    } catch (err) {

      console.log(
        `❌ Failed: ${story.title}`
      );

      console.log(err.message);

    }

  }

  console.log("");
  console.log(
    `Finished generating ${finalStories.length} story insights`
  );

  //----------------------------------------------------
  // Save to Supabase
  //----------------------------------------------------

  console.log("");
  console.log("💾 Updating Supabase...");

    //----------------------------------------------------
  // Delete old stories
  //----------------------------------------------------

  const { error: deleteStoriesError } = await supabase
    .from("stories")
    .delete()
    .neq("id", 0);

  if (deleteStoriesError) {
    throw deleteStoriesError;
  }

  console.log("🗑️ Old stories deleted");

  //----------------------------------------------------
  // Insert today's stories
  //----------------------------------------------------

  const storiesToInsert = finalStories.map((story) => ({
    title: story.title,
    summary: story.summary,
    description: story.description,
    url: story.url,
    image: story.image,
    source: story.source,
    published_at: story.publishedAt,
    relevance_score: story.relevanceScore,
    what_happened: story.whatHappened,
    why_it_matters: story.whyItMatters,
    quick_check: story.quickCheck,
  }));

  const { error: insertStoriesError } = await supabase
    .from("stories")
    .insert(storiesToInsert);

  if (insertStoriesError) {
    throw insertStoriesError;
  }

  console.log(
    `✅ Inserted ${storiesToInsert.length} stories`
  );

  //----------------------------------------------------
  // Delete old Tech Brief
  //----------------------------------------------------

  const { error: deleteBriefError } = await supabase
    .from("tech_brief")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000");

  if (deleteBriefError) {
    throw deleteBriefError;
  }

  //----------------------------------------------------
  // Insert today's Tech Brief
  //----------------------------------------------------

  const { error: insertBriefError } = await supabase
    .from("tech_brief")
    .insert({
      brief: techBrief,
    });

  if (insertBriefError) {
    throw insertBriefError;
  }

  console.log("✅ Tech Brief saved");

  //----------------------------------------------------

  console.log("");
  console.log("🎉 Daily update complete!");
  console.log("");
  console.log(
    `Stories published: ${storiesToInsert.length}`
  );

}

main()
  .then(() => {
    console.log("");
    console.log("🚀 TechQuest update finished.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("");
    console.error("❌ Update failed");
    console.error(err);
    process.exit(1);
  });