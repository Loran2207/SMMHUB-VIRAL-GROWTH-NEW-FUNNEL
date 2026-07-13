export type StepKey = "niche" | "audience" | "goals" | "plan";
export type ScreenKind = "hero" | "welcome1" | "welcome2" | "today" | "checkout" | "paywall" | "loggedin";

export const STEP_TITLE: Record<StepKey, string> = {
  niche: "Step 1: Niche",
  audience: "Step 2: Target Audience",
  goals: "Step 3: Goals",
  plan: "Step 4: Growth Content Plan",
};

export type Opt = { label: string; value?: string; emoji?: string };
export type DnaState = { who?: boolean; what?: boolean; unique?: boolean };
export type Card = { kind: "dna"; done?: DnaState };
/** A bold line with an italic sub-line, rendered inside a bot bubble (the "unique feature" examples). */
export type Bullet = { title: string; sub: string };

export type Question =
  | { kind: "continue"; label: string }
  | { kind: "single"; options: Opt[]; custom?: boolean }
  | { kind: "yesno" }
  | { kind: "multi"; options: Opt[]; custom?: boolean; cta?: string }
  | { kind: "text"; placeholder: string; cta?: string }
  | { kind: "nicheList"; options: Opt[]; custom?: boolean }
  | { kind: "nicheGen" }
  | { kind: "age" }
  | { kind: "language" }
  | { kind: "gender"; options: Opt[] }
  | { kind: "email" }
  | { kind: "optin"; yes: string; no: string }
  /** Two buttons first; the text field only appears after "Yes". `example` adds an extra
   *  "Do you have an example?" row above them. */
  | { kind: "yesNoText"; placeholder: string; yes?: string; no?: string; example?: string };

export type Answers = Record<string, string>;

export type Beat =
  | { t: "bot"; step?: StepKey; text: string; card?: Card; list?: Bullet[]; italic?: boolean; when?: (a: Answers) => boolean }
  | { t: "ask"; step?: StepKey; id: string; q: Question; when?: (a: Answers) => boolean }
  | { t: "summary"; step?: StepKey; id: string; kind: "dna" | "audience" | "goals"; cta: string; when?: (a: Answers) => boolean }
  | { t: "screen"; step?: StepKey; id: string; screen: ScreenKind; when?: (a: Answers) => boolean };
