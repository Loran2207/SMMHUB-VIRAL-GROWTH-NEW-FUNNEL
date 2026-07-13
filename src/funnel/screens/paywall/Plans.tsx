import type { CSSProperties } from "react";

/**
 * The three plan cards. Figma 45573:2239 ("monthly", inside Choose your Plan) and 45573:2580
 * ("daily", inside the closing offer). Same three cards, different price panel and body copy.
 *
 * Figma draws them on a 358px column; our column stretches past that, so every element that hangs
 * off the right edge (price panel, price, chips) is anchored from the right, not the left.
 *
 * Static by design: this is a recreation of the screen, not a working plan picker.
 */

type Variant = "monthly" | "daily";

/** Card 1 panel, monthly: 106 x 89, notch apex hard against the card's left. */
function WingTrialMonthly() {
  return (
    <div className="absolute right-0 top-0 h-[89px] w-[106px]">
      <svg
        viewBox="0 0 104.239 89"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
        className="absolute bottom-0 right-0 top-0 block h-full"
        style={{ left: "1.66%" }}
      >
        <path
          d="M1.44298 39.9168L29.1944 0.213552C29.288 0.0797238 29.441 0 29.6043 0H103.739C104.016 0 104.239 0.223858 104.239 0.5V88.5C104.239 88.7761 104.016 89 103.739 89H29.6043C29.441 89 29.288 88.9203 29.1944 88.7864L1.44298 49.0832C-0.480992 46.3306 -0.480994 42.6694 1.44298 39.9168Z"
          fill="#FFFFFF"
          fillOpacity="0.1"
        />
      </svg>
    </div>
  );
}

/** Card 1 panel, daily: 106 x 78. */
function WingTrialDaily() {
  return (
    <div className="absolute right-0 top-0 h-[78px] w-[106px]">
      <svg
        viewBox="0 0 103.767 78"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
        className="absolute bottom-0 right-0 top-0 block h-full"
        style={{ left: "2.11%" }}
      >
        <path
          d="M1.74556 34.0118L28.7214 0.188238C28.8163 0.0692829 28.9601 0 29.1123 0H103.267C103.543 0 103.767 0.223856 103.767 0.499999V77.5C103.767 77.7761 103.543 78 103.267 78H29.1123C28.9601 78 28.8163 77.9307 28.7214 77.8118L1.74557 43.9882C-0.581853 41.07 -0.581857 36.93 1.74556 34.0118Z"
          fill="#FFFFFF"
          fillOpacity="0.1"
        />
      </svg>
    </div>
  );
}

/** Card 2 panel: 98 x 60. Two pixels shorter than card 3's - they are not the same asset. */
function WingMonth() {
  return (
    <div className="absolute right-[8px] top-[8px] h-[60px] w-[98px]">
      <svg
        viewBox="0 0 96.971 60"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
        className="absolute bottom-0 right-0 top-0 block h-full"
        style={{ left: "1.05%" }}
      >
        <path
          d="M0.853385 27.2062L14.4274 7.05969C17.4011 2.64612 22.3746 0 27.6965 0H88.971C93.3893 0 96.971 3.58172 96.971 8V52C96.971 56.4183 93.3893 60 88.971 60H27.6965C22.3747 60 17.4011 57.3539 14.4274 52.9403L0.853384 32.7938C-0.284462 31.1051 -0.284461 28.8949 0.853385 27.2062Z"
          fill="#F5F5F7"
        />
      </svg>
    </div>
  );
}

/** Card 3 panel: 98 x 62. */
function WingQuarter() {
  return (
    <div className="absolute right-[8px] top-[8px] h-[62px] w-[98px]">
      <svg
        viewBox="0 0 97.031 62"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
        className="absolute bottom-0 right-0 top-0 block h-full"
        style={{ left: "0.99%" }}
      >
        <path
          d="M0.811675 28.2691L14.5096 7.26106C17.4631 2.73137 22.5047 0 27.9122 0H89.031C93.4493 0 97.031 3.58172 97.031 8V54C97.031 58.4183 93.4493 62 89.031 62H27.9122C22.5047 62 17.4631 59.2686 14.5096 54.7389L0.811672 33.7309C-0.270559 32.0711 -0.270556 29.9289 0.811675 28.2691Z"
          fill="#F5F5F7"
        />
      </svg>
    </div>
  );
}

