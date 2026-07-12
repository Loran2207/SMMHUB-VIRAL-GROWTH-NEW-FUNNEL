import type { Beat } from "@/funnel/flow/types";
import { STEP1, STEP1_NO, STEP1_YES, STEP1_END } from "@/funnel/flow/step1";
import { STEP2 } from "@/funnel/flow/step2";
import { STEP3 } from "@/funnel/flow/step3";
import { STEP4 } from "@/funnel/flow/step4";

export const FLOW: Beat[] = [...STEP1, ...STEP1_NO, ...STEP1_YES, ...STEP1_END, ...STEP2, ...STEP3, ...STEP4];
