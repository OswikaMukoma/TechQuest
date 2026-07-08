import { getTopTechNews } from "../api/gnewsApi";

function estimateReadTime(text = "") {
  const words = text.split(" ").length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function mapArticle(article) {
  return {
    id: article.url,

    title: article.title,

    summary: article.description || "No description available.",

    image:
      article.image ||
      "https://placehold.co/600x400?text=TechQuest",

    source: article.source.name,

    url: article.url,

    publishedAt: article.publishedAt,

    readTime: estimateReadTime(
      `${article.title} ${article.description || ""}`
    ),

    category: "Technology",

    featured: false,
  };
}

export async function getTrendingStories() {
  const articles = await getTopTechNews();

  return articles.map(mapArticle);
}