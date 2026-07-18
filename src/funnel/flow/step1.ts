import type { Answers, Beat, Bullet, Opt } from "@/funnel/flow/types";

export const DESCRIBE_OPTIONS: Opt[] = [
  { label: "Business Owner", emoji: "💼" },
  { label: "Marketing Professional", emoji: "📣" },
  { label: "Influencer/Blogger", emoji: "🧑‍🎤" },
  { label: "Expert/Freelancer/Coach", emoji: "🧑" },
];

const no = (a: Answers) => a.hasNiche === "No";
const yes = (a: Answers) => a.hasNiche === "Yes";

export const STEP1: Beat[] = [
  { t: "bot", step: "niche", text: "Let's start by uncovering your Creator DNA. 🧬" },
  { t: "bot", text: "Think of it as three key components: Who, What, and Unique Feature.", card: { kind: "dna" } },
  { t: "ask", id: "dna-intro", q: { kind: "continue", label: "Got it! Let's move on" } },
  { t: "bot", text: "How would you describe yourself?" },
  { t: "ask", id: "describe", q: { kind: "single", custom: true, options: DESCRIBE_OPTIONS } },
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
  { t: "ask", when: no, id: "skills", q: { kind: "text", placeholder: "Type here..." } },
  { t: "bot", when: no, text: "Got it!" },
  { t: "bot", when: no, text: "What topics do you love learning about?" },
  { t: "ask", when: no, id: "topics", q: { kind: "text", placeholder: "Type here..." } },
  { t: "bot", when: no, text: "Okay, noted!" },
  { t: "bot", when: no, text: "Who do you love helping or chatting with the most?" },
  { t: "ask", when: no, id: "helping", q: { kind: "text", placeholder: "Type here..." } },
  { t: "bot", when: no, text: "Aha, got it!" },
  { t: "bot", when: no, text: "Is there anything people usually ask you for advice on?" },
  { t: "ask", when: no, id: "advice", q: { kind: "text", placeholder: "Type here..." } },
  { t: "bot", when: no, text: "These 3 niches sound just like you! Select one or regenerate." },
  { t: "bot", when: no, text: "Don't worry - you can update your niche anytime in the profile settings." },
  { t: "ask", when: no, id: "niche-gen", q: { kind: "nicheGen" } },
];

export const STEP1_YES: Beat[] = [
  { t: "bot", when: yes, text: "Sounds great! 👍🏻" },
  { t: "bot", when: yes, text: "Clear direction is the first step to growth." },
  { t: "bot", when: yes, text: "What's your niche?" },
  { t: "ask", when: yes, id: "niche-list", q: { kind: "nicheList", custom: true, options: [
    { label: "Beauty blogger", emoji: "💄" },
    { label: "Family/mom blogger", emoji: "👩‍👧‍👦" },
    { label: "Fashion & styling tips", emoji: "👗" },
    { label: "Vlogs/relatable life content", emoji: "🎥" },
    { label: "Fitness motivator", emoji: "💪" },
    { label: "Food & recipe content", emoji: "🍳" },
  ] } },
];

/** Tapping this asks the bot for examples instead of answering, so the flow branches on it. */
export const EXAMPLE_ASK = "Do you have an example?";

const UNIQUE_EXAMPLES: Bullet[] = [
  { title: "Your story or background", sub: "career switch, immigrant experience, self-taught journey" },
  { title: "Your point of view", sub: "honest takes, beginner-friendly, no fluff" },
  { title: "A recognizable format or style", sub: "quick tips, \"before/after,\" mini storytelling" },
  { title: "Your humor or tone", sub: "dry jokes, relatable memes, self-deprecating, bold & motivating, playful" },
  { title: "A skill, experience, or promise to your audience", sub: "teaching, organizing, explaining simply, practical tips only, real examples" },
];

const wantsExample = (a: Answers) => a["unique-feature"] === EXAMPLE_ASK;

export const STEP1_END: Beat[] = [
  { t: "bot", text: "Good job!" },
  { t: "bot", text: "You've chosen a niche with real power!" },
  { t: "ask", id: "dna-nailed", q: { kind: "continue", label: "I nailed it! 💪" } },
  { t: "bot", text: "Your Creator DNA is shaping up nicely - but hold on, we're not done yet!", card: { kind: "dna", done: { who: true, what: true } } },
  { t: "ask", id: "dna-next", q: { kind: "continue", label: "Next piece, please!" } },
  { t: "bot", text: "Which platforms do you plan to post on?" },
  { t: "ask", id: "platforms", q: { kind: "platforms", cta: "Next", other: true, options: [
      { label: "Instagram", icon: "instagram" },
      { label: "YouTube", icon: "youtube" },
      { label: "TikTok", icon: "tiktok" },
    ] } },
  { t: "bot", text: "Understood, moving on!" },
  { t: "bot", text: "Are there any topics, trends or interests you'd like to include in your content?" },
  { t: "ask", id: "topics-include", q: { kind: "yesNoText", placeholder: "Type here..." } },
  { t: "bot", text: "Got you!" },
  { t: "bot", text: "Are there any topics you'd like to avoid in your content?" },
  { t: "ask", id: "topics-avoid", q: { kind: "yesNoText", placeholder: "Type here..." } },
  { t: "bot", text: "Almost there, creator! 🔜" },
  { t: "bot", text: "Is there anything that makes you or your brand stand out?" },
  { t: "ask", id: "unique-feature", q: { kind: "yesNoText", placeholder: "Type here...", example: EXAMPLE_ASK } },
  { t: "bot", when: wantsExample, text: "Not sure yet? Totally okay. Your \"unique thing\" can be simple, like:", list: UNIQUE_EXAMPLES },
  { t: "bot", when: wantsExample, text: "So, how do you think, is there anything that makes you or your brand stand out?" },
  { t: "ask", when: wantsExample, id: "unique-answer", q: { kind: "yesNoText", placeholder: "Type here...", no: "Not yet - I'm still discovering my unique angle", yes: "Yes - I have a clear \"thing\" that makes my content feel like me" } },
  { t: "bot", text: "Boom! Your Creator DNA is ready! 🎉", card: { kind: "dna", done: { who: true, what: true, unique: true } } },
  { t: "summary", id: "dna-summary", kind: "dna", cta: "First Mission complete!" },
];

/** The "No" button of a yesNoText beat can carry a custom label (unique-answer has a long one),
 *  so read the decline label off the beat itself instead of hardcoding it. */
const declineLabel = (id: string): string => {
  const b = STEP1_END.find((x) => x.t === "ask" && x.id === id);
  return b?.t === "ask" && b.q.kind === "yesNoText" ? b.q.no ?? "No" : "No";
};

/** A yesNoText answer is either a decline or the text the user typed. Declines all collapse to
 *  "No" for the summary; anything else is the users own words. */
export function yesNoAnswer(answers: Answers, id: string): string | undefined {
  const v = answers[id];
  if (!v) return undefined;
  return v === declineLabel(id) ? "No" : v;
}

/** unique-feature holds EXAMPLE_ASK when the user tapped "Do you have an example?" instead of
 *  answering - that is a request for help, never their unique feature, so the real answer is
 *  the one they gave afterwards on the unique-answer beat. */
export function uniqueFeature(answers: Answers): string | undefined {
  return answers["unique-feature"] === EXAMPLE_ASK
    ? yesNoAnswer(answers, "unique-answer")
    : yesNoAnswer(answers, "unique-feature");
}
