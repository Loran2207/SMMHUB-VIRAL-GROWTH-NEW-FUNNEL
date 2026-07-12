import { Sheet, PrimaryButton } from "@/funnel/components/ui";
import { AudienceSummary } from "@/funnel/components/AudienceSummary";
import { GoalsSummary } from "@/funnel/components/GoalsSummary";
import type { Answers } from "@/funnel/flow/types";

export function SummaryScreen({ kind, cta, answers, onNext }: {
  kind: "dna" | "audience" | "goals"; cta: string; answers: Answers; onNext: () => void;
}) {
  if (kind === "goals") return <GoalsSummary answers={answers} cta={cta} onNext={onNext} />;
  if (kind === "audience") return <AudienceSummary answers={answers} cta={cta} onNext={onNext} />;
  const niche = answers["niche-list"] ?? answers["niche-gen"] ?? "-";
  if (kind !== "dna") {
    return <Sheet><div className="p-4"><PrimaryButton onClick={onNext}>{cta}</PrimaryButton></div></Sheet>;
  }
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 overflow-y-auto px-5 pt-7">
        <h2 className="font-ui text-[26px] font-extrabold leading-[1.15] text-ink">
          Your <span className="text-accent">Creator DNA</span>
        </h2>
        <p className="mt-2 font-ui text-[13.5px] leading-relaxed text-ink-soft">
          This will help us customize content specifically for you.
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <Row title="You are" value={answers.describe ?? "-"} />
          <Row title="Niche" value={niche} />
          <Row title="Topics & Trends" value={answers.topics ?? "No"} />
        </div>
      </div>
      <div className="p-4"><PrimaryButton onClick={onNext}>{cta}</PrimaryButton></div>
    </div>
  );
}

function Row({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-[14px] border border-line bg-surface p-4">
      <div className="font-ui text-[13px] font-bold text-ink">{title}</div>
      <div className="mt-1 font-ui text-[14px] leading-snug text-ink-soft">{value}</div>
    </div>
  );
}
