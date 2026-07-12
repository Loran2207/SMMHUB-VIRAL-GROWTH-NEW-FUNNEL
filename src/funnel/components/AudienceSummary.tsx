import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { PrimaryButton } from "@/funnel/components/ui";
import type { Answers } from "@/funnel/flow/types";

const GEN = {
  "Pain Points": ["They feel overwhelmed by too many channels and unsure where to start.", "They fear wasting budget with no clear return."],
  Fears: ["Posting and getting no views, in front of people they know.", "Falling behind competitors who move faster."],
  Frustrations: ["Inconsistent results despite steady effort.", "No time to plan content around a busy schedule."],
  Desires: ["A simple, repeatable plan that actually grows their audience.", "Confidence that every post moves them forward."],
};

export function AudienceSummary({ answers, cta, onNext }: { answers: Answers; cta: string; onNext: () => void }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 overflow-y-auto px-5 pt-7">
        <h2 className="font-ui text-[26px] font-extrabold leading-[1.15] text-ink">Your <span className="text-accent">Audience Profile</span></h2>
        <p className="mt-2 font-ui text-[13.5px] leading-relaxed text-ink-soft">This will help us tailor your content strategy to the right audience.</p>
        <div className="mt-4 flex gap-3">
          <Pill label="Gender" value={answers.gender ?? "-"} />
          <Pill label="Age" value={answers.age ?? "-"} />
        </div>
        {loading ? (
          <div className="flex flex-col items-center gap-3 py-16">
            <Loader2 className="size-7 animate-spin text-accent" />
            <p className="font-ui text-[14px] text-ink-soft">Please wait a few seconds 🙏</p>
          </div>
        ) : (
          <div className="mt-6 flex flex-col gap-5 pb-4">
            {Object.entries(GEN).map(([title, items]) => (
              <div key={title}>
                <div className="mb-2 font-ui text-[15px] font-bold text-ink">{title}</div>
                <ul className="flex flex-col gap-1.5">
                  {items.map((t, i) => <li key={i} className="font-ui text-[13.5px] leading-snug text-ink-soft">{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="p-4"><PrimaryButton onClick={onNext} disabled={loading}>{cta}</PrimaryButton></div>
    </div>
  );
}

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1 rounded-[14px] border border-line bg-surface px-4 py-3">
      <div className="font-ui text-[12px] font-semibold text-ink-soft">{label}</div>
      <div className="mt-0.5 font-ui text-[14px] font-bold text-ink">{value}</div>
    </div>
  );
}
