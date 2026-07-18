import { StartButton } from "@/funnel/screens/paywall/bits";

/** A small rising line + soft fill. Solid colors + inline svg so the capture keeps it. */
function Sparkline() {
  return (
    <svg width="138" height="34" viewBox="0 0 138 34" fill="none" className="mt-2 block">
      <path d="M2 30 L26 24 L50 26 L74 15 L98 17 L136 3" stroke="#00B67A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 30 L26 24 L50 26 L74 15 L98 17 L136 3 L136 34 L2 34 Z" fill="#E7F8EF" />
    </svg>
  );
}

/**
 * Paywall header. The old man before/after is gone (reviewer note): now Sandy, the funnel's coach,
 * with a single clean follower-growth stat card. Solid colors + inline svg + one <img> so it
 * survives the Figma capture (no CSS gradients, no pseudo-elements).
 */
export function GrowthChart() {
  return (
    <div className="w-full">
      <div className="relative h-[330px] w-full overflow-hidden bg-[#f5f4ff]">
        <img
          src="/img/sandy.png"
          alt=""
          draggable={false}
          className="absolute bottom-0 right-[-6px] block h-[330px] w-auto select-none"
        />
        {/* Follower-growth stat card */}
        <div className="absolute left-4 top-5 w-[176px] rounded-[16px] bg-white p-[14px] shadow-card">
          <p className="font-ui text-[11px] font-medium leading-none text-ink-soft">Followers</p>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="font-ui text-[24px] font-extrabold leading-none text-ink">234k</span>
            <span className="flex items-center gap-0.5 rounded-full bg-[#e7f8ef] px-2 py-[3px] font-ui text-[11px] font-bold leading-none text-[#00b67a]">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden><path d="M4.5 1.5V7.5M4.5 1.5L1.8 4.2M4.5 1.5L7.2 4.2" stroke="#00b67a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              218%
            </span>
          </div>
          <Sparkline />
        </div>
        {/* small like chip */}
        <div className="absolute left-4 top-[184px] flex items-center gap-1.5 rounded-full bg-white px-3 py-[7px] shadow-card">
          <span className="text-[13px] leading-none">❤️</span>
          <span className="font-ui text-[13px] font-bold leading-none text-ink">12.4k</span>
        </div>
      </div>
      <p className="mt-2 w-full text-center font-ui text-[11px] font-medium leading-[1.4] text-[rgba(70,80,99,0.5)]">
        This image is for illustrative purposes only
      </p>
    </div>
  );
}

/** Figma 45573:2211. The layer is named "Start 7-day trial"; the text it renders is "Start My Plan". */
export function Headline({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex w-full flex-col items-center px-4 pt-3">
      <div className="w-full text-center font-ui text-[20px] font-bold leading-[26px] text-[#02082d]">
        <p>Get your personal</p>
        <p>
          <span className="text-[#5e39ff]">Content Plan</span>
          <span>{" before it’s gone!"}</span>
        </p>
      </div>
      <div className="h-4 w-full" />
      <StartButton label="Start My Plan" onStart={onStart} />
    </div>
  );
}
