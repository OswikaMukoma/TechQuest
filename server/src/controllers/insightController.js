import { generateTechQuestInsight } from "../services/openaiService.js";

export async function generateInsight(req, res) {
  try {
    const { title, description, source } = req.body;

    // Basic validation
    if (!title) {
      return res.status(400).json({
        error: "Story title is required.",
      });
    }

    const story = {
      title,
      description,
      source,
    };

    console.log("\n==============================");
    console.log("📩 Incoming Story");
    console.log("==============================");
    console.log(story);

    const insight = await generateTechQuestInsight(story);

    console.log("\n==============================");
    console.log("✅ Insight Generated");
    console.log("==============================");

    return res.json(insight);

  } catch (error) {
    console.error("\n❌ OpenAI Error");
    console.error(error);

    return res.status(500).json({
      error: "Failed to generate TechQuest Insight.",
      details: error.message,
    });
  }
}