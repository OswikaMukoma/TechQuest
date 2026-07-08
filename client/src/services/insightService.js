const API_URL = "http://localhost:5000/api/insight";

export async function getTechQuestInsight(story) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: story.title,
        description: story.summary,
        source: story.source,
      }),
    });

    if (!response.ok) {
      throw new Error("Insight unavailable");
    }

    return await response.json();
  } catch (error) {
    console.error("Insight Error:", error);

    return null;
  }
}