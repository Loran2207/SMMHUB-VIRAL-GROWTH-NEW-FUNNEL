import type { Beat } from "@/funnel/flow/types";

/**
 * The two screens that close the funnel. The long "Paywall - after" comes first; the Checkout is
 * where "Start My Plan" takes the user, and its close X ends the flow.
 */
export const OUTRO: Beat[] = [
  { t: "screen", id: "paywall", screen: "paywall" },
  { t: "screen", id: "checkout", screen: "checkout" },
];
