import { StartButton } from "@/funnel/screens/paywall/bits";

/**
 * The Now / Your goal follower-growth chart (Figma 45573:2209, minus the progress chip the page
 * renders above it) and the headline under it (45573:2211).
 *
 * The illustration - both photos, both stat cards, the hand-drawn circles, the grey chevrons and
 * the white haze band that fades the photos out - is one baked PNG (390 x 292.67 at the design
 * width, full bleed, no side gutter). Its bottom band is opaque white, so the tab pill and the
 * caption sit on top of it. The page tint behind it is an inline SVG gradient: a CSS gradient
 * captures back into Figma as a flat grey rectangle.
 */
export function GrowthChart() {
  return (
    <div className="relative w-full pt-[3.2px] pb-[26.42px]">
      <svg
        aria-hidden
        viewBox="0 0 390 322"
        preserveAspectRatio="none"
        className="absolute inset-0 block h-full w-full"
      >
        <defs>
          <linearGradient id="pw-chart-tint" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FBFCFD" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="390" height="322" fill="url(#pw-chart-tint)" />
      </svg>

      <img src="/img/pw-chart.png" alt="" draggable={false} className="relative block w-full select-none" />

      <div
        className="absolute bottom-[48.42px] left-1/2 -ml-[125px] h-9 w-[250px] rounded-lg"
        style={{ boxShadow: "0px 4px 8px -2px rgba(16,24,40,0.10), 0px 2px 4px -2px rgba(16,24,40,0.06)" }}
      >
        <svg aria-hidden viewBox="0 0 250 36" fill="none" className="absolute inset-0 block h-full w-full">
          <defs>
            <linearGradient id="pw-pill-stroke" gradientUnits="userSpaceOnUse" x1="107.5" y1="0" x2="260" y2="0">
              <stop offset="0" stopColor="#EAECF0" />
              <stop offset="1" stopColor="#5E39FE" />
            </linearGradient>
          </defs>
          <rect
            x="0.5"
            y="0.5"
            width="249"
            height="35"
            rx="8"
            fill="#FFFFFF"
            stroke="url(#pw-pill-stroke)"
            strokeWidth="1"
          />
        </svg>
        <div className="relative flex h-full items-center">
          <span className="flex-1 text-center font-ui text-[14px] font-bold leading-5 text-[#9096a1]">Now</span>
          <span className="block h-[18px] w-px shrink-0 bg-[#EAECF0]" />
          <span className="flex-1 text-center font-ui text-[14px] font-bold leading-5 text-[#5e39ff]">Your goal</span>
        </div>
      </div>

      <p className="absolute bottom-[14.42px] left-1/2 -ml-[114px] w-[228px] whitespace-nowrap text-center font-ui text-[11px] font-medium leading-[1.4] text-[rgba(70,80,99,0.5)]">
        This chart is for illustrative purposes only
      </p>
    </div>
  );
}

/** Figma 45573:2211. The layer is named "Start 7-day trial"; the text it renders is "Start My Plan". */
export function Headline({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex w-full flex-col items-center px-4">
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
