import type { Beat } from "@/funnel/flow/types";
import { STEP1, STEP1_NO, STEP1_YES, STEP1_END } from "@/funnel/flow/step1";

export const FLOW: Beat[] = [...STEP1, ...STEP1_NO, ...STEP1_YES, ...STEP1_END];
