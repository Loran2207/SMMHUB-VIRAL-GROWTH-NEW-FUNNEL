import { useState } from "react";
import { Check } from "lucide-react";
import type { Question } from "@/funnel/flow/types";
import { cn } from "@/lib/cn";
import { Bottom, CardList, OptionCard, PrimaryButton } from "@/funnel/components/ui";

const DOMAINS = ["gmail.com", "outlook.com", "hotmail.com", "yahoo.com", "aol.com", "icloud.com"];

export function EmailInput({ onAnswer }: { onAnswer: (v: string) => void }) {
  const [v, setV] = useState("");
  const at = v.indexOf("@");
  const local = at >= 0 ? v.slice(0, at) : v;
  const endsInDomain = DOMAINS.some((d) => v.endsWith("@" + d));
  const showChips = local.trim().length > 0 && !endsInDomain;
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
  const pick = (d: string) => setV((at >= 0 ? v.slice(0, at) : v) + "@" + d);
  return (
    <Bottom>
      <div className="px-4 pt-3">
        <input value={v} type="email" inputMode="email" autoComplete="off" onChange={(e) => setV(e.target.value)} placeholder="you@email.com" className="w-full rounded-[16px] border border-[#ececf1] bg-white px-[18px] py-4 font-ui text-[15px] text-ink shadow-card outline-none transition-colors placeholder:text-ink-faint focus:border-accent" />
        {showChips && (
          <div className="mt-2.5 flex flex-wrap">
            {DOMAINS.map((d) => (
              <button key={d} type="button" onClick={() => pick(d)} className="mb-2 mr-2 rounded-full border border-[#ececf1] bg-white px-3.5 py-1.5 font-ui text-[13px] font-medium text-ink-soft shadow-card active:scale-95">@{d}</button>
            ))}
          </div>
        )}
      </div>
      <div className="px-4 pb-4 pt-3"><PrimaryButton disabled={!valid} onClick={() => onAnswer(v)}>Continue</PrimaryButton></div>
    </Bottom>
  );
}

export function OptIn({ q, onAnswer }: { q: Extract<Question, { kind: "optin" }>; onAnswer: (v: string) => void }) {
  return (
    <Bottom>
      <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
        <PrimaryButton onClick={() => onAnswer(q.yes)}>{q.yes}</PrimaryButton>
        <button type="button" onClick={() => onAnswer(q.no)} className="h-[52px] w-full rounded-[16px] border border-[#ececf1] bg-white font-ui text-[14px] font-bold text-ink-soft shadow-card active:scale-[0.99]">{q.no}</button>
      </div>
    </Bottom>
  );
}

export function MultiSelect({ q, onAnswer }: { q: Extract<Question, { kind: "multi" }>; onAnswer: (v: string) => void }) {
  const [sel, setSel] = useState<string[]>([]);
  const toggle = (l: string) => setSel((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]));
  return (
    <Bottom>
      <CardList>
        {q.options.map((o) => <OptionCard key={o.label} label={o.label} selected={sel.includes(o.label)} onClick={() => toggle(o.label)} />)}
      </CardList>
      <div className="px-4 pb-4 pt-2"><PrimaryButton disabled={!sel.length} onClick={() => onAnswer(sel.join(", "))}>{q.cta ?? "Continue"}</PrimaryButton></div>
    </Bottom>
  );
}

// Real brand logos (public/img). Source SVGs use preserveAspectRatio="none" with non-square
// viewBoxes, so each img keeps a uniform 24x24 slot but is letterboxed via centered padding
// to its true ratio (YouTube 16:11.25, TikTok 14.12:16) instead of being stretched square.
const ICONS = {
  instagram: <img src="/img/platform-instagram.svg" alt="" className="size-6 shrink-0 select-none" draggable={false} />,
  youtube: <img src="/img/platform-youtube.svg" alt="" className="box-border size-6 shrink-0 select-none py-[3.5px]" draggable={false} />,
  tiktok: <img src="/img/platform-tiktok.svg" alt="" className="box-border size-6 shrink-0 select-none px-[1.5px]" draggable={false} />,
};

function CheckBox({ on }: { on: boolean }) {
  return (
    <span className={cn("grid size-[22px] shrink-0 place-items-center rounded-[7px] border-[1.5px] transition-colors", on ? "border-accent bg-accent text-white" : "border-[#d6d9e3] bg-[#f1f1f4]")}>
      {on && <Check size={13} strokeWidth={3.5} />}
    </span>
  );
}

export function PlatformsSelect({ q, onAnswer }: { q: Extract<Question, { kind: "platforms" }>; onAnswer: (v: string) => void }) {
  const [sel, setSel] = useState<string[]>([]);
  const [other, setOther] = useState("");
  const toggle = (l: string) => setSel((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]));
  const otherOn = other.trim().length > 0;
  const canNext = sel.length > 0 || otherOn;
  const submit = () => {
    const parts = [...sel];
    if (otherOn) parts.push(other.trim());
    onAnswer(parts.join(", "));
  };
  return (
    <Bottom>
      <div className="px-4 pt-3">
        {q.options.map((o) => (
          <button key={o.label} type="button" onClick={() => toggle(o.label)} className="mb-3 flex w-full items-center rounded-[16px] border border-[#eceef3] bg-white px-[18px] py-[16px] text-left shadow-card transition-all active:scale-[0.99]">
            <span className="shrink-0">{ICONS[o.icon]}</span>
            <span className="ml-3 flex-1 font-ui text-[15px] font-semibold text-ink">{o.label}</span>
            <CheckBox on={sel.includes(o.label)} />
          </button>
        ))}
        {q.other && (
          <div className="mb-3 flex w-full items-center rounded-[16px] border border-[#eceef3] bg-white px-[18px] py-[16px] shadow-card">
            <input value={other} onChange={(e) => setOther(e.target.value)} placeholder="Other" className="min-w-0 flex-1 bg-transparent font-ui text-[15px] font-semibold text-ink outline-none placeholder:font-semibold placeholder:text-ink" />
            <CheckBox on={otherOn} />
          </div>
        )}
      </div>
      <div className="px-4 pb-4 pt-1"><PrimaryButton disabled={!canNext} onClick={submit}>{q.cta ?? "Next"}</PrimaryButton></div>
    </Bottom>
  );
}
