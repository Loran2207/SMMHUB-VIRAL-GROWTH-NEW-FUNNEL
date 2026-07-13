import type { ReactNode } from "react";
import { PhoneFrame } from "@/funnel/components/PhoneFrame";
import { BrowserChrome } from "@/funnel/components/BrowserChrome";
import {
  CalendarLines, RefreshCw, StatRule, BookOpen, Headphones, MessageCircle,
  StepUser, StepUsers, StepBullseye, StarSharp, Sparkle,
} from "@/funnel/screens/icons";

/**
 * Today (Figma 45573:5554, 390x1287).
 *
 * Rebuilt at the original's exact px geometry. Figma's y coordinates include a 59px iOS status bar;
 * BrowserChrome supplies the browser bar instead, so every block sits 59px higher while the stack
 * order and block heights stay identical to Figma:
 *   avatar row 56 | title 139 | stats 102 | also-included 163 | white sheet 768.
 *
 * The Start button is pinned below the scroll area: the original is a 1287px scrolling screen, and
 * in a ~682px browser viewport the CTA still has to be reachable.
 *
 * The mobile app's bottom tab bar (Today / Templates / AI Apps / Academy) and the header avatar are
 * both dropped: they are native-app chrome and have no place in a web funnel that already carries
 * real Safari chrome. The 56px header row stays - the light rays behind the title are positioned
 * against it, and it now reads as the screen's top padding.
 *
 * Baked Figma exports (photographic or too intricate to redraw), each placed by its render bounds
 * because Figma exports bleed past the node box wherever a node has a shadow or glow:
 *   /img/today-bg-lines.png  45573:5555  light rays behind the title
 *   /img/today-pill.png      45573:5568  the 7.4k / 36k pink pill
 *   /img/today-woman2.png    45573:5623  the woman beside "Also included"
 *   /img/today-calendar.png  45573:5633  WEEK 1 / WEEK 2 preview + the man + the 99k badges
 * Everything else is real DOM: solid fills and inline <svg>, so the Figma capture keeps it.
 */

const STEPS = [
  { lead: "Step 1: ", name: "Niche", time: "1 min", sub: "Define your niche & creator profile" },
  { lead: "Step 2: ", name: "Target Audience", time: "2 min", sub: "Understand who your content is for" },
  { lead: "Step 3: ", name: "Goals", time: "1 min", sub: "Define clear goals for your journey" },
  { lead: "Step 4: ", name: "Growth Content Plan", time: "", sub: "Unlock your hyper-personalized plan" },
];

export function Today({ onNext }: { onNext: () => void }) {
  return (
    <PhoneFrame>
      <BrowserChrome>
        <div className="min-h-0 flex-1 overflow-y-auto bg-white">
          <div className="relative w-full">
            <img
              src="/img/today-bg-lines.png"
              alt=""
              aria-hidden
              draggable={false}
              className="pointer-events-none absolute inset-x-0 top-0 block h-[287px] w-full select-none"
            />
            <div className="relative">
              <Head />
              <Stats />
              <AlsoIncluded />
              <Sheet />
            </div>
          </div>
        </div>

        <div className="shrink-0 bg-white p-[16px]">
          <button
            type="button"
            onClick={onNext}
            className="h-[56px] w-full rounded-[16px] bg-primary font-ui text-[16px] font-bold text-white shadow-cta active:scale-[0.99]"
          >
            Start
          </button>
        </div>
      </BrowserChrome>
    </PhoneFrame>
  );
}

