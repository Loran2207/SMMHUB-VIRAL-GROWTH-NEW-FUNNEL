import type { ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/cn";

function Emblem() {
  return (
    <span className="relative inline-grid size-[30px] shrink-0 place-items-center rounded-full bg-[linear-gradient(145deg,#7d6cff_5%,#5a45e8_95%)] align-[-0.32em] shadow-[0_5px_16px_rgba(110,80,250,0.55),0_2px_6px_rgba(110,80,250,0.4)]">
      <svg viewBox="0 0 24 24" fill="#fff" className="size-[16px]">
        <circle cx="12" cy="8" r="3.7" />
        <path d="M5.4 18.7c.9-3.1 3.5-4.9 6.6-4.9s5.7 1.8 6.6 4.9c.2.75-.35 1.5-1.1 1.5H6.5c-.75 0-1.3-.75-1.1-1.5z" />
      </svg>
    </span>
  );
}

export function FeaturedIcon({ children }: { children: ReactNode }) {
  return <span className="grid size-[28px] shrink-0 place-items-center rounded-[8px] border border-[#ebebee] text-ink-soft shadow-card">{children}</span>;
}

export function TopCard({ cols }: { cols: { icon: ReactNode; label: string; value: string }[] }) {
  return (
    <div className="px-4 pt-6">
      <div className="mb-2 flex">
        {cols.map((c, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-[9px]">
            <span className="grid h-[26px] place-items-center text-accent">{c.icon}</span>
            <span className="h-px w-[82px] max-w-[78%] bg-line" />
          </div>
        ))}
      </div>
      <div className="flex rounded-[12px] border border-[#eaecf0] bg-white py-2 shadow-card">
        {cols.map((c, i) => (
          <div key={i} className={cn("flex flex-1 flex-col items-center px-1 text-center", i > 0 && "border-l border-line-soft")}>
            <span className="font-ui text-[12px] font-medium leading-[1.5] text-ink-soft">{c.label}</span>
            <span className="font-ui text-[14px] font-semibold capitalize leading-[1.4] text-ink">{c.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InfoRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-4 px-4 pt-6">
      <FeaturedIcon>{icon}</FeaturedIcon>
      <div className="flex flex-1 flex-col gap-1.5">
        <p className="font-ui text-[14px] font-semibold leading-[1.4] text-ink">{label}</p>
        <p className="font-ui text-[12px] font-medium leading-[1.5] text-ink-soft">{value}</p>
      </div>
    </div>
  );
}

export function SummaryShell({ title, subtitle, children, note, cta, onNext, onBack }: {
  title: string; subtitle: ReactNode; children: ReactNode; note: string; cta: string; onNext: () => void; onBack?: () => void;
}) {
  return (
    <div className="relative min-h-0 flex-1 bg-gradient-to-b from-white to-[#fefeff]">
      <div className="h-full overflow-y-auto pb-[168px]">
        <div className="flex flex-col items-center gap-3 px-12 pt-6">
          <h2 className="text-center font-ui text-[32px] font-extrabold italic leading-[1.1]">
            <span className="inline-flex items-center gap-2 text-accent">Your <Emblem /></span>
            <span className="mt-0.5 block text-ink">{title}</span>
          </h2>
          <p className="w-[294px] text-center font-ui text-[14px] font-medium leading-[1.4] text-ink-soft">{subtitle}</p>
        </div>
        {children}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <div className="pointer-events-auto bg-gradient-to-b from-white/0 to-white px-4 pb-1 pt-6">
          <div className="rounded-[12px] border border-[#a4f3cb] bg-[#eafdf0] px-4 py-2.5"><p className="font-ui text-[13px] font-semibold leading-[1.4] text-[#34453a]">{note}</p></div>
        </div>
        <div className="pointer-events-auto flex gap-3 bg-white px-4 pb-5 pt-3">
          <button type="button" onClick={onBack} className="flex h-[56px] items-center gap-1 rounded-[16px] border border-[#dedfe4] bg-white pl-3 pr-4 font-ui text-[16px] font-bold text-ink active:scale-[0.99]"><ChevronLeft size={20} /> Prev</button>
          <button type="button" onClick={onNext} className="h-[56px] flex-1 rounded-[16px] bg-[#2d3251] font-ui text-[16px] font-bold text-white shadow-cta active:scale-[0.99]">{cta}</button>
        </div>
      </div>
    </div>
  );
}
