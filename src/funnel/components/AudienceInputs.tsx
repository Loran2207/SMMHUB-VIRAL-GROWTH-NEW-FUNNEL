import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import type { Question } from "@/funnel/flow/types";
import { cn } from "@/lib/cn";
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

const AGE_MIN = 18;
const AGE_TOP = "65+";
const rank = (v: string) => (v === AGE_TOP ? 65 : Number(v));
const range = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, i) => String(a + i));
const FROM_OPTIONS = range(AGE_MIN, 65);
const TO_OPTIONS = [...range(AGE_MIN + 1, 64), AGE_TOP];

/**
 * Native select in a card shell. The selected value is painted by the browser and is invisible to a
 * static DOM capture, so it is mirrored into a real <span>; the select itself is laid transparently
 * over the whole card and keeps the interaction. The chevron is a real inline SVG, never a pseudo-element.
 */
function AgeDropdown({ label, value, options, onChange }: {
  label: string; value: string; options: string[]; onChange: (v: string) => void;
}) {
  return (
    <div className="flex-1">
      <span className="mb-2 block font-ui text-[13px] font-semibold text-ink-soft">{label}</span>
      <div className="relative h-[56px] w-full rounded-[16px] border border-[#eceef3] bg-white shadow-card transition-colors focus-within:border-accent">
        <span className="pointer-events-none absolute inset-y-0 left-[18px] flex items-center font-ui text-[16px] font-bold text-ink">{value}</span>
        <span aria-hidden className="pointer-events-none absolute inset-y-0 right-[16px] grid place-items-center text-ink-soft">
          <ChevronDown size={18} strokeWidth={2.5} />
        </span>
        <select
          value={value}
          aria-label={`Age ${label.toLowerCase()}`}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 size-full cursor-pointer appearance-none rounded-[16px] border-0 bg-transparent pl-[18px] pr-[44px] font-ui text-[16px] font-bold opacity-0 outline-none"
        >
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
    </div>
  );
}

export function AgeSelect({ onAnswer }: { onAnswer: (v: string) => void }) {
  const [from, setFrom] = useState("18");
  const [to, setTo] = useState(AGE_TOP);

  const pickFrom = (v: string) => {
    setFrom(v);
    if (rank(to) < rank(v)) setTo(TO_OPTIONS.find((o) => rank(o) >= rank(v)) ?? AGE_TOP);
  };
  const pickTo = (v: string) => {
    setTo(v);
    if (rank(v) < rank(from)) setFrom(String(rank(v)));
  };

  return (
    <Bottom>
      <div className="px-4 pt-4">
        <div className="flex items-end gap-3">
          <AgeDropdown label="From" value={from} options={FROM_OPTIONS} onChange={pickFrom} />
          <AgeDropdown label="To" value={to} options={TO_OPTIONS} onChange={pickTo} />
        </div>
      </div>
      <div className="px-4 pb-4 pt-6"><PrimaryButton onClick={() => onAnswer(`${from}-${to}`)}>Next</PrimaryButton></div>
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

function ChoiceButton({ label, tone, selected, full, onClick }: {
  label: string; tone: "yes" | "no"; selected?: boolean; full?: boolean; onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex min-h-[60px] items-center gap-2.5 rounded-[16px] bg-white px-4 py-3 text-left font-ui text-[16px] font-bold text-ink transition-all active:scale-[0.99]",
        full ? "w-full" : "flex-1 justify-center",
        selected ? "border-2 border-accent shadow-card-sel" : "border border-[#eceef3] shadow-card",
      )}
    >
      <span className={cn("grid size-6 shrink-0 place-items-center rounded-full", tone === "yes" ? "bg-[#e7f8ef] text-good" : "bg-[#fdecea] text-bad")}>
        {tone === "yes" ? <Check size={15} strokeWidth={3} /> : <X size={15} strokeWidth={3} />}
      </span>
      <span className="leading-snug">{label}</span>
    </button>
  );
}

/**
 * Yes/No, then text. Only the two buttons show first - the text field slides in below once
 * "Yes" is picked (reviewer redesign). Shared by location, topics-include, topics-avoid and
 * unique-feature.
 *
 * q.example adds a "Do you have an example?" row above the buttons; picking it answers with
 * that label, which the flow branches on to post the examples reply. Custom yes/no labels are
 * long, so they stack full-width instead of sitting side by side.
 */
export function YesNoText({ q, onAnswer }: { q: Extract<Question, { kind: "yesNoText" }>; onAnswer: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const example = q.example;
  const yesLabel = q.yes ?? "Yes";
  const noLabel = q.no ?? "No";
  const stacked = !!q.yes || !!q.no;

  return (
    <Bottom>
      {example && !open && (
        <div className="px-4 pt-3">
          <OptionCard label={example} selected={false} control="none" onClick={() => onAnswer(example)} />
        </div>
      )}
      <div className={cn("flex gap-3 px-4 pt-3", stacked && "flex-col")}>
        <ChoiceButton label={noLabel} tone="no" full={stacked} onClick={() => onAnswer(noLabel)} />
        <ChoiceButton label={yesLabel} tone="yes" full={stacked} selected={open} onClick={() => setOpen(true)} />
      </div>
      {open ? (
        <div className="pz-slide-in">
          <div className="px-4 pt-3">
            <input
              value={text}
              autoFocus
              onChange={(e) => setText(e.target.value)}
              placeholder={q.placeholder}
              className="w-full rounded-[16px] border border-[#eceef3] bg-white px-[18px] py-4 font-ui text-[15px] text-ink shadow-card outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
            />
          </div>
          <div className="px-4 pb-4 pt-3"><PrimaryButton disabled={!text.trim()} onClick={() => onAnswer(text.trim())}>Next</PrimaryButton></div>
        </div>
      ) : (
        <div className="h-4" />
      )}
    </Bottom>
  );
}
