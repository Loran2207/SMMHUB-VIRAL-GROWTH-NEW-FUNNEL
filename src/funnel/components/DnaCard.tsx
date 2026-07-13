import type { DnaState } from "@/funnel/flow/types";

/**
 * Creator DNA illustration (real Figma export). Progresses through 4 states:
 * 1 = "Who" active (intro), 2 = "What" active (Who done), 3 = "Unique Feature" active (Who + What
 * done), 4 = all three parts checked (the "Boom! Your Creator DNA is ready!" beat).
 *
 * The PNGs are 996x636 with an opaque #f3f4f6 margin baked around a 960x600 white card at
 * offset (18,15). That margin reads as a grey box on the stage and squares off the corners,
 * so the image is cropped back to the card and clipped to 16px - the same radius as the chat
 * bubbles. 996/960 = 103.75% wide; 18/996*103.75 = 1.875% left; 15/996*103.75 = 1.5625% top
 * (percentage margins resolve against the wrapper width).
 */
export function DnaCard({ done }: { done?: DnaState }) {
  const n = done?.unique ? 4 : done?.who && done?.what ? 3 : done?.who ? 2 : 1;
  return (
    <div className="w-full overflow-hidden rounded-[16px] bg-white shadow-bubble" style={{ aspectRatio: "960 / 600" }}>
      <img
        src={`/img/dna-card-${n}.png`}
        alt="Creator DNA"
        draggable={false}
        className="block max-w-none select-none"
        style={{ width: "103.75%", marginLeft: "-1.875%", marginTop: "-1.5625%" }}
      />
    </div>
  );
}
