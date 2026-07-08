import { getAIStories } from "../providers/aiProvider";

export async function fetchHighlights() {
  const aiStories = await getAIStories();

  return [
    {
      id: "ai",
      name: "AI",
      icon: "🤖",
      color: "purple",
      featured: aiStories[0] ?? null,
      stories: aiStories.slice(1, 7),
    },
  ];
}