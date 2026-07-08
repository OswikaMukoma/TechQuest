function estimateReadTime(text = "") {
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

export function normalizeNewsArticle(article) {
  return {
    id: article.url,

    title: article.title || "Untitled",

    summary:
      article.description ||
      "No description available.",

    image:
      article.urlToImage ||
      article.image ||
      "https://placehold.co/600x400?text=TechQuest",

    url: article.url,

    source:
      article.source?.name ||
      "Unknown Source",

    publishedAt: article.publishedAt,

    category: "Technology",

    readTime: estimateReadTime(
      `${article.title || ""} ${article.description || ""}`
    ),
  };
}

export function normalizeNASA(apod) {
  return {
    id: apod.date,

    title: apod.title,

    summary: apod.explanation,

    image: apod.url,

    url: apod.hdurl || apod.url,

    source: "NASA",

    category: "🚀 Space",

    publishedAt: apod.date,

    readTime: estimateReadTime(apod.explanation),
  };
}
