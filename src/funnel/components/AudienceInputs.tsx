import { useState } from "react";
import { Check, X } from "lucide-react";
import type { Question } from "@/funnel/flow/types";
import { Bottom, CardList, OptionCard, PrimaryButton } from "@/funnel/components/ui";

export function Gender({ q, onAnswer }: { q: Extract<Question, { kind: "gender" }>; onAnswer: (v: string) => void }) {
  return (
    <Bottom>
      <CardList>
        {q.options.map((o) => <OptionCard key={o.label} label={o.label} selected={false} control="none" onClick={() => onAnswer(o.label)} />)}
        <button type="button" onClick={() => onAnswer("Skip")} className="flex w-full items-center rounded-[16px] border border-[#eceef3] bg-white px-[18px] py-[16px] text-left font-ui text-[15px] font-semibold text-ink-soft shadow-card transition-all active:scale-[0.99]">Skip</button>
      </CardList>
      <div className="h-4" />
    </Bottom>
  );
}

const MIN = 13;
const MAX = 66;
const lbl = (n: number) => (n >= MAX ? "65+" : String(n));

export function AgeSelect({ onAnswer }: { onAnswer: (v: string) => void }) {
  const [lo, setLo] = useState(18);
  const [hi, setHi] = useState(MAX);
  const pct = (n: number) => ((n - MIN) / (MAX - MIN)) * 100;
  return (
    <Bottom>
      <div className="px-5 pt-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-ui text-[13px] font-semibold text-ink-soft">Age range</span>
          <span className="font-ui text-[16px] font-bold text-ink">{lbl(lo)} - {lbl(hi)}</span>
        </div>
        <div className="relative h-[26px]">
          <div className="absolute left-0 right-0 top-1/2 h-[6px] -translate-y-1/2 rounded-full bg-[#e9eaf2]" />
          <div className="absolute top-1/2 h-[6px] -translate-y-1/2 rounded-full bg-accent" style={{ left: `${pct(lo)}%`, right: `${100 - pct(hi)}%` }} />
          <input type="range" min={MIN} max={MAX} value={lo} onChange={(e) => setLo(Math.min(Number(e.target.value), hi - 1))} className="pz-range absolute inset-0 h-[26px] w-full" aria-label="Minimum age" />
          <input type="range" min={MIN} max={MAX} value={hi} onChange={(e) => setHi(Math.max(Number(e.target.value), lo + 1))} className="pz-range absolute inset-0 h-[26px] w-full" aria-label="Maximum age" />
        </div>
      </div>
      <div className="px-4 pb-4 pt-6"><PrimaryButton onClick={() => onAnswer(`${lbl(lo)}-${lbl(hi)}`)}>Next</PrimaryButton></div>
    </Bottom>
  );
}

const LANGS: [string, string][] = [
  ["🇬🇧", "English"], ["🇪🇸", "Spanish"], ["🇩🇪", "German"], ["🇫🇷", "French"],
  ["🇵🇹", "Portuguese"], ["🇮🇹", "Italian"], ["🇵🇱", "Polish"], ["🇸🇦", "Arabic"],
];

export function LanguageSelect({ onAnswer }: { onAnswer: (v: string) => void }) {
  return (
    <Bottom>
      <CardList>
        {LANGS.map(([flag, name]) => <OptionCard key={name} label={`${flag}  ${name}`} selected={false} control="none" onClick={() => onAnswer(name)} />)}
      </CardList>
      <div className="h-4" />
    </Bottom>
  );
}

export function LocationYesNo({ q, onAnswer }: { q: Extract<Question, { kind: "locYesNo" }>; onAnswer: (v: string) => void }) {
  const [yes, setYes] = useState(false);
  const [text, setText] = useState("");
  if (yes) {
    return (
      <Bottom>
        <div className="px-4 pt-3"><input value={text} autoFocus onChange={(e) => setText(e.target.value)} placeholder={q.placeholder} className="w-full rounded-[16px] border border-[#eceef3] bg-white px-[18px] py-4 font-ui text-[15px] text-ink shadow-card outline-none transition-colors placeholder:text-ink-faint focus:border-accent" /></div>
        <div className="px-4 pb-4 pt-3"><PrimaryButton disabled={!text.trim()} onClick={() => onAnswer(text.trim())}>Next</PrimaryButton></div>
      </Bottom>
    );
  }
  return (
    <Bottom>
      <div className="flex gap-3 px-4 pb-4 pt-3">
        <button type="button" onClick={() => onAnswer("No")} className="flex h-[60px] flex-1 items-center justify-center gap-2.5 rounded-[16px] border border-[#eceef3] bg-white font-ui text-[16px] font-bold text-ink shadow-card active:scale-[0.99]"><span className="grid size-6 place-items-center rounded-full bg-[#fdecea] text-bad"><X size={15} strokeWidth={3} /></span>No</button>
        <button type="button" onClick={() => setYes(true)} className="flex h-[60px] flex-1 items-center justify-center gap-2.5 rounded-[16px] border border-[#eceef3] bg-white font-ui text-[16px] font-bold text-ink shadow-card active:scale-[0.99]"><span className="grid size-6 place-items-center rounded-full bg-[#e7f8ef] text-good"><Check size={15} strokeWidth={3} /></span>Yes</button>
      </div>
    </Bottom>
  );
}
