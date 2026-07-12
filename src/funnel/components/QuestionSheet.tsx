import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import type { Question } from "@/funnel/flow/types";
import { Bottom, PrimaryButton } from "@/funnel/components/ui";
import { SingleSelect, NicheList } from "@/funnel/components/SelectInputs";
import { NicheGen } from "@/funnel/components/NicheGen";
import { Gender, AgeSelect, LanguageSelect, LocationYesNo } from "@/funnel/components/AudienceInputs";
import { EmailInput, OptIn, MultiSelect } from "@/funnel/components/ContactInputs";

export function QuestionSheet({ q, onAnswer }: { q: Question; onAnswer: (v: string) => void }) {
  switch (q.kind) {
    case "continue":
      return <Bottom><div className="px-4 pb-4 pt-3"><PrimaryButton onClick={() => onAnswer(q.label)}>{q.label}</PrimaryButton></div></Bottom>;
    case "yesno":
      return <YesNo onAnswer={onAnswer} />;
    case "single":
      return <SingleSelect q={q} onAnswer={onAnswer} />;
    case "nicheList":
      return <NicheList q={q} onAnswer={onAnswer} />;
    case "text":
      return <TextInput q={q} onAnswer={onAnswer} />;
    case "nicheGen":
      return <NicheGen onAnswer={onAnswer} />;
    case "gender":
      return <Gender q={q} onAnswer={onAnswer} />;
    case "age":
      return <AgeSelect onAnswer={onAnswer} />;
    case "language":
      return <LanguageSelect onAnswer={onAnswer} />;
    case "locYesNo":
      return <LocationYesNo q={q} onAnswer={onAnswer} />;
    case "email":
      return <EmailInput onAnswer={onAnswer} />;
    case "optin":
      return <OptIn q={q} onAnswer={onAnswer} />;
    case "multi":
      return <MultiSelect q={q} onAnswer={onAnswer} />;
    default:
      return null;
  }
}

export function YesNo({ onAnswer }: { onAnswer: (v: string) => void }) {
  return (
    <Bottom>
      <div className="flex gap-3 px-4 pb-4 pt-3">
        <YNBtn yes onClick={() => onAnswer("Yes")} />
        <YNBtn onClick={() => onAnswer("No")} />
      </div>
    </Bottom>
  );
}

function YNBtn({ yes, onClick }: { yes?: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex h-[60px] flex-1 items-center justify-center gap-2.5 rounded-[16px] border border-[#ececf1] bg-white shadow-card transition-all active:scale-[0.99]">
      <span className={`grid size-6 place-items-center rounded-full ${yes ? "bg-[#e7f8ef] text-good" : "bg-[#fdecea] text-bad"}`}>{yes ? <Check size={15} strokeWidth={3} /> : <X size={15} strokeWidth={3} />}</span>
      <span className="font-ui text-[16px] font-bold text-ink">{yes ? "Yes" : "No"}</span>
    </button>
  );
}

function TextInput({ q, onAnswer }: { q: Extract<Question, { kind: "text" }>; onAnswer: (v: string) => void }) {
  const [v, setV] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);
  const len = q.placeholder?.length ?? 0;
  const rows = Math.min(7, Math.max(2, Math.ceil(len / 30) + 1));
  useEffect(() => {
    const el = ref.current;
    if (el) el.dataset.min = String(el.offsetHeight);
  }, []);
  const grow = () => {
    const el = ref.current;
    if (!el) return;
    const min = Number(el.dataset.min ?? 0);
    el.style.height = "auto";
    el.style.height = `${Math.max(min, el.scrollHeight)}px`;
  };
  return (
    <Bottom>
      <div className="px-4 pt-3">
        <textarea
          ref={ref}
          value={v}
          rows={rows}
          onChange={(e) => { setV(e.target.value); grow(); }}
          placeholder={q.placeholder}
          className="max-h-[44vh] w-full resize-none overflow-y-auto rounded-[16px] border border-[#ececf1] bg-white p-4 font-ui text-[15px] leading-relaxed text-ink shadow-card outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
        />
      </div>
      <div className="px-4 pb-4 pt-3"><PrimaryButton disabled={!v.trim()} onClick={() => onAnswer(v.trim())}>{q.cta ?? "Next"}</PrimaryButton></div>
    </Bottom>
  );
}
