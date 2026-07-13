import { Plans } from "@/funnel/screens/paywall/Plans";
import { StartButton } from "@/funnel/screens/paywall/bits";

/** "Choose your Plan" - Figma 45573:2228: the heading, the phones artwork, the plan cards, the
 *  guarantee link, the CTA and the legal copy. */
export function ChoosePlan({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex w-full flex-col items-center gap-[16px] font-ui">
      <div className="flex h-[53px] w-full items-center justify-center pb-[28px]">
        <p className="w-full text-center text-[18px] font-bold leading-[1.4]">
          <span className="text-[#02082d]">Choose your</span>
          <span> </span>
          <span className="text-[#5E39FF]">Plan</span>
        </p>
      </div>

      {/* The illustration card and the plans overlap by 73px: the purple card sits on the artwork. */}
      <div className="relative h-[430px] w-full">
        <div className="absolute inset-x-[16px] top-0 h-[234px] overflow-hidden rounded-[12px] border border-solid border-[#EAECF0]">
          <svg viewBox="0 0 358 234" preserveAspectRatio="none" aria-hidden className="block h-full w-full">
            <defs>
              <linearGradient id="cpCardFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#F0ECFF" />
              </linearGradient>
            </defs>
            <rect width="358" height="234" fill="url(#cpCardFill)" />
          </svg>
        </div>

        {/* Baked artwork: it rides 49px up over the heading and bleeds ~19px past the right of the
            358px column, so it is placed absolutely and left to overflow rather than fitted. */}
        <img
          src="/img/pw-phones.png"
          alt=""
          aria-hidden
          draggable={false}
          className="pointer-events-none absolute block max-w-none select-none"
          style={{ left: 28.67, top: -49.33, width: 364.67, height: 259.33 }}
        />

        <div className="absolute inset-x-[16px] top-[161px]">
          <Plans variant="monthly" />
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-[16px] px-4">
        <button
          type="button"
          className="flex w-full items-center justify-center rounded-[12px] bg-white py-[8px] text-[14px] font-semibold leading-[17px] text-[#02082d]"
        >
          {/* The underline sits on the text node itself: the capture engine reads a text run own
              style, so an underline inherited from the button is lost on the way into Figma. */}
          <span className="whitespace-nowrap text-center underline [text-decoration-skip-ink:none] [text-underline-position:from-font]">
            MONEY-BACK GUARANTEE
          </span>
        </button>

        <StartButton label="Start My Plan" onStart={onStart} />

        <div className="w-full text-center text-[11px] font-medium leading-[1.5] text-black">
          <p>
            By clicking Start My Plan, I agree to pay $6.99 for the 7-day introductory plan. If I do not cancel before the end
            of this introductory period, my plan will convert to a monthly subscription, and SMMHUB will automatically charge
            my payment method the regular price of $29.99 every month until I cancel. I can cancel anytime in the app to avoid
            being charged for the next billing cycle.
          </p>
          <div aria-hidden className="h-[16.5px]" />
          <p>
            Learn more about cancellation and refund terms in our{" "}
            <span className="underline [text-decoration-skip-ink:none] [text-underline-position:from-font]">
              Subscription Policy
            </span>
            . For help, contact{" "}
            <a
              href="mailto:support@smmhub.app"
              className="underline [text-decoration-skip-ink:none] [text-underline-position:from-font]"
            >
              support@smmhub.app
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
