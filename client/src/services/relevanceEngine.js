// ======================================================
// TechQuest Relevance Engine v3
// ======================================================

// ---------- Trusted Sources ----------

const trustedSources = [
  "TechCrunch",
  "The Verge",
  "Ars Technica",
  "Wired",
  "MIT Technology Review",
  "BBC",
  "Reuters",
  "Associated Press",
  "The Guardian",
  "Business Insider",
  "ComputerWeekly.com",
  "CNBC",
  "Bloomberg",
  "Forbes",
  "ZDNet",
  "InfoWorld",
  "VentureBeat",
  "OpenAI",
  "Microsoft",
  "Google",
  "AWS",
  "O'Reilly",
];

// ---------- Sources to Ignore ----------

const blockedSources = [
  "PRNewswire",
  "GlobeNewswire",
  "Business Wire",
  "Yahoo Entertainment",
  "The Daily Hodl",
  "ZyCrypto",
  "Biztoc.com",
  "Crypto Briefing",
  "PhoneArena",
  "Android Authority",
  "IGN",
  "Nintendo Life",
  "Eurogamer",
  "Digital Foundry",
];

// ---------- Topics TechQuest Wants ----------

const positiveKeywords = [
  "artificial intelligence",
  "ai",
  "machine learning",
  "deep learning",
  "chatgpt",
  "openai",
  "anthropic",
  "gemini",
  "copilot",

  "software engineering",
  "software developer",
  "developer",
  "programming",
  "coding",
  "python",
  "javascript",
  "java",
  "react",
  "github",

  "cloud",
  "aws",
  "azure",
  "google cloud",

  "cybersecurity",

  "career",
  "careers",
  "graduate",
  "graduates",
  "internship",
  "internships",
  "student",
  "students",
  "university",
  "universities",
  "scholarship",

  "research",

  "microsoft",
  "google",
  "amazon",
  "meta",
  "nvidia",

  "startup",
  "startups",
];

// ---------- Topics to Reject ----------

const blockedKeywords = [
  "iphone",
  "android",
  "galaxy",
  "pixel",
  "camera",
  "smartphone",
  "phone",

  "gaming",
  "playstation",
  "xbox",
  "steam",
  "fortnite",
  "minecraft",
  "call of duty",

  "celebrity",
  "movie",
  "movies",
  "tv",
  "netflix",
  "disney",

  "football",
  "soccer",
  "basketball",
  "nba",
  "fifa",

  "review",
  "hands-on",
  "benchmark",
  "unboxing",

  "rumor",
  "rumour",
  "leak",

  "bitcoin",
  "ethereum",
  "crypto",
  "cryptocurrency",

  "loan",
  "loans",
];

// ======================================================

function containsAny(text, list) {
  return list.some((word) => text.includes(word));
}

export function filterRelevantStories(stories) {
  const filtered = stories.filter((story) => {
    const source = (story.source || "").toLowerCase();

    const text = `
      ${story.title || ""}
      ${story.summary || ""}
      ${story.description || ""}
    `.toLowerCase();

    // Reject blocked sources
    if (
      blockedSources.some((s) =>
        source.includes(s.toLowerCase())
      )
    ) {
      return false;
    }

    // Prefer trusted sources, but don't require them
    const trusted =
      trustedSources.some((s) =>
        source.includes(s.toLowerCase())
      );

    // Reject unwanted topics
    if (containsAny(text, blockedKeywords)) {
      return false;
    }

    // Must mention at least one TechQuest topic
    if (!containsAny(text, positiveKeywords)) {
      return false;
    }

    // Calculate a simple relevance score
    let score = 0;

    positiveKeywords.forEach((word) => {
      if (text.includes(word)) score++;
    });

    if (trusted) score += 5;

    story.relevanceScore = score;

    return score >= 2;
  });

  filtered.sort(
    (a, b) => b.relevanceScore - a.relevanceScore
  );

  console.log(`📰 Received ${stories.length} stories`);
  console.log(`✅ Showing ${filtered.length} TechQuest stories`);

  console.table(
    filtered.map((story) => ({
      Score: story.relevanceScore,
      Source: story.source,
      Title: story.title,
    }))
  );

  return filtered;
}