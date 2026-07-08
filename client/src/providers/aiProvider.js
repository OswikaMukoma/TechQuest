import { getTopStories } from "../api/newsApi";
import { normalizeNewsArticle } from "../services/storyNormalizer";

export async function getAIStories() {
  const articles = await getTopStories("technology");

  return articles.map(normalizeNewsArticle);
}