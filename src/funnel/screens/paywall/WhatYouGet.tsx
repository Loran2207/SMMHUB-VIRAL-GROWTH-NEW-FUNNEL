import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const ICON = "size-4 shrink-0 block";
const STROKE = "#02082D";

function CalendarLines() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={ICON} aria-hidden>
      <path
        d="M2 6H14M11.3333 8.66758L4.66667 8.66667M6.88889 11.3336L4.66667 11.3333M4.66667 2V3.33333M11.3333 2V3.33333M4.13333 14H11.8667C12.6134 14 12.9868 14 13.272 13.8547C13.5229 13.7268 13.7268 13.5229 13.8547 13.272C14 12.9868 14 12.6134 14 11.8667V5.46667C14 4.71993 14 4.34656 13.8547 4.06135C13.7268 3.81046 13.5229 3.60649 13.272 3.47866C12.9868 3.33333 12.6134 3.33333 11.8667 3.33333H4.13333C3.3866 3.33333 3.01323 3.33333 2.72801 3.47866C2.47713 3.60649 2.27316 3.81046 2.14532 4.06135C2 4.34656 2 4.71993 2 5.46667V11.8667C2 12.6134 2 12.9868 2.14532 13.272C2.27316 13.5229 2.47713 13.7268 2.72801 13.8547C3.01323 14 3.3866 14 4.13333 14Z"
        stroke={STROKE}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Users() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={ICON} aria-hidden>
      <path
        d="M8.66667 13.3333V12C8.66667 10.1591 7.17428 8.66667 5.33333 8.66667C3.49238 8.66667 2 10.1591 2 12V13.3333H8.66667ZM8.66667 13.3333H14V12.6667C14 10.703 12.5076 9.33333 10.6667 9.33333C9.72445 9.33333 8.87354 9.75033 8.26729 10.4207M7.33333 4.66667C7.33333 5.77124 6.4379 6.66667 5.33333 6.66667C4.22876 6.66667 3.33333 5.77124 3.33333 4.66667C3.33333 3.5621 4.22876 2.66667 5.33333 2.66667C6.4379 2.66667 7.33333 3.5621 7.33333 4.66667ZM12 6C12 6.73638 11.403 7.33333 10.6667 7.33333C9.93029 7.33333 9.33333 6.73638 9.33333 6C9.33333 5.26362 9.93029 4.66667 10.6667 4.66667C11.403 4.66667 12 5.26362 12 6Z"
        stroke={STROKE}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stars() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={ICON} aria-hidden>
      <path
        d="M3.33333 10.6667V13.3333M4 2.66667V5.33333M4.66667 12H2M5.33333 4H2.66667M8.66667 2.66667L9.83522 5.62958C9.9605 5.94722 10.0231 6.10604 10.119 6.23996C10.2041 6.35867 10.308 6.4626 10.4267 6.54762C10.5606 6.64353 10.7194 6.70617 11.0371 6.83144L14 8L11.0371 9.16856C10.7194 9.29383 10.5606 9.35647 10.4267 9.45238C10.308 9.5374 10.2041 9.64133 10.119 9.76004C10.0231 9.89396 9.9605 10.0528 9.83522 10.3704L8.66667 13.3333L7.49811 10.3704C7.37284 10.0528 7.3102 9.89396 7.21429 9.76004C7.12927 9.64133 7.02533 9.5374 6.90663 9.45238C6.77271 9.35647 6.61389 9.29383 6.29625 9.16856L3.33333 8L6.29625 6.83144C6.61389 6.70617 6.77271 6.64353 6.90663 6.54762C7.02533 6.4626 7.12927 6.35867 7.21429 6.23996C7.3102 6.10604 7.37284 5.94722 7.49811 5.62958L8.66667 2.66667Z"
        stroke={STROKE}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GridPlus() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={ICON} aria-hidden>
      <path
        d="M11.3333 9.33333V13.3333M9.33333 11.3333H13.3333M10.4 6.66667H12.2667C12.64 6.66667 12.8267 6.66667 12.9693 6.594C13.0948 6.53009 13.1968 6.4281 13.2607 6.30266C13.3333 6.16005 13.3333 5.97337 13.3333 5.6V3.73333C13.3333 3.35997 13.3333 3.17328 13.2607 3.03067C13.1968 2.90523 13.0948 2.80324 12.9693 2.73933C12.8267 2.66667 12.64 2.66667 12.2667 2.66667H10.4C10.0266 2.66667 9.83995 2.66667 9.69734 2.73933C9.5719 2.80324 9.46991 2.90523 9.406 3.03067C9.33333 3.17328 9.33333 3.35997 9.33333 3.73333V5.6C9.33333 5.97337 9.33333 6.16005 9.406 6.30266C9.46991 6.4281 9.5719 6.53009 9.69734 6.594C9.83995 6.66667 10.0266 6.66667 10.4 6.66667ZM3.73333 6.66667H5.6C5.97337 6.66667 6.16005 6.66667 6.30266 6.594C6.4281 6.53009 6.53009 6.4281 6.594 6.30266C6.66667 6.16005 6.66667 5.97337 6.66667 5.6V3.73333C6.66667 3.35997 6.66667 3.17328 6.594 3.03067C6.53009 2.90523 6.4281 2.80324 6.30266 2.73933C6.16005 2.66667 5.97337 2.66667 5.6 2.66667H3.73333C3.35997 2.66667 3.17328 2.66667 3.03067 2.73933C2.90523 2.80324 2.80324 2.90523 2.73933 3.03067C2.66667 3.17328 2.66667 3.35997 2.66667 3.73333V5.6C2.66667 5.97337 2.66667 6.16005 2.73933 6.30266C2.80324 6.4281 2.90523 6.53009 3.03067 6.594C3.17328 6.66667 3.35997 6.66667 3.73333 6.66667ZM3.73333 13.3333H5.6C5.97337 13.3333 6.16005 13.3333 6.30266 13.2607C6.4281 13.1968 6.53009 13.0948 6.594 12.9693C6.66667 12.8267 6.66667 12.64 6.66667 12.2667V10.4C6.66667 10.0266 6.66667 9.83995 6.594 9.69734C6.53009 9.5719 6.4281 9.46991 6.30266 9.406C6.16005 9.33333 5.97337 9.33333 5.6 9.33333H3.73333C3.35997 9.33333 3.17328 9.33333 3.03067 9.406C2.90523 9.46991 2.80324 9.5719 2.73933 9.69734C2.66667 9.83995 2.66667 10.0266 2.66667 10.4V12.2667C2.66667 12.64 2.66667 12.8267 2.73933 12.9693C2.80324 13.0948 2.90523 13.1968 3.03067 13.2607C3.17328 13.3333 3.35997 13.3333 3.73333 13.3333Z"
        stroke={STROKE}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * One bullet line. Figma draws the marker with list-disc, i.e. a ::marker pseudo-element the Figma
 * capture engine cannot see, so the dot is a real element inside an 18px lane (the Figma list indent)
 * and the text hangs under itself when it wraps.
 */
