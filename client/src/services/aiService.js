import { fetchStories } from "./newsService";

export async function getAIHighlights() {
  const stories = await fetchStories("technology");

  return {
    category: "AI",
    featured: stories[0] || null,
    stories: stories.slice(1, 7),
  };
}