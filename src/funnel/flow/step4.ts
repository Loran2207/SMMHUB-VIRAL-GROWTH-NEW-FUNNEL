import type { Beat } from "@/funnel/flow/types";

export const STEP4: Beat[] = [
  { t: "bot", step: "plan", text: "You've done the hard thinking - your Creator DNA, target audience, and strategic goals are all set." },
  { t: "bot", text: "Now I turn all of that into something practical you can use right away." },
  { t: "ask", id: "plan-finally", q: { kind: "continue", label: "Finally 😅" } },
  { t: "bot", text: "That's where your Growth Content Plan comes in." },
  { t: "bot", text: "A monthly calendar of daily short-form content ideas, built to help you grow your audience and generated personally for you." },
  { t: "bot", text: "Each idea guides your next post, and when one clicks, you can turn it into a professionally written short-video script in just a few taps." },
  { t: "ask", id: "plan-easier", q: { kind: "continue", label: "Way easier" } },
  { t: "bot", text: "Exactly!" },
  { t: "bot", text: "And the best part: your content plan can evolve over time. You can explore new ideas, refine scripts, and try fresh angles as you grow." },
  { t: "ask", id: "plan-reassuring", q: { kind: "continue", label: "Great!" } },
  { t: "bot", text: "From now on, the \"I don't know what to post\" problem is officially retired 🪦😉" },
  { t: "bot", text: "Add your email so I can save your progress and keep everything ready for you inside your SMMHUB account." },
  { t: "ask", id: "email", q: { kind: "email" } },
  { t: "bot", text: "Do you want to receive emails with proven tips to grow your audience and monetize your content?" },
  { t: "ask", id: "optin", q: { kind: "optin", yes: "Sure, I'm in", no: "I don't want to receive tips or updates" } },
  { t: "bot", text: "Got it! Now let me tell you more about SMMHUB." },
  { t: "ask", id: "generate", q: { kind: "continue", label: "Continue" } },
];