function Bullet({ children }: { children: string }) {
  return (
    <div className="mt-2 flex">
      <span aria-hidden className="flex h-[18px] w-[18px] shrink-0 items-start">
        <span className="ml-[7.85px] mt-[8.54px] block size-[2.31px] rounded-full bg-[#585c74]" />
      </span>
      <span className="flex-1 text-[12px] font-medium leading-[1.5] text-[#585c74]">{children}</span>
    </div>
  );
}

/** Icon chip + title + bullets. The 16px lane between chip and text is a margin, not a flex gap. */
function Feature({
  icon,
  title,
  bullets,
  columnClass,
}: {
  icon: ReactNode;
  title: string;
  bullets: string[];
  columnClass?: string;
}) {
  return (
    <div className="mt-5 flex items-start">
      <div className="mr-4 flex size-7 shrink-0 items-center justify-center rounded-lg border border-[#EBEBEE] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
        {icon}
      </div>
      <div className={cn("flex-1", columnClass)}>
        <p className="text-[14px] font-semibold leading-[20px] text-[#02082d]">{title}</p>
        {bullets.map((line) => (
          <Bullet key={line}>{line}</Bullet>
        ))}
      </div>
    </div>
  );
}

/** "What You Get Inside SMMHUB": the week calendar and the four feature blocks. Figma 45573:2284. */
export function WhatYouGet() {
  return (
    <section className="bg-white px-4 font-ui">
      <p className="text-center text-[18px] font-bold leading-[25px]">
        <span className="text-[#584AE5]">What You Get</span>
        <span className="text-[#02082d]">{" Inside SMMHUB"}</span>
      </p>

      <p className="mt-3 text-center text-[12px] font-medium leading-[1.5] text-[#585c74]">
        {"SMMHUB creates a Content Plan based on your niche, audience and goals and gives you daily ideas, hooks and scripts "}
        <span className="font-bold">engineered for viral growth.</span>
      </p>

      {/* One baked PNG: the day cards, the man, the two 99k badges and the white fade over week 3.
          The art keeps its Figma size (328 x 182.33) and centres in the wider column; its bottom
          edge is the bottom of the 186px box. */}
      <div className="mt-3 flex h-[186px] w-full items-end justify-center overflow-hidden">
        <img
          src="/img/pw-weeks.png"
          alt=""
          draggable={false}
          className="block h-[182.33px] w-[328px] max-w-none shrink-0 select-none"
        />
      </div>

      <Feature
        icon={<CalendarLines />}
        title="Personalized Content Plan"
        columnClass="pr-[44px]"
        bullets={[
          "Daily content system built for your niche, goals, and style.",
          "You get hyper-personalized ideas, scripts, and hooks ",
        ]}
      />

      <Feature
        icon={<Users />}
        title="Audience Research Engine"
        bullets={["Niche Explorer", "Target Audience Analyzer", "Pain Points Scanner"]}
      />

      <Feature
        icon={<Stars />}
        title="Your 24/7 AI Creation Assistant"
        columnClass="pr-[41px]"
        bullets={[
          "Creative co-pilot trained on your tone, niche, and goals",
          "Ask anything. Brainstorm anything. Rewrite anything. ",
          "It thinks with you, not for you.",
        ]}
      />

      <Feature
        icon={<GridPlus />}
        title="Creator Tools & Learning Library"
        bullets={[
          "20+ AI Mini Apps for ideas, hooks, carousels",
          "Mini PDF Guides that teach growth fundamentals",
          "and more",
        ]}
      />
    </section>
  );
}
