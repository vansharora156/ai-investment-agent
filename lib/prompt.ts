export function createPrompt(company: string) {
  return `
You are an expert investment analyst.

Analyze the company "${company}".

Return ONLY valid JSON.

Format:

{
  "overview": "",
  "strengths": [
    "",
    "",
    ""
  ],
  "risks": [
    "",
    "",
    ""
  ],
  "recommendation": "INVEST or PASS",
  "confidence": 0
}

Rules:
- Recommendation must be either INVEST or PASS.
- Confidence must be a number between 0 and 100.
- Do not include markdown.
- Do not wrap the JSON in \`\`\`.
`;
}