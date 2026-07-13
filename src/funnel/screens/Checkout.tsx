import type { ReactNode } from "react";
import { PhoneFrame } from "@/funnel/components/PhoneFrame";
import { BrowserChrome } from "@/funnel/components/BrowserChrome";
import { CountdownBar } from "@/funnel/screens/paywall/bits";
import { cn } from "@/lib/cn";

/* Every glyph on this screen is inline SVG or a real element: the Figma capture engine drops CSS
   pseudo-elements, so the dot inside the selected radio is a child <span>, not ::after. */

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="block shrink-0">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3976 4.92669L6.62427 9.53336L5.3576 8.18003C5.12427 7.96003 4.7576 7.94669 4.49094 8.13336C4.23094 8.32669 4.1576 8.66669 4.3176 8.94002L5.8176 11.38C5.96427 11.6067 6.2176 11.7467 6.50427 11.7467C6.7776 11.7467 7.0376 11.6067 7.18427 11.38C7.42427 11.0667 12.0043 5.60669 12.0043 5.60669C12.6043 4.99336 11.8776 4.45336 11.3976 4.92003V4.92669Z"
        fill="#02082D"
      />
    </svg>
  );
}

function XMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden className="block">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.41074 4.41074C4.73618 4.08531 5.26382 4.08531 5.58926 4.41074L10 8.82149L14.4107 4.41074C14.7362 4.08531 15.2638 4.08531 15.5893 4.41074C15.9147 4.73618 15.9147 5.26382 15.5893 5.58926L11.1785 10L15.5893 14.4107C15.9147 14.7362 15.9147 15.2638 15.5893 15.5893C15.2638 15.9147 14.7362 15.9147 14.4107 15.5893L10 11.1785L5.58926 15.5893C5.26382 15.9147 4.73618 15.9147 4.41074 15.5893C4.08531 15.2638 4.08531 14.7362 4.41074 14.4107L8.82149 10L4.41074 5.58926C4.08531 5.26382 4.08531 4.73618 4.41074 4.41074Z"
        fill="#9096A1"
      />
    </svg>
  );
}

function RadioOn() {
  return (
    <span className="relative block size-4 shrink-0 overflow-hidden rounded-full bg-[#5E39FF]">
      <span className="absolute inset-[31.25%] rounded-full bg-white" />
    </span>
  );
}

function RadioOff() {
  return <span className="block size-4 shrink-0 rounded-full border border-[#D0D5DD]" />;
}

function MethodLabel({ children }: { children: ReactNode }) {
  return (
    <span className="whitespace-nowrap font-ui text-[14px] font-bold leading-[1.4] text-[#02082d]">{children}</span>
  );
}

function Bullet({ align = "center", children }: { align?: "start" | "center"; children: ReactNode }) {
  return (
    <div className={cn("flex w-full gap-2", align === "start" ? "items-start" : "items-center")}>
      <CheckIcon />
      <p className="min-w-0 flex-1 font-ui text-[12px] font-medium leading-[1.4] text-[#02082d]">{children}</p>
    </div>
  );
}

function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    /* max-w 358 = the Figma text width: it keeps every line break identical in our wider column. */
    <section className="flex w-full max-w-[358px] flex-col gap-1">
      <h2 className="font-ui text-[18px] font-bold leading-[1.6] tracking-[-0.36px] text-[#02082d]">{title}</h2>
      <p className="font-ui text-[12px] font-medium leading-[1.4] text-[#465063]">{children}</p>
    </section>
  );
}

