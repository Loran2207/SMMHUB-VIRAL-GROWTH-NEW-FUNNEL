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

const IgIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="ci-ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
        <stop stopColor="#feda75" />
        <stop offset="0.25" stopColor="#fa7e1e" />
        <stop offset="0.5" stopColor="#d62976" />
        <stop offset="0.75" stopColor="#962fbf" />
        <stop offset="1" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <rect x="1" y="1" width="22" height="22" rx="6.5" fill="url(#ci-ig-grad)" />
    <circle cx="12" cy="12" r="4.8" fill="none" stroke="#fff" strokeWidth="2" />
    <circle cx="17.4" cy="6.6" r="1.35" fill="#fff" />
  </svg>
);

const YtIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="1" y="4.5" width="22" height="15" rx="4.6" fill="#FF0000" />
    <path d="M10 8.4 L15.6 12 L10 15.6 Z" fill="#fff" />
  </svg>
);

const TT_PATH = "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z";
const TtIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <path d={TT_PATH} fill="#25F4EE" transform="translate(-0.9,-0.7)" />
    <path d={TT_PATH} fill="#FE2C55" transform="translate(0.9,0.7)" />
    <path d={TT_PATH} fill="#010101" />
  </svg>
);

const ICONS: Record<"instagram" | "youtube" | "tiktok", typeof IgIcon> = { instagram: IgIcon, youtube: YtIcon, tiktok: TtIcon };

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
