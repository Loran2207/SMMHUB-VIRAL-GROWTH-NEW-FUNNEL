import { useState } from "react";
import { ChevronDown, Check, X } from "lucide-react";
import type { Question } from "@/funnel/flow/types";
import { Bottom, CardList, OptionCard, PrimaryButton } from "@/funnel/components/ui";

export function Gender({ q, onAnswer }: { q: Extract<Question, { kind: "gender" }>; onAnswer: (v: string) => void }) {
  return (
    <Bottom>
      <CardList>
        {q.options.map((o) => <OptionCard key={o.label} label={o.label} selected={false} control="none" onClick={() => onAnswer(o.label)} />)}
      </CardList>
      <div className="px-4 pb-4 pt-2">
        <button type="button" onClick={() => onAnswer("Skip")} className="h-[52px] w-full rounded-[16px] border border-[#ececf1] bg-white font-ui text-[15px] font-bold text-ink-soft shadow-card active:scale-[0.99]">Skip</button>
      </div>
    </Bottom>
  );
}

const FROM = Array.from({ length: 53 }, (_, i) => String(13 + i));
const TO = [...Array.from({ length: 52 }, (_, i) => String(14 + i)), "65+"];

export function AgeSelect({ onAnswer }: { onAnswer: (v: string) => void }) {
  const [from, setFrom] = useState("18");
  const [to, setTo] = useState("65+");
  return (
    <Bottom>
      <div className="flex items-end gap-3 px-4 pt-3">
        <Dropdown label="From" value={from} options={FROM} onChange={setFrom} />
        <span className="pb-4 font-ui text-ink-faint">-</span>
        <Dropdown label="To" value={to} options={TO} onChange={setTo} />
      </div>
      <div className="px-4 pb-4 pt-3"><PrimaryButton onClick={() => onAnswer(`${from}-${to}`)}>Next</PrimaryButton></div>
    </Bottom>
  );
}

function Dropdown({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <label className="flex-1">
      <span className="mb-1.5 block font-ui text-[12px] font-semibold text-ink-soft">{label}</span>
      <div className="relative">
        <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full appearance-none rounded-[14px] border border-[#ececf1] bg-white px-4 py-3.5 font-ui text-[15px] font-bold text-ink shadow-card outline-none">
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
      </div>
    </label>
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
        <div className="px-4 pt-3"><input value={text} autoFocus onChange={(e) => setText(e.target.value)} placeholder={q.placeholder} className="w-full rounded-[16px] border border-[#ececf1] bg-white px-[18px] py-4 font-ui text-[15px] text-ink shadow-card outline-none transition-colors placeholder:text-ink-faint focus:border-accent" /></div>
        <div className="px-4 pb-4 pt-3"><PrimaryButton disabled={!text.trim()} onClick={() => onAnswer(text.trim())}>Next</PrimaryButton></div>
      </Bottom>
    );
  }
  return (
    <Bottom>
      <div className="flex gap-3 px-4 pb-4 pt-3">
        <button type="button" onClick={() => onAnswer("No")} className="flex h-[60px] flex-1 items-center justify-center gap-2.5 rounded-[16px] border border-[#ececf1] bg-white font-ui text-[16px] font-bold text-ink shadow-card active:scale-[0.99]"><span className="grid size-6 place-items-center rounded-full bg-[#fdecea] text-bad"><X size={15} strokeWidth={3} /></span>No</button>
        <button type="button" onClick={() => setYes(true)} className="flex h-[60px] flex-1 items-center justify-center gap-2.5 rounded-[16px] border border-[#ececf1] bg-white font-ui text-[16px] font-bold text-ink shadow-card active:scale-[0.99]"><span className="grid size-6 place-items-center rounded-full bg-[#e7f8ef] text-good"><Check size={15} strokeWidth={3} /></span>Yes</button>
      </div>
    </Bottom>
  );
}
