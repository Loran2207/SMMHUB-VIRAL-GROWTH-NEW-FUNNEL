import { useEffect } from "react";
import { PhoneFrame } from "@/funnel/components/PhoneFrame";
import { BrowserChrome } from "@/funnel/components/BrowserChrome";
import { HeroStar, HeroProgress, Spinner } from "@/funnel/screens/icons";

/**
 * Hero ("Dark 9", Figma 45573:1454 -> content frame 45573:1471, 390x714).
 *
 * Laid out at the original's exact px coordinates. The top block is pinned to the top of the
 * content area; the illustration and the legal footer are pinned to the bottom, which keeps the
 * spacing between the phones and the footer identical to Figma on any viewport. At the design
 * height (714px of content) every element lands on its Figma coordinate exactly.
 *
 * /img/hero-illo.png is the glow (45573:1486) and the phone comparison (45573:1492) composited in
 * Figma and exported as one image - Figma bakes the #030303 page background into every export, so
 * layering two separate exports would have blacked out the glow.
 */
export function Hero({ onNext, hold }: { onNext: () => void; hold?: boolean }) {
  // The hero self-advances after 3s in the real flow. When the screen is deep-linked (?screen=hero)
  // it must stay put, otherwise a Figma capture or a screenshot lands on the next screen instead.
  useEffect(() => {
    if (hold) return;
    const t = setTimeout(onNext, 3000);
    return () => clearTimeout(t);
  }, [onNext, hold]);

  return (
    <PhoneFrame>
      <BrowserChrome>
        <div onClick={onNext} className="relative h-full cursor-pointer overflow-hidden bg-[#030303] text-white">
          {/*
           * Glow + Day 1 / Day 28 phones. Figma puts this at y=206, 390x508, inside a 714px content
           * frame; a browser content area is only 682px (870 viewport - 109 top chrome - 79 bottom
           * nav), so it never fit at full size. The legal block is now two lines instead of one, so
           * the box is trimmed again (444px tall, raised to y=196) to buy the text ~30px of clear
           * air: the artwork's lowest ink - the curved arrow - sits at 86% of the image height, i.e.
           * y=196+0.86*444=579, and the legal block starts around y=608. The top edge may ride under
           * the progress bar and the loading row: that area of the export is pure glow, as in Figma.
           */}
          <img
            src="/img/hero-illo.png"
            alt=""
            aria-hidden
            draggable={false}
            className="pointer-events-none absolute inset-x-0 top-[196px] block h-[444px] w-full select-none"
          />

          {/* SMMHUB wordmark - Figma y=16, Gilroy ExtraBold 16. */}
          <p className="absolute inset-x-0 top-[16px] text-center font-brand text-[16px] font-extrabold leading-[20px]">SMMHUB</p>

          {/* Rating row - Figma y=56. */}
          <div className="absolute left-1/2 top-[56px] flex -translate-x-1/2 items-center gap-[6px] whitespace-nowrap">
            <span className="flex items-center gap-px">
              {[0, 1, 2, 3, 4].map((i) => (
                <HeroStar key={i} className="size-[12px]" />
              ))}
            </span>
            <span className="font-ui text-[12px] font-medium leading-[1.4]">Excellent</span>
            <span className="font-ui text-[12px] font-bold leading-[1.4]">4.7</span>
            <span className="h-[15px] w-px bg-white/40" />
            <span className="font-ui text-[12px] font-medium leading-[1.4]">43,392 ratings</span>
          </div>

          {/* Headline - Figma: line 1 bottom y=124, line 2 block y=124..186. */}
          <p className="absolute inset-x-0 top-[93px] h-[31px] text-center font-ui text-[24px] font-bold leading-[1.3]">Stop scrolling!</p>
          <p className="absolute left-1/2 top-[124px] w-[288px] -translate-x-1/2 text-center font-ui text-[24px] font-bold leading-[1.3]">
            Start your journey to <span className="text-[#7a5cff]">10k followers</span>
          </p>

          {/* Progress - Figma: bar y=203 (16px tall, 358 wide, 231px filled), label centred on it. */}
          <HeroProgress className="absolute left-[16px] top-[203px] h-[16px] w-[358px]" />
          <span className="absolute left-1/2 top-[202px] -translate-x-1/2 font-ui text-[12px] font-semibold leading-[1.4]">65%</span>

          {/* Loading row - Figma y=235. */}
          <div className="absolute left-1/2 top-[235px] flex h-[20px] -translate-x-1/2 items-center gap-[6px] whitespace-nowrap">
            <Spinner className="size-[14px] animate-spin" />
            <span className="font-ui text-[14px] font-medium leading-[1.4]">Loading the quiz...</span>
          </div>

          {/*
           * Legal footer. Arkadiy's review adds the illustrative-purposes sentence above the terms
           * line, which doubles the block from two rendered lines to four. To keep it legible and
           * clear of the illustration it is widened (304 -> 358) and stepped down to 10px/1.5 - the
           * disclaimer sits a shade dimmer than the terms line, so the block reads as one deliberate
           * footer rather than a wall of grey text.
           */}
          <div className="absolute inset-x-0 bottom-[14px] px-[16px]">
            <p className="mx-auto w-full max-w-[358px] text-center font-ui text-[10px] font-normal leading-[1.5] tracking-[-0.2px] text-white/70">
              Image above is for illustrative purposes only and does not guarantee results.
            </p>
            <p className="mx-auto mt-[4px] w-full max-w-[358px] text-center font-ui text-[10px] font-normal leading-[1.5] tracking-[-0.2px] text-white/90">
              By continuing, you agree with <u>Terms and Conditions</u>, <u>Privacy Policy</u>, <u>Subscription Terms</u>
            </p>
          </div>
        </div>
      </BrowserChrome>
    </PhoneFrame>
  );
}
