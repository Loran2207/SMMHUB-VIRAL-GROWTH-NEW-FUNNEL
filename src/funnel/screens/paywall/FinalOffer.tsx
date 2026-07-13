import type { ReactNode } from "react";
import { Plans } from "@/funnel/screens/paywall/Plans";
import { StartButton } from "@/funnel/screens/paywall/bits";

/** The closing offer - Figma 45573:2566. Goal pills, the plans again at their per-day price,
 *  the CTA, the legal copy, the bonus banner and the secure badge. */

function UsersIcon() {
  return (
    <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9.75 15V13.5C9.75 11.4289 8.07107 9.75 6 9.75C3.92893 9.75 2.25 11.4289 2.25 13.5V15H9.75ZM9.75 15H15.75V14.25C15.75 12.0409 14.0711 10.5 12 10.5C10.94 10.5 9.98273 10.9691 9.3007 11.7233M8.25 5.25C8.25 6.49264 7.24264 7.5 6 7.5C4.75736 7.5 3.75 6.49264 3.75 5.25C3.75 4.00736 4.75736 3 6 3C7.24264 3 8.25 4.00736 8.25 5.25ZM13.5 6.75C13.5 7.57843 12.8284 8.25 12 8.25C11.1716 8.25 10.5 7.57843 10.5 6.75C10.5 5.92157 11.1716 5.25 12 5.25C12.8284 5.25 13.5 5.92157 13.5 6.75Z"
        stroke="#585C74"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4.5 6H3M4.5 12H3M4.5 9H2.25M5.25 3.38666C6.32257 2.6687 7.61239 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C7.61239 15.75 6.32257 15.3313 5.25 14.6133M9 10.9495C9.04477 10.9493 9.09116 10.9492 9.13957 10.9492C9.89438 10.8608 10.5 10.5938 10.5 9.9843C10.5 9.17333 9.75 8.99993 9 8.99993C8.25 8.99993 7.49869 8.77518 7.5 8.01556C7.50124 7.30249 8.09443 7.05081 8.7 7.03192C8.93206 7.02576 8.82818 7.03306 9 7.03192C9.51381 7.02849 10.125 7.03192 10.5 7.12493M9 7.03192L9 6M9 10.9495C8.48985 10.9516 8.18949 10.9611 7.5 10.8749M9 10.9495L9 12"
        stroke="#585C74"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* The 16px icon offset and the 10px between the pills are margins, not flex gaps - the capture
   engine can collapse a gap and these must not touch. */
function GoalPill({ icon, label, value, first }: { icon: ReactNode; label: string; value: string; first?: boolean }) {
  return (
    <div
      className={`flex min-w-0 flex-1 items-center rounded-[12px] bg-[#FAFAFB] px-[16px] py-[8px] ${first ? "mr-[10px]" : ""}`}
    >
      <span className="mr-[16px] flex shrink-0">{icon}</span>
      <div className="flex min-w-0 flex-1 flex-col items-start gap-[2px] [word-break:break-word]">
        <p className="w-full text-[12px] font-medium leading-[1.4] text-[#585c74]">{label}</p>
        <p className="w-full text-[14px] font-semibold leading-[1.4] text-[#02082d]">{value}</p>
      </div>
    </div>
  );
}

const LEGAL =
  "By clicking Start My Plan, I agree to pay $6.99 for the 7-day introductory plan. If I do not cancel " +
  "before the end of this introductory period, my plan will convert to a monthly subscription, and " +
  "SMMHUB will automatically charge my payment method the regular price of $29.99 every month until I " +
  "cancel. I can cancel anytime in the app to avoid being charged for the next billing cycle.";

export function FinalOffer({ onStart }: { onStart: () => void }) {
  return (
    <section className="flex flex-col items-center gap-[16px] font-ui">
      <div className="flex w-full flex-col items-start gap-[20px] px-4">
        <div className="flex w-full items-start">
          <GoalPill first icon={<UsersIcon />} label="Follower goal" value="1,000-5,000" />
          <GoalPill icon={<DollarIcon />} label="Income goal" value={"$5,000–10,000"} />
        </div>
        <div className="flex w-full flex-col items-center">
          <Plans variant="daily" />
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-[16px] px-4">
        <div className="flex w-full items-center justify-center rounded-[12px] bg-white py-[8px]">
          <span className="whitespace-nowrap text-center text-[14px] font-semibold leading-[normal] text-[#02082d] underline">
            MONEY-BACK GUARANTEE
          </span>
        </div>

        <div className="w-full">
          <StartButton label="Start My Plan" onStart={onStart} />
        </div>

        <div className="w-full whitespace-pre-wrap text-center text-[11px] font-medium leading-[1.5] text-black [word-break:break-word]">
          <p>{LEGAL}</p>
          {/* The design draws a blank line here - a real 16.5px text row, not a flex gap. */}
          <p className="h-[16.5px]">{"​"}</p>
          <p>
            Learn more about cancellation and refund terms in our{" "}
            <span className="underline">Subscription Policy</span>. For help, contact{" "}
            <a className="text-black underline" href="mailto:support@smmhub.app">
              support@smmhub.app
            </a>
            .
          </p>
        </div>

        <div className="relative h-[74px] w-full overflow-hidden rounded-[12px] bg-[#F2F0FF]">
          <p className="absolute left-[16px] top-[16px] w-[265px] text-[14px] font-semibold leading-[1.5] text-[#02082d] [word-break:break-word]">
            Choose your Plan and get your bonus{" "}
            <span className="text-[#5E39FF]">Ultimate Instagram Guide</span>
          </p>
          {/* The 74px banner clips the bottom 10px of the 68px-tall artwork. */}
          <div className="absolute right-[20px] top-[16px] h-[68px] w-[65px] overflow-hidden">
            <img src="/img/pw-bonus.png" alt="" className="block h-[68px] w-[64px]" />
          </div>
        </div>
      </div>

      <div className="flex h-[36px] w-full items-center justify-center">
        <img src="/img/pw-secure-lg.png" alt="SECURE - SSL encryption" className="h-[29.5px] w-[90px]" />
      </div>
    </section>
  );
}