/** Unchecked ring, white at 50%. Cards 1 use it in both variants - even the purple "most popular" one. */
function RingWhite({ top }: { top: number }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="absolute left-[14px] block size-[20px]" style={{ top }}>
      <path
        d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
        stroke="#FFFFFF"
        strokeOpacity="0.5"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Checked disc. Figma knocks the tick out of the disc; a white tick on a solid disc reads the same
 *  and does not depend on what is stacked behind it. */
function CircleCheck() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="absolute left-[14px] top-[29px] block size-[20px]">
      <circle cx="10" cy="10" r="8.3333" fill="#584AE5" />
      <path
        d="M13.9457 8.06524C14.2578 7.72705 14.2368 7.19984 13.8986 6.88767C13.5604 6.5755 13.0332 6.59659 12.721 6.93477L8.71795 11.2714L7.27901 9.71255C6.96684 9.37436 6.43962 9.35328 6.10144 9.66545C5.76325 9.97762 5.74216 10.5048 6.05433 10.843L8.10562 13.0652C8.26337 13.2361 8.48537 13.3333 8.71795 13.3333C8.95053 13.3333 9.17253 13.2361 9.33029 13.0652L13.9457 8.06524Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/** Card 3's control is a plain 16px ring - a different size and offset from the 20px icons above it. */
function CheckboxBase() {
  return <div className="absolute left-[16px] top-[31.5px] size-[16px] rounded-full border border-solid border-[#C0C1CB]" />;
}

/** Figma strokes these cards on the OUTSIDE of the 358x78 frame (its export is 362 wide), so the ring
 *  is its own element at inset -w and the frame keeps its 78px box - that keeps every child on Figma's
 *  own coordinates. */
function Ring({ w, color }: { w: number; color: string }) {
  return (
    <div
      className="pointer-events-none absolute"
      style={{ inset: -w, borderRadius: 12 + w, border: w + "px solid " + color }}
    />
  );
}

function MostPopular() {
  return (
    <div className="absolute left-[37px] top-[-10px] flex items-center justify-center rounded-[8px] bg-[#EB2F53] px-[8px] py-[4px]">
      <p className="whitespace-nowrap text-[11px] font-bold leading-[13px] text-white">MOST POPULAR</p>
    </div>
  );
}

/** A struck price. The red rule is a real 1px element, so it survives the Figma capture and always
 *  spans the glyphs exactly. Figma also puts a same-colour text line-through underneath it; only the
 *  red one reads in the render, so it is the only one drawn here. */
function Struck({ text, className, style }: { text: string; className?: string; style?: CSSProperties }) {
  return (
    <div className={`whitespace-nowrap ${className ?? ""}`} style={{ position: "relative", ...style }}>
      {text}
      <span aria-hidden className="absolute inset-x-0 top-[10px] block h-px bg-[#EB2F53]" />
    </div>
  );
}

function PlansMonthly() {
  return (
    <div className="relative h-[269px] w-full">
      <div className="absolute inset-x-0 top-0 h-[78px] rounded-[12px]">
        {/* The filled body is 89 tall - 11px taller than its wrapper - and overflows downward. */}
        <div className="absolute inset-x-0 top-0 h-[89px] overflow-hidden rounded-[12px] bg-[#5E39FF]">
          <WingTrialMonthly />
          <div className="absolute right-[14px] top-[47px] flex items-center justify-center rounded-[4px] bg-[#E6E1FE] px-[4px] py-[2px]">
            <p className="whitespace-nowrap text-center text-[10px] font-semibold leading-[1.3] text-[#5E39FF]">{"Save 50% "}</p>
          </div>
          <p className="absolute left-[91px] top-[34px] -translate-x-1/2 -translate-y-full whitespace-nowrap text-center text-[15px] font-semibold leading-[1.3] text-white">
            7-DAY TRIAL
          </p>
          <RingWhite top={35} />
          <div className="absolute left-[42px] top-[34px] h-[16px] w-[82px] rounded-[12px] bg-[#E6E1FE]" />
          <p className="absolute left-[49px] top-[47px] -translate-y-full whitespace-nowrap text-[10px] font-normal leading-[12px] text-[#5E39FF]">
            Monthly plan
          </p>
          <p className="absolute left-[43px] top-[77px] w-[194px] -translate-y-full text-[10px] font-normal leading-[12px] text-white">
            <span className="font-semibold">$6.99</span>
            <span>{" for the first week, "}</span>
            <span className="font-semibold">then $29,99 every month</span>
          </p>
        </div>
        <p className="absolute right-[18px] top-[23px] whitespace-nowrap text-right text-[18px] font-semibold leading-[22px] text-white">$6.99</p>
        <MostPopular />
      </div>

      <div className="absolute inset-x-0 top-[102px] h-[78px] rounded-[12px] bg-white">
        <div className="absolute inset-0 text-[#02082d]">
          <Ring w={2} color="#584AE5" />
          <WingMonth />
          <CircleCheck />
          <div className="absolute left-[44px] top-[18px] h-[42px] w-[201px]">
            <p className="absolute left-[60px] top-[24px] -translate-x-1/2 -translate-y-full whitespace-nowrap text-center text-[15px] font-semibold leading-[1.3]">
              1-MONTH PLAN
            </p>
            {/* Figma's row is 17px tall because of a zero-width 14px sibling; it centres this line 2.5px down. */}
            <div className="absolute left-0 top-[21px] flex h-[17px] items-center">
              <p className="w-[193px] text-[10px] font-normal leading-[12px]">
                <span className="font-semibold">$19.99</span>
                <span>{" now, then "}</span>
                <span className="font-semibold">$29,99 every month</span>
              </p>
            </div>
          </div>
          <p className="absolute right-[19px] top-[27px] whitespace-nowrap text-right text-[18px] font-semibold leading-[22px]">$19.99</p>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[191px] h-[78px] rounded-[12px] bg-white">
        <div className="absolute inset-0">
          <Ring w={1} color="#EBEBEE" />
          <WingQuarter />
          <p className="absolute right-[20px] top-[29px] whitespace-nowrap text-right text-[18px] font-semibold leading-[22px] text-[#585C74]">
            $29.99
          </p>
          <CheckboxBase />
          <div className="absolute left-[44px] top-[18px] h-[34px] w-[187px]">
            <p className="absolute left-[61.5px] top-[22px] -translate-x-1/2 -translate-y-full whitespace-nowrap text-center text-[15px] font-semibold leading-[1.3] text-[#585C74]">
              {"3-MONTH PLAN "}
            </p>
            <p className="absolute left-0 top-[22px] whitespace-nowrap text-[10px] font-normal leading-[12px] text-[#02082d]">
              <span className="font-semibold text-[#585C74]">$29.99</span>
              <span>{" now, then "}</span>
              <span className="font-semibold text-[#585C74]">$54,99 every month</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlansDaily() {
  return (
    <div className="flex w-full flex-col gap-[10px]">
      <div className="relative h-[78px] w-full shrink-0 rounded-[12px]">
        <div className="absolute inset-0 overflow-hidden rounded-[12px] bg-[#5E39FF] text-white">
          <WingTrialDaily />
          <p className="absolute right-[20px] top-[44px] whitespace-nowrap text-right text-[10px] font-medium leading-[12px]">per day</p>
          <p className="absolute right-[20px] top-[20px] whitespace-nowrap text-right text-[20px] font-bold leading-[24px]">$0.99</p>
          <RingWhite top={29} />
          <div className="absolute left-[44px] top-[18px] flex flex-col items-start justify-center gap-[4px]">
            <p className="whitespace-nowrap text-center text-[16px] font-semibold leading-[1.3]">7-DAY</p>
            <div className="flex items-center gap-[8px] text-[14px] font-medium leading-[17px]">
              <Struck text="$13.98" />
              <div className="whitespace-nowrap">$6.99</div>
            </div>
          </div>
          <Struck
            text="$1.99"
            className="-translate-y-full text-right text-[14px] font-medium leading-[17px]"
            style={{ position: "absolute", right: 114, top: 61 }}
          />
        </div>
        <MostPopular />
      </div>

      <div className="relative h-[78px] w-full shrink-0 rounded-[12px] bg-white">
        <div className="absolute inset-0 text-[#02082d]">
          <Ring w={2} color="#584AE5" />
          <WingMonth />
          <p className="absolute right-[20px] top-[44px] whitespace-nowrap text-right text-[10px] font-medium leading-[12px]">per day</p>
          <p className="absolute right-[20px] top-[20px] whitespace-nowrap text-right text-[20px] font-bold leading-[24px]">$0.66</p>
          <CircleCheck />
          <div className="absolute left-[44px] top-[18px] flex flex-col items-start justify-center gap-[4px]">
            <p className="whitespace-nowrap text-center text-[16px] font-semibold leading-[1.3]">1-MONTH</p>
            <div className="flex items-center gap-[8px] text-[14px] font-medium leading-[17px]">
              <Struck text="$39.99" />
              <div className="whitespace-nowrap">$19.99</div>
            </div>
          </div>
          <Struck
            text="$1.30"
            className="-translate-y-full text-right text-[14px] font-medium leading-[17px]"
            style={{ position: "absolute", right: 114, top: 61 }}
          />
        </div>
      </div>

      <div className="relative h-[78px] w-full shrink-0 rounded-[12px] bg-white">
        <div className="absolute inset-0 text-[#585C74]">
          <Ring w={1} color="#EBEBEE" />
          <WingQuarter />
          <p className="absolute right-[20px] top-[44px] whitespace-nowrap text-right text-[10px] font-medium leading-[12px]">per day</p>
          <p className="absolute right-[20px] top-[20px] whitespace-nowrap text-right text-[20px] font-bold leading-[24px]">$0.33</p>
          <CheckboxBase />
          <div className="absolute left-[44px] top-[18px] flex flex-col items-start justify-center gap-[4px]">
            <p className="whitespace-nowrap text-center text-[16px] font-semibold leading-[1.3]">{"3-MONTH "}</p>
            <div className="flex items-center gap-[8px] text-[14px] font-medium leading-[17px]">
              <Struck text="$54.99" />
              <div className="whitespace-nowrap">$29.99</div>
            </div>
          </div>
          <Struck
            text="$0.61"
            className="-translate-y-full text-right text-[14px] font-medium leading-[17px]"
            style={{ position: "absolute", right: 114, top: 61 }}
          />
        </div>
      </div>
    </div>
  );
}

export function Plans({ variant }: { variant: Variant }) {
  return <div className="w-full font-ui">{variant === "monthly" ? <PlansMonthly /> : <PlansDaily />}</div>;
}
