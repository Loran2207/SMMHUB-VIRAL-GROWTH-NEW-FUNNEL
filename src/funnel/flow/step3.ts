import type { Beat } from "@/funnel/flow/types";

const S = (label: string) => ({ label });

export const STEP3: Beat[] = [
  { t: "bot", step: "goals", text: "Hey again!" },
  { t: "bot", text: "This is the final stretch - let's lock in your goals so every idea pushes you toward them." },
  { t: "ask", id: "goals-start", q: { kind: "continue", label: "Okay, let's go!" } },
  { t: "bot", text: "How many followers do you have right now?" },
  { t: "ask", id: "followers-now", q: { kind: "single", options: [S("Under 1k"), S("1k - 10k"), S("10k - 100k"), S("100k+")] } },
  { t: "bot", text: "What's your follower goal?" },
  { t: "ask", id: "follower-goal", q: { kind: "single", options: [S("10k"), S("100k"), S("500k"), S("1m+")] } },
  { t: "bot", text: "How many views do your reels get on average?" },
  { t: "ask", id: "views-now", q: { kind: "single", options: [S("Under 1k"), S("1k - 10k"), S("10k - 100k"), S("100k+")] } },
  { t: "bot", text: "What's your income goal?" },
  { t: "ask", id: "income", q: { kind: "single", options: [S("$1k+/month"), S("$5k+/month"), S("$10k+/month"), S("$20k+/month")] } },
  { t: "bot", text: "What's your main target right now?" },
  { t: "ask", id: "target", q: { kind: "single", options: [S("Grow my audience"), S("Monetize my content"), S("Build my personal brand"), S("Drive sales")] } },
  { t: "bot", text: "How often do you post?" },
  { t: "ask", id: "frequency", q: { kind: "single", options: [S("Daily"), S("A few times a week"), S("Weekly"), S("Randomly")] } },
  { t: "bot", text: "What are your biggest challenges?" },
  { t: "ask", id: "challenges", q: { kind: "multi", cta: "Next", options: [S("Staying consistent"), S("Coming up with ideas"), S("Editing videos"), S("Growing my reach"), S("Finding time")] } },
  { t: "summary", id: "goals-summary", kind: "goals", cta: "Okay, I'm ready!" },
];
