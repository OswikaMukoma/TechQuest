const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const BASE_URL = "https://newsapi.org/v2";

/**
 * Fetch top headlines for a category.
 * Returns the raw NewsAPI articles.
 */
export async function getTopStories(category = "technology") {
  const url = `${BASE_URL}/top-headlines?category=${category}&language=en&pageSize=12&apiKey=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`NewsAPI Error: ${response.status}`);
  }

  const data = await response.json();

  // Temporary development log (remove later if desired)
  console.log("📰 Raw NewsAPI Articles:", data.articles);

  return data.articles;
}