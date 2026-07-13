/** Money-back guarantee card + the three trust blocks that close the page.
 *  Figma 45573:2637 and 45573:2651. */

const HEADING = "w-full text-[18px] font-bold leading-[1.6] tracking-[-0.36px] text-[#02082d]";

const PAY_METHODS = [
  { src: "/img/pw-pay-1.png", alt: "Apple Pay" },
  { src: "/img/pw-pay-2.png", alt: "Visa" },
  { src: "/img/pw-pay-3.png", alt: "Mastercard" },
  { src: "/img/pw-pay-4.png", alt: "PayPal" },
  { src: "/img/pw-pay-5.png", alt: "American Express" },
];

export function Guarantee() {
  return (
    <section className="flex flex-col gap-[28px] font-ui">
      <div className="px-4">
        <div className="relative flex w-full flex-col items-start gap-[16px] rounded-[12px] border border-[#EAECF0] bg-[#FAFBFD] p-[16px]">
          <div className="flex w-full flex-col items-start gap-[12px]">
            <div className="flex items-center">
              <h3 className="whitespace-nowrap text-[18px] font-bold leading-[normal] text-[#00B67A]">Money-Back Guarantee</h3>
            </div>
            <div className="w-full text-[12px] font-semibold leading-[1.4] text-[#465063] [word-break:break-word]">
              <p>
                Your success is our priority. If you follow the required 30-day plan and don’t achieve the
                required follower growth, you may be eligible for a refund.
              </p>
              <p>
                For more details, see our <span className="text-[#00B67A]">Subscription Policy.</span>
              </p>
            </div>
          </div>
          {/* The seal hangs 31px below the card and is deliberately NOT clipped. */}
          <img
            src="/img/pw-seal.png"
            alt=""
            className="absolute right-[11px] top-[96.14px] h-[68.5px] w-[48px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[28px] px-4">
        <div className="flex flex-col items-start gap-[4px]">
          <h3 className={HEADING}>Your information is safe</h3>
          <p className="w-full text-[12px] font-medium leading-[1.4] text-[#465063] [word-break:break-word]">
            We won’t sell or rent your personal contact information for any marketing purposes whatsoever.
          </p>
        </div>

        <div className="flex flex-col items-start gap-[4px]">
          <h3 className={HEADING}>Guaranteed safe checkout</h3>
          {/* 12px as a margin, not a flex gap - a collapsed gap would butt the tiles together. */}
          <div className="flex w-full items-center pt-[4px]">
            {PAY_METHODS.map((m, i) => (
              <img
                key={m.alt}
                src={m.src}
                alt={m.alt}
                className={`h-[24px] w-[34px] shrink-0 ${i === PAY_METHODS.length - 1 ? "" : "mr-[12px]"}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-[4px]">
          <h3 className={HEADING}>Need help?</h3>
          <p className="w-full text-[12px] font-medium leading-[1.4] text-[#465063] [word-break:break-word]">
            Send us an email:{" "}
            <a className="text-[#00B67A] no-underline" href="mailto:support@smmhub.app">
              support@smmhub.app
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
