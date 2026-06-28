import { model } from "./gemini";
import { createPrompt } from "./prompt";

export async function analyzeCompany(company: string) {
  try {
    const response = await model.invoke(createPrompt(company));

    return response.content;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Failed to analyze company.");
  }
}