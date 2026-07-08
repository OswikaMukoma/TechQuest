const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

const BASE_URL = "https://gnews.io/api/v4";

export async function getTopTechNews() {
  const url = `${BASE_URL}/top-headlines?category=technology&lang=en&max=10&apikey=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await response.json();

  return data.articles;
}