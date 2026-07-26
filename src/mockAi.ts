import { knowledgeBase } from "./data/knowledgeBase";

const FALLBACK_ANSWER =
  "I don't have a specific answer for that yet. Try one of the suggested questions below, or rephrase your question using terms like initiative, timeline, approval, or resources.";

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}

function scoreMatch(query: string, keywords: string[]): number {
  const normalizedQuery = normalize(query);
  let score = 0;

  for (const keyword of keywords) {
    const normalizedKeyword = normalize(keyword);
    if (normalizedQuery.includes(normalizedKeyword)) {
      score += normalizedKeyword.split(" ").length;
    }
  }

  return score;
}

export async function getMockResponse(question: string): Promise<string> {
  await delay(600 + Math.random() * 800);

  const exactMatch = knowledgeBase.find(
    (entry) => normalize(entry.question) === normalize(question),
  );
  if (exactMatch) return exactMatch.answer;

  let bestEntry = knowledgeBase[0];
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    const keywordScore = scoreMatch(question, entry.keywords);
    const questionScore = scoreMatch(question, [entry.question]) * 2;
    const totalScore = keywordScore + questionScore;

    if (totalScore > bestScore) {
      bestScore = totalScore;
      bestEntry = entry;
    }
  }

  return bestScore > 0 ? bestEntry.answer : FALLBACK_ANSWER;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
