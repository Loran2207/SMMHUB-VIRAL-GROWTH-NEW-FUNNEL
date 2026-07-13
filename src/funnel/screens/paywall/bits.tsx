/** Pieces the Paywall reuses more than once. Figma 45573:2208 / 45573:2488 / 45573:2215. */

const BAR_SHADOW = "0px 4px 8px -2px rgba(16,24,40,0.10), 0px 2px 4px -2px rgba(16,24,40,0.06)";

/** One "14 / min" column of the countdown box. Figma 45573:1023 and 45573:1027. */
function Unit({ value, unit }: { value: string; unit: string }) {
  return (
    <span className="block w-7 text-center font-ui text-white">
      <span className="block text-[13px] font-semibold leading-[1.4]">{value}</span>
      <span className="block text-[11px] font-semibold leading-[1.4]">{unit}</span>
    </span>
  );
}

/**
 * The purple "Your welcome offer ends in" bar. Also sits on the Checkout.
 * The Figma fill is linear-gradient(79.17deg, #5e39fe, #5e39ff) - the two stops differ by 1/255 on
 * blue, so it ships as a solid colour (a CSS gradient captures back into Figma as a grey box).
 * The white corner glow is a real inline SVG ellipse + feGaussianBlur, not a CSS blur. Its sigma and
 * opacity (22.2 / 0.85, against the 22.2 / 0.75 the Figma node declares) are fitted to the rendered
 * pixels: Chromium and Figma approximate the gaussian differently, and these match the original to
 * within ~5/255 across the whole glow.
 */
export function CountdownBar() {
  return (
    <div
      className="relative h-12 w-full overflow-hidden bg-[#5E39FF]"
      style={{ boxShadow: BAR_SHADOW }}
    >
      <svg
        aria-hidden
        width="240"
        height="240"
        viewBox="-100 -100 240 240"
        fill="none"
        className="pointer-events-none absolute left-[-100px] top-[-100px] block"
      >
        <defs>
          <filter id="pw-bar-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="22.2" />
          </filter>
        </defs>
        <ellipse
          cx="7.9"
          cy="-7.42"
          rx="31.337"
          ry="22.869"
          transform="rotate(-26.41 7.9 -7.42)"
          fill="#FFFFFF"
          fillOpacity="0.85"
          filter="url(#pw-bar-glow)"
        />
      </svg>

      <div className="absolute inset-y-0 left-4 flex items-center">
        <span className="whitespace-nowrap font-ui text-[13px] font-semibold leading-[1.4] text-white">
          Your welcome offer ends in
        </span>
      </div>

      <div className="absolute right-4 top-[6px] flex items-center rounded-lg border border-white/[0.34] px-1 py-[2px]">
        <Unit value="14" unit="min" />
        <span className="mx-[6px] whitespace-nowrap font-ui text-[11px] font-semibold leading-[1.4] text-white">
          :
        </span>
        <Unit value="11" unit="sec" />
      </div>
    </div>
  );
}

/**
 * The green "Progress saved for <email>" chip. Appears twice on the paywall.
 * Carries its own 16px side inset. The 10px it sits below the countdown bar belongs to the chart
 * block that wraps it, so the second use of the chip does not inherit it.
 */
export function ProgressChip({ email }: { email: string }) {
  return (
    <div
      className="mx-4 flex items-center rounded-xl bg-white px-4 py-[10px]"
      style={{ boxShadow: "0px 5px 8.05px rgba(16,24,40,0.04)" }}
    >
      <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none" className="block shrink-0">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 12.8333C10.2217 12.8333 12.8333 10.2217 12.8333 7C12.8333 3.77834 10.2217 1.16667 7 1.16667C3.77834 1.16667 1.16667 3.77834 1.16667 7C1.16667 10.2217 3.77834 12.8333 7 12.8333ZM9.76197 5.64567C9.98049 5.40894 9.96573 5.03989 9.729 4.82137C9.49227 4.60285 9.12322 4.61761 8.9047 4.85434L6.10257 7.88999L5.0953 6.79878C4.87679 6.56206 4.50774 6.54729 4.27101 6.76581C4.03428 6.98433 4.01952 7.35338 4.23803 7.59011L5.67393 9.14567C5.78436 9.2653 5.93976 9.33334 6.10257 9.33334C6.26537 9.33334 6.42077 9.2653 6.5312 9.14567L9.76197 5.64567Z"
          fill="#00B67A"
        />
      </svg>
      <p className="ml-2 whitespace-nowrap font-ui text-[12px] leading-[1.4] text-[#02082d]">
        <span className="font-medium">{"Progress saved for "}</span>
        <span className="font-semibold">{email}</span>
      </p>
    </div>
  );
}

/** The navy full-width CTA. Appears four times on the paywall. */
export function StartButton({ label, onStart }: { label: string; onStart: () => void }) {
  return (
    <button
      type="button"
      onClick={onStart}
      className="flex h-[60px] w-full items-center justify-center rounded-xl bg-[#02082d] px-10 font-ui text-[16px] font-semibold leading-5 text-white"
    >
      {label}
    </button>
  );
}
