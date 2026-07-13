import type { Beat } from "@/funnel/flow/types";

/**
 * The two screens that close the funnel, in the order the original flow (45573:13404) puts them:
 * the Checkout comes first, and the long "Paywall - after" is what the user lands on if they
 * dismiss it (the Checkout carries a close X, the paywall re-pitches the same plans at length).
 */
export const OUTRO: Beat[] = [
  { t: "screen", id: "checkout", screen: "checkout" },
  { t: "screen", id: "paywall", screen: "paywall" },
];
