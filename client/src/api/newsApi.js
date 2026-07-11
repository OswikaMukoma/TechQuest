const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const BASE_URL = "https://newsapi.org/v2/everything";

// TechQuest search topics
const SEARCH_QUERIES = [
  `"artificial intelligence"`,
  `"machine learning"`,
  `"graduate programme" OR internship OR hiring`,
  `"software engineering"`,
  `"cloud computing"`,
  `cybersecurity`,
  `universities OR scholarship`,
  `"technology policy"`,
  `"startup funding"`,
  `"developer tools"`
];

async function fetchQuery(query) {
  const url =
    `${BASE_URL}?` +
    new URLSearchParams({
      q: query,
      language: "en",
      sortBy: "publishedAt",
      pageSize: 10,
      apiKey: API_KEY,
    });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch news.");
  }

  const data = await response.json();

  return data.articles || [];
}

export async function getTopStories() {
  try {
    const results = await Promise.all(
      SEARCH_QUERIES.map((query) => fetchQuery(query))
    );

    // Merge all articles
    const allArticles = results.flat();

    // Remove duplicates using URL
    const uniqueArticles = Array.from(
      new Map(allArticles.map((article) => [article.url, article])).values()
    );

    console.log(
      `📰 TechQuest fetched ${uniqueArticles.length} unique articles`
    );

    return uniqueArticles;
  } catch (error) {
    console.error(error);
    return [];
  }
}