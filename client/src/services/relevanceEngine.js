// ===========================================================
// TechQuest Relevance Engine v4
// ===========================================================

const REQUIRED_TOPICS = [
  "internship",
  "graduate",
  "graduate programme",
  "graduate program",
  "career",
  "careers",
  "job",
  "jobs",
  "hiring",
  "student",
  "students",
  "university",
  "universities",
  "scholarship",
  "education",
  "research",
  "artificial intelligence",
  "machine learning",
  "deep learning",
  "chatgpt",
  "openai",
  "anthropic",
  "gemini",
  "copilot",
  "developer",
  "software",
  "software engineering",
  "programming",
  "cloud",
  "aws",
  "azure",
  "cybersecurity",
  "startup",
  "founder",
  "funding",
];

const BANNED_TOPICS = [
  "review",
  "hands on",
  "hands-on",
  "camera",
  "battery",
  "display",
  "smartphone",
  "phone",
  "iphone",
  "pixel",
  "galaxy",
  "oneplus",
  "xiaomi",
  "tablet",
  "earbuds",
  "gaming",
  "xbox",
  "playstation",
  "steam",
  "pokemon",
  "fortnite",
  "minecraft",
  "call of duty",
  "assassin",
  "movie",
  "movies",
  "tv show",
  "celebrity",
  "netflix",
  "disney",
  "coupon",
  "discount",
  "deal",
  "sale",
  "shopping",
  "free shipping",
  "buy now",
];

const POSITIVE_RULES = [
  { score: 12, words: ["internship","graduate","graduate programme","graduate program","hiring"] },

  { score: 10, words: ["career","careers","job","jobs"] },

  { score: 9, words: ["student","students","university","universities","scholarship","education"] },

  { score: 9, words: ["research"] },

  { score: 9, words: ["artificial intelligence","machine learning","deep learning"] },

  { score: 8, words: ["openai","anthropic","chatgpt","gemini","copilot"] },

  { score: 7, words: ["software","software engineering","developer","programming"] },

  { score: 7, words: ["cloud","aws","azure","cybersecurity"] },

  { score: 6, words: ["startup","founder","funding"] },
];

// ------------------------------------------------------------

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function containsWord(text, word) {
  const regex = new RegExp(`\\b${escapeRegex(word)}\\b`, "i");
  return regex.test(text);
}

function scoreText(text, multiplier = 1) {
  let score = 0;
  const reasons = [];

  for (const rule of POSITIVE_RULES) {
    for (const word of rule.words) {
      if (containsWord(text, word)) {
        score += rule.score * multiplier;
        reasons.push(`+ ${word}`);
      }
    }
  }

  return { score, reasons };
}

function calculateScore(story) {
  const title = (story.title || "").toLowerCase();
  const summary = (story.summary || "").toLowerCase();

  // --------------------------------------------------------
  // Hard rejection
  // --------------------------------------------------------

  for (const word of BANNED_TOPICS) {
    if (containsWord(title, word) || containsWord(summary, word)) {
      return {
        score: -100,
        reasons: [`Rejected: ${word}`],
      };
    }
  }

  // --------------------------------------------------------
  // Must contain at least one TechQuest topic
  // --------------------------------------------------------

  const relevant = REQUIRED_TOPICS.some(
    word =>
      containsWord(title, word) ||
      containsWord(summary, word)
  );

  if (!relevant) {
    return {
      score: -100,
      reasons: ["Rejected: not a TechQuest story"],
    };
  }

  // --------------------------------------------------------
  // Score title (worth double)
  // --------------------------------------------------------

  const titleScore = scoreText(title, 2);

  // --------------------------------------------------------
  // Score summary
  // --------------------------------------------------------

  const summaryScore = scoreText(summary, 1);

  return {
    score: titleScore.score + summaryScore.score,
    reasons: [...titleScore.reasons, ...summaryScore.reasons],
  };
}

// ===========================================================

export function filterRelevantStories(stories) {
  // Score every story
  const rankedStories = stories.map((story) => {
    const result = calculateScore(story);

    return {
      ...story,
      relevanceScore: result.score,
      relevanceReasons: result.reasons,
    };
  });

  // Show ALL scored stories
  console.group("🧠 TechQuest Relevance Engine");

  console.log(`📰 Total stories received: ${rankedStories.length}`);

  console.table(
    rankedStories.map((story) => ({
      Score: story.relevanceScore,
      Title: story.title,
      Reasons: story.relevanceReasons.join(", "),
    }))
  );

  // Keep only good stories
  const filteredStories = rankedStories
    .filter((story) => story.relevanceScore >= 18)
    .sort((a, b) => b.relevanceScore - a.relevanceScore);

  console.log(
    `✅ Stories after filtering: ${filteredStories.length}`
  );

  console.table(
    filteredStories.map((story) => ({
      Score: story.relevanceScore,
      Title: story.title,
      Source: story.source,
      Reasons: story.relevanceReasons.join(", "),
    }))
  );

  console.groupEnd();

  return filteredStories;
}