import { cn } from "@/lib/cn";
import type { DnaState } from "@/funnel/flow/types";

const COLS = [
  { key: "who", title: "Who", sub: "you are as a creator" },
  { key: "what", title: "What", sub: "your content is about" },
  { key: "unique", title: "Unique Feature", sub: "that makes you stand out" },
] as const;

export function DnaCard({ done }: { done?: DnaState }) {
  return (
    <div className="w-full rounded-[16px] bg-surface p-4 shadow-bubble">
      <p className="mb-3 font-ui text-[15px] font-bold text-ink">Creator DNA</p>
      <div className="flex gap-2">
        {COLS.map((c) => {
          const on = done?.[c.key];
          return (
            <div key={c.key} className="flex-1">
              <div className="mb-1 flex items-center gap-1">
                <span className={cn("font-ui text-[12px] font-bold", on ? "text-good" : "text-accent")}>{c.title}</span>
                {on && <span className="grid size-[14px] place-items-center rounded-[4px] bg-good text-[9px] font-bold text-white">✓</span>}
              </div>
              <p className="font-ui text-[10.5px] leading-tight text-ink-soft">{c.sub}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-3 h-[72px] w-full overflow-hidden rounded-[10px] bg-gradient-to-r from-[#eef0ff] via-white to-white">
        <svg viewBox="0 0 300 72" className="h-full w-full" aria-hidden>
          {Array.from({ length: 26 }).map((_, i) => {
            const x = 8 + i * 11;
            const y1 = 36 + Math.sin(i * 0.72) * 21;
            const y2 = 36 - Math.sin(i * 0.72) * 21;
            const c = i < 9 ? "#6151fc" : i < 18 ? "#9a86ff" : "#c7ccdb";
            return (
              <g key={i}>
                <line x1={x} y1={y1} x2={x} y2={y2} stroke={c} strokeWidth="1.3" opacity="0.45" />
                <circle cx={x} cy={y1} r="3" fill={c} />
                <circle cx={x} cy={y2} r="3" fill={c} />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
