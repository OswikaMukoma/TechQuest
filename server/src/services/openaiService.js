import OpenAI from "openai";
import { buildInsightPrompt } from "../prompts/buildInsightPrompt.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateTechQuestInsight(story) {
  const prompt = buildInsightPrompt(story);

  const response = await client.responses.create({
    model: "gpt-5-nano",

    input: prompt,

    text: {
      format: {
        type: "json_object",
      },
    },
  });

  const output = response.output_text;

  console.log("\n========== AI RESPONSE ==========");
  console.log(output);
  console.log("=================================\n");

  return JSON.parse(output);
}