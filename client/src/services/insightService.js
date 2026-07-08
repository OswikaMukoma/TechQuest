import { buildInsightPrompt } from "../utils/buildInsightPrompt";

export async function getTechQuestInsight(story) {
  // Build the prompt (we'll send this to OpenAI next)
  const prompt = buildInsightPrompt(story);

  console.log("🧠 TechQuest Prompt");
  console.log(prompt);

  // Temporary mock response
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    whatHappened:
      "Microsoft announced a new initiative aimed at helping universities integrate generative AI into teaching through cloud resources and training.",

    whyItMatters:
      "Artificial intelligence is becoming an important workplace skill. Students who understand how AI is used in education and industry may be better prepared for internships, graduate programmes and future careers.",

    quickCheck: [
      {
        question:
          "What is the main purpose of Microsoft's new initiative?",
        options: [
          "Improve gaming",
          "Help universities adopt AI",
          "Launch new smartphones",
          "Reduce tuition fees",
        ],
        answer: 1,
      },
      {
        question:
          "Why could this initiative matter to students?",
        options: [
          "It may improve AI-related skills",
          "It shortens university degrees",
          "It guarantees employment",
          "It replaces lecturers",
        ],
        answer: 0,
      },
    ],

    prompt,
  };
}