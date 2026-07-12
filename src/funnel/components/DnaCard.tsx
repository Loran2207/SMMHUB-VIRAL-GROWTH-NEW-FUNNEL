import type { DnaState } from "@/funnel/flow/types";

/**
 * Creator DNA illustration (real Figma export). Progresses through 3 states:
 * 1 = "Who" active (intro), 2 = "What" active (Who done), 3 = "Unique" active (all done).
 */
export function DnaCard({ done }: { done?: DnaState }) {
  const n = done?.who && done?.what ? 3 : done?.who ? 2 : 1;
  return (
    <img
      src={`/img/dna-card-${n}.png`}
      alt="Creator DNA"
      draggable={false}
      className="block w-full select-none"
    />
  );
}