/** Avatar row + title block. Figma 45573:5806 (h-56 after dropping the status bar) and 45573:5561. */
function Head() {
  return (
    <>
      {/* The header row keeps its Figma height - the light rays are placed against it - but the app's
          profile avatar is gone: it is native-app chrome, and a web funnel has no account behind it. */}
      <div className="h-[56px]" />

      <div className="flex h-[139px] flex-col items-center gap-[8px] px-[70px]">
        <div className="flex items-start gap-[4px] whitespace-nowrap text-[12px]">
          <span className="font-ui font-semibold leading-[1.2] text-ink-soft">Meet your</span>
          <span className="font-brand font-extrabold text-ink">SMMHUB</span>
        </div>

        <div className="relative flex w-[229px] flex-col items-center">
          <div className="flex items-center justify-center gap-[4px]">
            <p className="whitespace-nowrap font-ui text-[32.3px] font-extrabold italic leading-[1.1] text-ink">Growth</p>
            <span className="relative block h-[33px] w-[87px] shrink-0">
              <img
                src="/img/today-pill.png"
                alt=""
                draggable={false}
                className="absolute block max-w-none select-none"
                style={{ left: "-11.68px", top: "-9.94px", width: "106.99px", height: "56.28px" }}
              />
            </span>
          </div>
          <p className="whitespace-nowrap font-ui text-[32.3px] font-extrabold italic leading-[1.1] text-ink">Content Plan</p>

          {/* Figma 45573:5587 - three stars pinned to the title box, centres from the originals. */}
          <Sparkle className="pointer-events-none absolute right-[-3px] top-[-1.2px] h-[7px] w-[6px] rotate-[19.8deg]" />
          <Sparkle className="pointer-events-none absolute right-[-13.1px] top-[-5.7px] h-[8px] w-[9px] rotate-[19.8deg]" />
          <Sparkle className="pointer-events-none absolute right-[-2.1px] top-[-10.7px] h-[8px] w-[9px] rotate-[19.8deg]" />
        </div>

        <p className="w-full text-center font-ui text-[12px] font-medium leading-[1.5] text-ink-soft">
          A hyper-personalized plan engineered for viral growth
        </p>
      </div>
    </>
  );
}

/** The 2-column stat card. Figma 45573:5592: 260x102, centred, purple rules on the card's top edge. */
function Stats() {
  return (
    <div className="relative mx-auto h-[102px] w-[260px] pt-[20px]">
      <div className="flex h-[26px] w-full items-center">
        <div className="flex flex-1 items-center justify-center gap-[4px]">
          <CalendarLines className="size-[24px] shrink-0" />
          <span className="font-ui text-[20px] font-semibold leading-[1.3] text-accent">30</span>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <RefreshCw className="size-[24px] shrink-0" />
        </div>
      </div>

      <div className="mt-[8px] flex w-[260px] items-center rounded-[12px] border border-[#eaecf0] bg-white py-[8px] shadow-[0_2px_2px_rgba(16,24,40,0.06),0_4px_4px_rgba(16,24,40,0.1)]">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[98px] text-center font-ui text-[12px] font-semibold leading-[1.3] text-ink">days of viral content ideas</p>
        </div>
        <span className="h-[18px] w-px shrink-0 bg-[#eaecf0]" />
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[98px] text-center font-ui text-[12px] font-semibold leading-[1.3] text-ink">fresh plan every month</p>
        </div>
      </div>

      <StatRule className="absolute left-[11px] top-[55px] h-px w-[110px]" />
      <StatRule className="absolute left-[140px] top-[55px] h-px w-[110px]" />
    </div>
  );
}

/** Figma 45573:5608. The woman is 189px tall inside a 163px row, so she bleeds down and the
 *  white sheet (which is positioned, and therefore painted after her) clips her off. */
function AlsoIncluded() {
  return (
    <div className="flex h-[163px] gap-[28px] pl-[16px] pt-[20px]">
      <div className="flex w-[221px] shrink-0 flex-col gap-[12px]">
        <p className="font-ui text-[11px] font-medium leading-[1.5] text-ink-soft">Also included</p>
        <div className="flex flex-col gap-[12px]">
          <Incl icon={<BookOpen className="size-[22px] shrink-0" />} label="19 pdf guides" />
          <span className="h-px w-full bg-[#ebebee]" />
          <Incl icon={<Headphones className="size-[22px] shrink-0" />} label="AI Chat Assistant" />
          <span className="h-px w-full bg-[#ebebee]" />
          <Incl icon={<MessageCircle className="size-[22px] shrink-0" />} label="100+ ready-to-use prompts" />
        </div>
      </div>
      <div className="relative ml-auto h-[189px] w-[125px] shrink-0 overflow-hidden">
        <img src="/img/today-woman2.png" alt="" draggable={false} className="absolute inset-0 block size-full select-none" />
      </div>
    </div>
  );
}

function Incl({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-[8px]">
      {icon}
      <span className="whitespace-nowrap font-ui text-[14px] font-medium leading-[1.4] text-ink">{label}</span>
    </div>
  );
}

/** The white sheet. Figma 45573:5627 (pt-20) -> card 45573:5628 (rounded-t-32, 592 tall).
 *  `relative` is load-bearing: it makes the sheet paint over the woman bleeding in from above. */
