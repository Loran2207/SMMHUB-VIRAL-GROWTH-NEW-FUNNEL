import { useEffect } from "react";
import { PhoneFrame } from "@/funnel/components/PhoneFrame";
import { BrowserChrome } from "@/funnel/components/BrowserChrome";
import { HeroStar, HeroProgress, Spinner } from "@/funnel/screens/icons";

/**
 * Hero ("Dark 9", Figma 45573:1454 -> content frame 45573:1471, 390x714).
 *
 * The top block (wordmark, rating, headline, progress, loading row) keeps the original's px
 * coordinates. Everything below is re-spaced for the real browser content area, which is 676px
 * tall (870 viewport - 112 top chrome - 82 bottom nav), not Figma's 714.
 *
 * /img/hero-illo.png is the glow (45573:1486) and the phone comparison (45573:1492) composited in
 * Figma and exported as one image - Figma bakes the #030303 page background into every export, so
 * layering two separate exports would have blacked out the glow. That also means the export is a
 * fully opaque rectangle: the 16% of dead background above the artwork and the 15% below it were
 * still real, painted pixels that covered whatever they overlapped. They have been cropped off the
 * PNG (it is now 1170x1206; ink runs from 0.4% to 87.5% of its height), so the img's box is the
 * artwork's box and the blocks below can be spaced against pixels instead of against padding. The
 * export's left and right edges are feathered into #030303 as well - the glow band ran all the way
 * to them, which was invisible full-bleed but would be two hard seams now that it is 294px wide.
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

          {/*
           * Loading row - Figma y=235, bottom edge y=255.
           * The spinner sits in its own 22px-wide box rather than a 6px flex gap: the Figma capture
           * engine collapses flex gaps, which parked the 14px glyph on top of the "L". A fixed-width
           * box is real geometry, so the icon keeps 8px of clear space to its right either way.
           */}
          <div className="absolute left-1/2 top-[235px] flex h-[20px] -translate-x-1/2 items-center whitespace-nowrap">
            <span className="flex h-[20px] w-[22px] shrink-0 items-center">
              <Spinner className="size-[14px] animate-spin" />
            </span>
            <span className="font-ui text-[14px] font-medium leading-[1.4]">Loading the quiz...</span>
          </div>

          {/*
           * Glow + Day 1 / Day 28 phones, 294x303 at y=285 (aspect kept: 1170/1206 = 0.970).
           * The box clears the loading row by 30px and the legal block by 10px, so no two boxes
           * touch - the artwork itself reads as 32px below the loading text (ink starts 0.7% in)
           * and 48px above the footer (the curved arrow, its lowest ink, ends at 87% of the box;
           * the remaining 13% is the glow fading out).
           */}
          <img
            src="/img/hero-illo.png"
            alt=""
            aria-hidden
            draggable={false}
            className="pointer-events-none absolute left-1/2 top-[285px] block h-[303px] w-[294px] -translate-x-1/2 select-none"
          />

          {/*
           * Legal footer, y=598..664. Two sentences, each deliberately broken over two lines:
           * the disclaimer is set to a 224px measure so it splits after "only" instead of orphaning
           * "results.", and the terms line to 320px so it splits on the comma after "Conditions,"
           * and never cuts a link in half. The disclaimer stays a step smaller and dimmer than the
           * terms line, so the block reads as one footer with a clear primary line.
           */}
          <div className="absolute inset-x-0 bottom-[12px]">
            <p className="mx-auto w-[224px] text-center font-ui text-[10px] font-normal leading-[14px] tracking-[-0.1px] text-white/50">
              Image above is for illustrative purposes only and does not guarantee results.
            </p>
            <p className="mx-auto mt-[6px] w-[320px] text-center font-ui text-[11px] font-normal leading-[16px] tracking-[-0.1px] text-white/85">
              By continuing, you agree with <u>Terms and Conditions</u>, <u>Privacy Policy</u>, <u>Subscription Terms</u>
            </p>
          </div>
        </div>
      </BrowserChrome>
    </PhoneFrame>
  );
}