export function Checkout({ onNext }: { onNext: () => void }) {
  return (
    <PhoneFrame>
      <BrowserChrome>
        <div className="min-h-0 flex-1 overflow-y-auto bg-white">
          <div className="flex w-full flex-col items-center gap-[28px] pb-[20px]">
            <div className="flex w-full flex-col items-start gap-[12px]">
              <div className="w-full">
                <CountdownBar />
              </div>

              <div className="flex h-5 w-full items-center justify-end px-4 opacity-50">
                <button type="button" onClick={onNext} aria-label="Close" className="block size-5 cursor-pointer">
                  <XMark />
                </button>
              </div>

              <div className="flex w-full flex-col items-center gap-[12px] px-4 text-center text-[#02082d]">
                {/* 358px is the Figma text node width; capping it keeps the design line break ("…stay with us / after…") in our 402px column. */}
                <h1 className="w-full max-w-[358px] font-ui text-[24px] font-bold leading-[1.3]">
                  <span className="text-[#00b67a]">Most users</span>
                  <span> stay with us after the initial trial</span>
                </h1>
                <p className="w-[316px] font-ui text-[14px] font-medium leading-[1.3]">
                  Total today: $6.99 for the 7-day introductory plan, then $29.99/month
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-[12px]">
              <div className="w-full px-4">
                <p className="whitespace-pre-wrap font-ui text-[14px] font-bold leading-[1.4] text-black">
                  {"Select  your payment method"}
                </p>
              </div>

              <div className="w-full px-4">
                <div className="w-full overflow-hidden rounded-[12px] border border-[#EAECF0] bg-white">
                  <div className="relative h-[311px] w-full border-b border-[#EAECF0]">
                    <div className="absolute inset-x-4 top-4 flex h-4 items-center justify-between">
                      <div className="flex items-center gap-2">
                        <RadioOn />
                        <MethodLabel>Apple Pay</MethodLabel>
                      </div>
                      <img
                        src="/img/pw-applepay.png"
                        alt="Apple Pay"
                        draggable={false}
                        className="block h-[14.976px] w-[35px] shrink-0 select-none"
                      />
                    </div>

                    <div className="absolute inset-x-4 top-[48px] flex flex-col gap-1">
                      <Bullet align="start">Easy and private payments with Face/Touch ID</Bullet>
                      <Bullet>Keeps your financial info safe with end-to-end encryption</Bullet>
                      <Bullet>Protected by Apple Pay's unique Device Account Number</Bullet>
                    </div>

                    <button
                      type="button"
                      onClick={onNext}
                      className="absolute inset-x-4 top-[159px] flex h-[48px] cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-[12px] bg-[#010101] px-4"
                    >
                      <span className="whitespace-nowrap font-ui text-[16px] font-semibold leading-[1.4] text-white">
                        Continue with
                      </span>
                      <img
                        src="/img/pw-applepay-white.png"
                        alt="Apple Pay"
                        draggable={false}
                        className="block h-[22px] w-[45px] shrink-0 select-none"
                      />
                    </button>

                    <p className="absolute left-1/2 top-[219px] w-[305px] -translate-x-1/2 text-center font-ui text-[12px] font-semibold leading-[1.4] text-[#02082d]">
                      Your payment information is secure with SSL/TLS encryption
                    </p>

                    <img
                      src="/img/pw-secure.png"
                      alt="SSL encryption secure"
                      draggable={false}
                      className="absolute left-1/2 top-[265px] block h-[30px] w-[81px] -translate-x-1/2 select-none object-cover"
                    />
                  </div>

                  <div className="flex h-[48px] w-full items-center justify-between border-b border-[#EAECF0] px-4">
                    <div className="flex items-center gap-2">
                      <RadioOff />
                      <MethodLabel>Credit Card</MethodLabel>
                    </div>
                    <div className="relative h-[31px] w-[147px] shrink-0">
                      <img
                        src="/img/pw-visa.png"
                        alt="Visa"
                        draggable={false}
                        className="absolute left-0 top-[10px] block h-[11px] w-[33px] select-none object-cover"
                      />
                      <img
                        src="/img/pw-mastercard.png"
                        alt="Mastercard"
                        draggable={false}
                        className="absolute left-[41px] top-[7px] block h-4 w-[25px] select-none rounded-[20px] object-cover"
                      />
                      <img
                        src="/img/pw-maestro.png"
                        alt="Maestro"
                        draggable={false}
                        className="absolute left-[69px] top-[7px] block h-4 w-[26px] select-none object-cover"
                      />
                      <img
                        src="/img/pw-amex.png"
                        alt="American Express"
                        draggable={false}
                        className="absolute left-[98px] top-0 block h-[31px] w-[49px] select-none object-cover"
                      />
                    </div>
                  </div>

                  {/* The PayPal row's own bottom border lands on the card's bottom edge and is
                      swallowed by overflow-hidden, so it is not drawn. */}
                  <div className="flex h-[52px] w-full items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                      <RadioOff />
                      <MethodLabel>PayPal</MethodLabel>
                    </div>
                    <img
                      src="/img/pw-paypal.png"
                      alt="PayPal"
                      draggable={false}
                      className="block h-[16.094px] w-[57px] shrink-0 select-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-[28px] px-4 pt-[12px]">
              {/* Capped to the Figma text width (358) so the paragraph keeps its 7-line wrap and every
                  block below it lands on the Figma y. */}
              <div className="mx-auto w-full max-w-[358px] text-center font-ui text-[11px] font-medium leading-[1.5] text-black">
                <p>
                  By proceeding, I agree to pay $6.99 for the 7-day introductory plan. If I do not cancel before the
                  end of this introductory period, my plan will convert to a monthly subscription, and SMMHUB will
                  automatically charge my payment method the regular price of $29.99 every month until I cancel. I can
                  cancel anytime in the app to avoid being charged for the next billing cycle.
                </p>
                <p>&#8203;</p>
                <p>
                  Learn more about cancellation and refund terms in our{" "}
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="underline [text-decoration-skip-ink:none] [text-underline-position:from-font]"
                  >
                    Subscription Policy
                  </a>
                  {". For help, contact "}
                  <a
                    href="mailto:support@smmhub.app"
                    className="underline [text-decoration-skip-ink:none] [text-underline-position:from-font]"
                  >
                    support@smmhub.app
                  </a>
                  .
                </p>
              </div>

              <LegalBlock title="Your information is safe">
                We won&rsquo;t sell or rent your personal contact information for any marketing purposes whatsoever.
              </LegalBlock>

              <LegalBlock title="Guaranteed safe checkout">
                All information is encrypted and transmitted without risk using a Secure Socket Layer protocol
              </LegalBlock>

              <LegalBlock title="Need help?">
                {"Send us an email: "}
                <a href="mailto:support@smmhub.app" className="text-[#00b67a] no-underline">
                  support@smmhub.app
                </a>
              </LegalBlock>

              <LegalBlock title="Publisher">
                ROCKETAPPS LLC, Address: 30 N Gould str. Ste R, Sheridan, WY 82801
              </LegalBlock>
            </div>
          </div>
        </div>
      </BrowserChrome>
    </PhoneFrame>
  );
}