function Sheet() {
  return (
    <div className="relative z-10 w-full pt-[20px]">
      <div className="flex w-full flex-col gap-[20px] rounded-t-[32px] border-t border-[#ebebee] bg-white pb-[24px] shadow-[0_-3px_2.55px_rgba(2,8,45,0.03)]">
        <div className="flex flex-col gap-[14px] px-[16px] pt-[16px]">
          <p className="text-center font-ui text-[14px] leading-[1.4] text-ink">
            <span className="font-bold">Complete 4 quick steps</span>{" "}
            <span className="font-medium">to unlock your personalized content plan</span>
          </p>
          <span className="h-px w-full bg-[#ebebee]" />
          <StepsGroup />
        </div>

        {/* WEEK 1 / WEEK 2 preview. The export bleeds 14.7px above the node box (badge glows). */}
        <div className="relative h-[196px] w-full overflow-hidden">
          <img
            src="/img/today-calendar.png"
            alt=""
            draggable={false}
            className="absolute inset-x-0 block w-full select-none"
            style={{ top: "-14.7px", height: "220.11px" }}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Figma 45573:599. A 46px rail of connectors + step circles, and a text column on an 82px pitch.
 * Both are absolutely placed at the Figma coordinates so the circles stay centred on their rows
 * no matter how the text wraps. Circles: y = 5 / 87 / 169 / 251.
 */
function StepsGroup() {
  return (
    <div className="relative mx-auto h-[289px] w-[323px]">
      {/* connectors (behind the circles) */}
      <span className="absolute left-[19px] top-[32px] h-[74px] w-[8px] bg-[#f5f5f7]" />
      <span className="absolute left-[19px] top-[112px] h-[67px] w-[8px] bg-[#f5f5f7]" />
      <span className="absolute left-[19px] top-[185px] h-[67px] w-[8px] bg-[#f5f5f7]" />

      {/* Step 1 - active. The soft halo is a box-shadow ring, so it stays a solid colour. */}
      <span className="absolute left-[5px] top-[5px] grid size-[36px] place-items-center rounded-full border-[1.8px] border-white bg-[#6151fc] shadow-[0_1.8px_0_0_#6151fc,0_0_0_5px_rgba(97,81,252,0.2)]">
        <StepUser className="size-[16px]" />
      </span>

      <span className="absolute left-[5px] top-[87px] grid size-[36px] place-items-center rounded-full border-[1.8px] border-[#ebebee] bg-[#f5f5f7] shadow-[0_1.8px_0_0_#dddee3]">
        <StepUsers className="size-[16px]" />
      </span>

      <span className="absolute left-[5px] top-[169px] grid size-[36px] place-items-center rounded-full border-[1.8px] border-[#ebebee] bg-[#f5f5f7] shadow-[0_1.8px_0_0_#dddee3]">
        <StepBullseye className="size-[16px]" />
      </span>

      {/* Step 4 - gold, with the two diagonal shine slivers from the original. */}
      <span className="absolute left-[5px] top-[251px] block size-[36px] overflow-hidden rounded-full border-[1.8px] border-[#ffc700] bg-[#ffc700] shadow-[0_1.8px_0_0_#e6a000]">
        <span className="absolute left-[-11px] top-[-7px] flex size-[29.29px] items-center justify-center">
          <span className="block h-[35.63px] w-[5.8px] rotate-45 rounded-[21px] bg-[#ffe700]" />
        </span>
        <span className="absolute left-[0px] top-[8px] flex size-[34.14px] items-center justify-center">
          <span className="block h-[43.94px] w-[4.34px] rotate-45 rounded-[21px] bg-[#ffe700]" />
        </span>
        <StarSharp className="absolute left-[5.4px] top-[5.4px] size-[18px]" />
      </span>

      {/* text column: 46px rail + 9px gap = 55px */}
      {STEPS.map((s, i) => (
        <div key={s.name} className="absolute right-0 left-[55px]" style={{ top: `${i * 82}px` }}>
          <div className="flex items-baseline gap-[10px] whitespace-nowrap">
            <p className="font-ui text-[16px] leading-[1.4] text-ink">
              <span className="font-bold">{s.lead}</span>
              <span className="font-semibold">{s.name}</span>
            </p>
            {s.time ? <span className="font-ui text-[12px] font-medium leading-[1.5] text-ink-faint">{s.time}</span> : null}
          </div>
          <p className="mt-[4px] font-ui text-[14px] font-medium leading-[1.4] text-ink-soft">{s.sub}</p>
        </div>
      ))}
    </div>
  );
}
