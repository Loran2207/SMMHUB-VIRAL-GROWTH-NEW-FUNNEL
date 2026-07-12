import type { Answers, Beat } from "@/funnel/flow/types";

const no = (a: Answers) => a.hasNiche === "No";
const yes = (a: Answers) => a.hasNiche === "Yes";

export const STEP1: Beat[] = [
  { t: "bot", step: "niche", text: "Let's start by uncovering your Creator DNA. 🧬" },
  { t: "bot", text: "Think of it as three key components: Who, What, and Unique Feature.", card: { kind: "dna" } },
  { t: "ask", id: "dna-intro", q: { kind: "continue", label: "Got it! Let's move on" } },
  { t: "bot", text: "How would you describe yourself?" },
  { t: "ask", id: "describe", q: { kind: "single", custom: true, options: [
    { label: "💼 Business Owner" },
    { label: "📣 Marketing Professional" },
    { label: "🧑‍💻 Influencer / Blogger" },
    { label: "🧑‍🏫 Expert / Freelancer / Coach" },
  ] } },
  { t: "bot", text: "Got it! 🙌" },
  { t: "bot", text: "That was precisely the 'Who' part.", card: { kind: "dna", done: { who: true } } },
  { t: "ask", id: "who-next", q: { kind: "continue", label: "Alright, what's next?" } },
  { t: "bot", text: "Have you chosen a niche for your content?" },
  { t: "ask", id: "hasNiche", q: { kind: "yesno" } },
];

export const STEP1_NO: Beat[] = [
  { t: "bot", when: no, text: "No panic - we're here to help." },
  { t: "bot", when: no, text: "What if we told you that you don't need to hunt for a niche... you ARE the niche? 👊🏻" },
  { t: "ask", when: no, id: "no-makes-sense", q: { kind: "continue", label: "Makes sense" } },
  { t: "bot", when: no, text: "We're sure you already have something valuable to offer your followers - and we can prove it." },
  { t: "ask", when: no, id: "no-please-do", q: { kind: "continue", label: "Please do!" } },
  { t: "bot", when: no, text: "Do you have any skills, experiences or hobbies that others might find interesting, helpful or valuable?" },
  { t: "ask", when: no, id: "skills", q: { kind: "text", placeholder: "e.g. I help friends with their CVs, or I enjoy learning about skincare. Anything you've done more than once can count." } },
  { t: "bot", when: no, text: "Got it!" },
  { t: "bot", when: no, text: "What topics do you love learning about?" },
  { t: "ask", when: no, id: "topics", q: { kind: "text", placeholder: "e.g. Design, mindset, tech" } },
  { t: "bot", when: no, text: "Okay, noted!" },
  { t: "bot", when: no, text: "Who do you love helping or chatting with the most?" },
  { t: "ask", when: no, id: "helping", q: { kind: "text", placeholder: "Your answer..." } },
  { t: "bot", when: no, text: "Aha, got it!" },
  { t: "bot", when: no, text: "Is there anything people usually ask you for advice on?" },
  { t: "ask", when: no, id: "advice", q: { kind: "text", placeholder: "Your answer..." } },
  { t: "bot", when: no, text: "These 3 niches sound just like you! Select one or regenerate." },
  { t: "bot", when: no, text: "Don't worry - you can update your niche anytime in the profile settings." },
  { t: "ask", when: no, id: "niche-gen", q: { kind: "nicheGen" } },
];

export const STEP1_YES: Beat[] = [
  { t: "bot", when: yes, text: "Sounds great! 👍🏻" },
  { t: "bot", when: yes, text: "Clear direction is the first step to growth." },
  { t: "bot", when: yes, text: "What's your niche?" },
  { t: "ask", when: yes, id: "niche-list", q: { kind: "nicheList", custom: true, options: [
    { label: "💄 Beauty blogger" },
    { label: "👩‍👧‍👦 Family / mom blogger" },
    { label: "👗 Fashion & styling tips" },
    { label: "🎥 Vlogs / relatable life content" },
    { label: "💪 Fitness motivator" },
    { label: "🍳 Food & recipe content" },
  ] } },
];

export const STEP1_END: Beat[] = [
  { t: "bot", text: "Good job!" },
  { t: "bot", text: "You've chosen a niche with real power!" },
  { t: "ask", id: "dna-nailed", q: { kind: "continue", label: "I nailed it! 💪" } },
  { t: "bot", text: "Boom! Your Creator DNA is ready! 🎉", card: { kind: "dna", done: { who: true, what: true, unique: true } } },
  { t: "summary", id: "dna-summary", kind: "dna", cta: "Let's see the results" },
];
