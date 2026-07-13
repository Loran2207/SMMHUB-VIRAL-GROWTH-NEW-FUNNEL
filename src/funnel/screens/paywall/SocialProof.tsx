import { StartButton } from "@/funnel/screens/paywall/bits";

/** star-sharp (Figma 45573:2502 / 45573:2525). Inline so the capture engine sees a real vector. */
function Star({ size }: { size: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      width={size}
      height={size}
      aria-hidden
      className="block shrink-0"
    >
      <path
        d="M8.4744 1.46843C8.17816 1.3087 7.82145 1.3087 7.52521 1.46843C7.25019 1.61671 7.12714 1.887 7.07488 2.00437C7.01038 2.14923 6.94459 2.33857 6.8748 2.53941L5.87661 5.41107L2.83703 5.47301C2.62446 5.47732 2.42406 5.48138 2.26636 5.49796C2.13859 5.51139 1.84351 5.5449 1.61749 5.76064C1.37404 5.99302 1.26381 6.33227 1.32418 6.66337C1.38022 6.97075 1.59925 7.1713 1.69473 7.25727C1.81256 7.36338 1.9723 7.48446 2.14175 7.6129L4.56441 9.44962L3.68404 12.3596C3.62245 12.5631 3.56438 12.7549 3.53142 12.91C3.50471 13.0357 3.44539 13.3267 3.58072 13.6083C3.7265 13.9117 4.01509 14.1213 4.34864 14.1662C4.65829 14.2079 4.91671 14.0616 5.02798 13.9973C5.16529 13.9181 5.3298 13.8036 5.50429 13.6821L7.99981 11.9456L10.4953 13.6821C10.6698 13.8036 10.8343 13.9181 10.9716 13.9973C11.0829 14.0616 11.3413 14.2079 11.651 14.1662C11.9845 14.1213 12.2731 13.9117 12.4189 13.6083C12.5542 13.3267 12.4949 13.0357 12.4682 12.91C12.4352 12.7549 12.3772 12.5631 12.3156 12.3595L11.4352 9.44962L13.8578 7.61291C14.0273 7.48447 14.187 7.36338 14.3049 7.25727C14.4004 7.1713 14.6194 6.97075 14.6754 6.66337C14.7358 6.33227 14.6256 5.99302 14.3821 5.76064C14.1561 5.5449 13.861 5.51139 13.7332 5.49796C13.5755 5.48138 13.3751 5.47732 13.1626 5.47301L10.123 5.41107L9.12481 2.53941C9.05502 2.33857 8.98923 2.14923 8.92473 2.00437C8.87247 1.887 8.74942 1.61671 8.4744 1.46843Z"
        fill="#FEAE21"
      />
    </svg>
  );
}

/** The 5-star row. Margins, not a flex gap: a collapsed gap would let the stars touch. */
function Stars({ size, gap }: { size: number; gap: number }) {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} style={i === 0 ? undefined : { marginLeft: gap }} className="block">
          <Star size={size} />
        </span>
      ))}
    </>
  );
}

/** "4.9" chip + 5 stars. The stars box is 75px but holds 78px of stars - Figma lets them overflow. */
function Rating() {
  return (
    <div className="mt-1.5 flex h-[17px] items-center justify-center">
      <span className="flex items-center rounded-[4px] bg-[#EAECF0] px-1 text-[12px] font-semibold leading-[17px] text-[#02082d]">
        4.9
      </span>
      <span className="ml-2 flex w-[75px] items-center">
        <Stars size={14} gap={2} />
      </span>
    </div>
  );
}

/** One half of the store card: icon, store name, rating. */
function Store({ src, imgClass, name }: { src: string; imgClass: string; name: string }) {
  return (
    <div className="flex flex-1 flex-col items-center">
      <span className="flex size-8 items-center justify-center overflow-hidden">
        <img src={src} alt="" draggable={false} className={imgClass} />
      </span>
      <p className="mt-1.5 text-center text-[14px] font-semibold leading-[20px] text-[#02082d]">
        {name}
      </p>
      <Rating />
    </div>
  );
}

/**
 * One of the two diagonal shines behind the card (Figma 45573:2492 / 45573:2493): a tall white bar
 * rotated inside a box, clipped by the card. Anchored from the right edge, so on our wider column it
 * keeps the same distance from the corner it is drawn against.
 */
function Shine({ right, w, h, bar }: { right: number; w: number; h: number; bar: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-[-21px] flex items-center justify-center"
      style={{ right, width: w, height: h }}
    >
      <div
        className="bg-white"
        style={{ width: bar, height: 286.191, transform: "rotate(29.16deg)" }}
      />
    </div>
  );
}

/** "Over 1 million happy customers", the store ratings and a CTA. Figma 45573:2487 (minus the chip). */
export function SocialProof({ onStart }: { onStart: () => void }) {
  return (
    <section className="bg-white px-4 font-ui">
      {/* Figma fills the card rgba(94,57,255,0.05); flattened over the white page that is #F7F5FF,
          which the capture engine reads as a plain fill. */}
      <div className="relative overflow-hidden rounded-xl bg-[#F7F5FF] p-4">
        <Shine right={33.52} w={151.488} h={256.642} bar={13.793} />
        <Shine right={15.29} w={145.441} h={253.268} bar={6.868} />

        <div className="relative">
          <div className="mx-auto flex w-[291px] items-center">
            <img
              src="/img/pw-laurel.png"
              alt=""
              draggable={false}
              className="mr-4 block h-[116.97px] w-[46px] shrink-0 select-none"
            />

            <div className="flex w-[167px] flex-col items-center">
              <p className="text-center text-[16px] font-bold leading-[22px] text-[#5E39FF]">Over</p>
              <p className="mt-1 whitespace-nowrap text-center text-[32px] font-bold leading-[38px] text-[#5E39FF]">
                1 million
              </p>
              <p className="mt-1 whitespace-nowrap text-center text-[16px] font-bold leading-[22px] text-[#02082d]">
                happy customers
              </p>
              <div className="mt-1 flex items-center justify-center py-1">
                <Stars size={16} gap={1} />
              </div>
              <p className="mt-1 whitespace-nowrap text-center text-[11px] font-medium leading-[15px] text-[#465063]">
                on App Store and Google Play
              </p>
            </div>

            {/* Same asset, mirrored - Figma flips the one wreath for the other side. */}
            <img
              src="/img/pw-laurel.png"
              alt=""
              draggable={false}
              className="ml-4 block h-[116.97px] w-[46px] shrink-0 -scale-x-100 select-none"
            />
          </div>

          <div className="relative mt-4 flex items-center rounded-lg bg-white py-[10px]">
            <Store src="/img/pw-appstore.png" imgClass="block size-[29px]" name="App Store" />
            {/* Figma Line 52 is a zero-width line on the centre: out of the flex flow, so each half
                stays a full half of the card. */}
            <span className="absolute left-1/2 top-[10px] h-[81px] w-px -translate-x-1/2 bg-[#EAECF0]" />
            <Store
              src="/img/pw-googleplay.png"
              imgClass="block h-[28px] w-[25px]"
              name="Google Play"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <StartButton label="Start My Plan" onStart={onStart} />
      </div>
    </section>
  );
}
