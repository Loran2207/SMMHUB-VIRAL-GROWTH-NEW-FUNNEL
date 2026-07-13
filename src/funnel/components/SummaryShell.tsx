import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Real SMMHUB swirl mark exported from Figma (45573:6573). */
function Emblem() {
  return <img src="/img/emblem.svg" alt="" aria-hidden className="size-[30px] shrink-0 drop-shadow-[0_3px_6px_rgba(86,52,232,0.28)]" />;
}

export function FeaturedIcon({ children }: { children: ReactNode }) {
  return <span className="grid size-[28px] shrink-0 place-items-center rounded-[8px] border border-[#ebebee] bg-white text-ink-soft shadow-tile">{children}</span>;
}

export function TopCard({ cols }: { cols: { icon: ReactNode; label: string; value: string; emoji?: string }[] }) {
  return (
    <div className="px-4 pt-6">
      <div className="relative">
        <div className="mb-2 flex">
          {cols.map((c, i) => (
            <div key={i} className="flex flex-1 justify-center">
              <span className="grid h-[26px] place-items-center text-accent">{c.icon}</span>
            </div>
          ))}
        </div>
        <div className="flex rounded-[12px] border border-[#eaecf0] bg-white py-2 shadow-pill">
          {cols.map((c, i) => (
            <div key={i} className={cn("flex flex-1 flex-col items-center px-1 text-center", i > 0 && "border-l border-line-soft")}>
              <span className="font-ui text-[12px] font-medium leading-[1.5] text-ink-soft">{c.label}</span>
              <span className="flex items-center justify-center gap-1 font-ui text-[14px] font-semibold capitalize leading-[1.4] text-ink">
                {c.emoji && <span className="shrink-0 leading-none">{c.emoji}</span>}
                {c.value}
              </span>
            </div>
          ))}
        </div>
        {/* Accent underline. Figma (45573:6620) draws an 82x1 line at the pill's top edge, centred under
            each icon, stroked with a fade #eaecf0 -> #6151fc -> #eaecf0. Flattened to solid accent and
            rendered as real divs: gradients and pseudo-elements do not survive a static DOM capture.
            top-[35px] = icon row (26) + gap (8) + 1px, so it rides the card's top border. */}
        <div className="pointer-events-none absolute inset-x-0 top-[35px] flex">
          {cols.map((_, i) => (
            <div key={i} className="flex flex-1 justify-center">
              <span className="h-px w-[82px] max-w-[82%] bg-accent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function InfoRow({ icon, label, value, emoji }: { icon: ReactNode; label: string; value: string; emoji?: string }) {
  return (
    <div className="flex gap-4 px-4 pt-6">
      <FeaturedIcon>{icon}</FeaturedIcon>
      <div className="flex flex-1 flex-col gap-1.5">
        <p className="font-ui text-[14px] font-semibold leading-[1.4] text-ink">{label}</p>
        <p className="font-ui text-[12px] font-medium leading-[1.5] text-ink-soft">
          {emoji && <span className="mr-1">{emoji}</span>}
          {value}
        </p>
      </div>
    </div>
  );
}

export function SummaryShell({ title, subtitle, children, note, cta, onNext }: {
  title: string; subtitle: ReactNode; children: ReactNode; note: string; cta: string; onNext: () => void;
}) {
  return (
    <div className="relative min-h-0 flex-1 bg-white">
      <div className="h-full overflow-y-auto pb-[182px]">
        <div className="flex flex-col items-center gap-3 px-12 pt-6">
          <h2 className="text-center font-ui text-[32px] font-extrabold italic leading-[1.1]">
            <span className="inline-flex items-center gap-2 text-accent">Your <Emblem /></span>
            <span className="mt-0.5 block text-ink">{title}</span>
          </h2>
          <p className="w-[294px] text-center font-ui text-[14px] font-medium leading-[1.4] text-ink-soft">{subtitle}</p>
        </div>
        {children}
      </div>
      {/* Solid white footer. No scroll fade: a CSS gradient captures as a grey band in Figma. */}
      <div className="absolute inset-x-0 bottom-0 bg-white">
        <div>
          <div className="px-4 pt-4">
            <div className="rounded-[12px] border border-[#a4f3cb] bg-[#eafdf0] px-4 py-2.5"><p className="font-ui text-[13px] font-semibold leading-[1.4] text-[#34453a]">{note}</p></div>
          </div>
          <div className="px-4 pb-5 pt-3">
            <button type="button" onClick={onNext} className="h-[56px] w-full rounded-[16px] bg-[#2d3251] font-ui text-[16px] font-bold text-white shadow-cta active:scale-[0.99]">{cta}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
