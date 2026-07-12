import { useState } from "react";
import type { Question } from "@/funnel/flow/types";
import { Sheet, PrimaryButton } from "@/funnel/components/ui";
import { SingleSelect, NicheList } from "@/funnel/components/SelectInputs";
import { NicheGen } from "@/funnel/components/NicheGen";
import { Gender, AgeSelect, LanguageSelect, LocationYesNo } from "@/funnel/components/AudienceInputs";
import { EmailInput, OptIn, MultiSelect } from "@/funnel/components/ContactInputs";

export function QuestionSheet({ q, onAnswer }: { q: Question; onAnswer: (v: string) => void }) {
  switch (q.kind) {
    case "continue":
      return <Sheet><div className="p-4"><PrimaryButton onClick={() => onAnswer(q.label)}>{q.label}</PrimaryButton></div></Sheet>;
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

function YesNo({ onAnswer }: { onAnswer: (v: string) => void }) {
  return (
    <Sheet>
      <div className="flex gap-3 p-4">
        <button type="button" onClick={() => onAnswer("Yes")} className="flex h-[56px] flex-1 items-center justify-center gap-2 rounded-[16px] border-2 border-line bg-surface font-ui text-[16px] font-bold text-ink active:scale-[0.99]"><span className="text-good">&#10003;</span> Yes</button>
        <button type="button" onClick={() => onAnswer("No")} className="flex h-[56px] flex-1 items-center justify-center gap-2 rounded-[16px] border-2 border-line bg-surface font-ui text-[16px] font-bold text-ink active:scale-[0.99]"><span className="text-bad">&#10007;</span> No</button>
      </div>
    </Sheet>
  );
}

function TextInput({ q, onAnswer }: { q: Extract<Question, { kind: "text" }>; onAnswer: (v: string) => void }) {
  const [v, setV] = useState("");
  return (
    <Sheet>
      <div className="p-4"><textarea value={v} onChange={(e) => setV(e.target.value)} rows={3} placeholder={q.placeholder} className="min-h-[92px] w-full resize-none rounded-[12px] border-2 border-line bg-surface p-3 font-ui text-[15px] leading-relaxed text-ink outline-none placeholder:text-ink-faint" /></div>
      <div className="px-4 pb-4"><PrimaryButton disabled={!v.trim()} onClick={() => onAnswer(v.trim())}>{q.cta ?? "Next"}</PrimaryButton></div>
    </Sheet>
  );
}
