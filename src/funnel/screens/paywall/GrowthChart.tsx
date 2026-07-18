import type { ReactNode } from "react";
import { StartButton } from "@/funnel/screens/paywall/bits";

/** A white pill/circle floating on the white header. shadow-card separates it from the bg. */
function Bubble({ children, className }: { children: ReactNode; className: string }) {
  return <div className={`absolute grid place-items-center rounded-full bg-white shadow-card ${className}`}>{children}</div>;
}

/**
 * Paywall header. Clean white composition: Sandy (the funnel's coach) centered, with real social
 * brand icons and engagement chips floating around her - all on white. Solid colors, real <img>s
 * and inline svg so the Figma capture keeps it (no CSS gradients, no pseudo-elements).
 */
export function GrowthChart() {
  return (
    <div className="w-full bg-white">
      <div className="relative mx-auto h-[264px] w-full max-w-[402px] overflow-hidden">
        {/* soft halo behind Sandy so she doesn't float in empty white */}
        <div className="absolute left-1/2 top-[26px] size-[220px] -translate-x-1/2 rounded-full bg-[#f4f3ff]" />
        <img
          src="/img/sandy.png"
          alt=""
          draggable={false}
          className="absolute bottom-0 left-1/2 block h-[300px] w-auto -translate-x-1/2 select-none"
        />
        {/* White fade at the bottom so Sandy melts into the background. Inline SVG gradient, not a
            CSS gradient (a CSS gradient captures back into Figma as a grey box). */}
        <svg aria-hidden viewBox="0 0 402 96" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 block h-[96px] w-full">
          <defs>
            <linearGradient id="pw-sandy-fade" x1="0" y1="0" x2="0" y2="96" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="0.7" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect width="402" height="96" fill="url(#pw-sandy-fade)" />
        </svg>
        {/* real brand icons in white circles */}
        <Bubble className="left-5 top-3 size-[48px]"><img src="/img/platform-instagram.svg" alt="" className="size-[26px]" /></Bubble>
        <Bubble className="right-5 top-3 size-[48px]"><img src="/img/platform-tiktok.svg" alt="" className="h-[26px] w-[23px]" /></Bubble>
        <Bubble className="left-2 top-[104px] size-[44px]"><img src="/img/platform-youtube.svg" alt="" className="h-[17px] w-[24px]" /></Bubble>
        {/* engagement chips */}
        <div className="absolute right-2 top-[100px] flex items-center gap-1.5 rounded-full bg-white px-3 py-[7px] shadow-card">
          <span className="text-[13px] leading-none">❤️</span>
          <span className="font-ui text-[13px] font-bold leading-none text-ink">12.4k</span>
        </div>
        <div className="absolute bottom-[18px] left-4 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-card">
          <span className="font-ui text-[15px] font-extrabold leading-none text-ink">234k</span>
          <span className="font-ui text-[11px] font-medium leading-none text-ink-soft">followers</span>
          <span className="flex items-center gap-0.5 rounded-full bg-[#e7f8ef] px-2 py-[3px] font-ui text-[11px] font-bold leading-none text-[#00b67a]">
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden><path d="M4.5 1.5V7.5M4.5 1.5L1.8 4.2M4.5 1.5L7.2 4.2" stroke="#00b67a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            218%
          </span>
        </div>
      </div>
      <p className="mt-1 w-full text-center font-ui text-[11px] font-medium leading-[1.4] text-[rgba(70,80,99,0.5)]">
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
