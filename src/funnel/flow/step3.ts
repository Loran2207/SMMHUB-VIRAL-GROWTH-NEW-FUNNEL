import type { Beat } from "@/funnel/flow/types";

const S = (label: string) => ({ label });

export const STEP3: Beat[] = [
  { t: "bot", step: "goals", text: "Hey again!" },
  { t: "bot", text: "This is the final stretch - let's lock in your goals so every idea pushes you toward them." },
  { t: "ask", id: "goals-start", q: { kind: "continue", label: "Okay, let's go!" } },
  { t: "bot", text: "How many followers do you currently have?" },
  { t: "ask", id: "followers-now", q: { kind: "single", options: [S("0-500"), S("1 000-5 000"), S("5 000-10 000"), S("10 000-50 000"), S("50 000-100 000"), S("100 000+")] } },
  { t: "bot", text: "What's your follower goal?" },
  { t: "ask", id: "follower-goal", q: { kind: "single", options: [S("5k-10k"), S("10k-50k"), S("50k-100k"), S("100k-500k"), S("500k-1m"), S("1m+")] } },
  { t: "bot", text: "How many views do your videos usually get?" },
  { t: "ask", id: "views-now", q: { kind: "single", options: [S("0-200"), S("200-500"), S("500-1 000"), S("1 000-5 000"), S("5 000-10 000"), S("10 000-50 000")] } },
  { t: "bot", text: "What's your income goal as a creator or business?" },
  { t: "ask", id: "income", q: { kind: "single", options: [S("Up to $1k/month"), S("$1k-$5k/month"), S("$5k-$10k/month"), S("$10k-$20k/month"), S("$20k+/month"), S("Prefer not to answer")] } },
  { t: "bot", text: "First things first: what's your main goal as a creator?" },
  { t: "ask", id: "target", q: { kind: "single", options: [
    { label: "Grow my audience", emoji: "📈" },
    { label: "Get more clients/sales", emoji: "💰" },
    { label: "Create content to express my creativity", emoji: "🎨" },
  ] } },
  { t: "bot", text: "How often do you post content right now?" },
  { t: "ask", id: "frequency", q: { kind: "single", options: [S("Once a week"), S("2-3 times a week"), S("4-5 times a week"), S("Every day"), S("Randomly"), S("Prefer not to answer")] } },
  { t: "bot", text: "What challenges are you facing with content creation?" },
  { t: "ask", id: "challenges", q: { kind: "multi", cta: "Next", options: [S("I don't know what to post"), S("I can't stay consistent"), S("I don't get enough views"), S("I feel insecure or overthink"), S("I don't have time"), S("No challenges")] } },
  { t: "summary", id: "goals-summary", kind: "goals", cta: "Okay, let's gooo!" },
];
