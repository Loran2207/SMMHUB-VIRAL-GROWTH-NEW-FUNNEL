import { Users, Target, Eye, DollarSign, Send, Zap } from "lucide-react";
import type { ReactNode } from "react";
import { PrimaryButton } from "@/funnel/components/ui";
import type { Answers } from "@/funnel/flow/types";

export function GoalsSummary({ answers, cta, onNext }: { answers: Answers; cta: string; onNext: () => void }) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 overflow-y-auto px-5 pt-7">
        <h2 className="font-ui text-[26px] font-extrabold leading-[1.15] text-ink">Your <span className="text-accent">Strategic Goals</span></h2>
        <p className="mt-2 font-ui text-[13.5px] leading-relaxed text-ink-soft">This will assist us in tailoring your content strategy to align with your strategic goals.</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Stat icon={<Users size={16} />} label="Followers now" value={answers["followers-now"] ?? "-"} />
          <Stat icon={<Target size={16} />} label="Followers goal" value={answers["follower-goal"] ?? "-"} />
          <Stat icon={<Eye size={16} />} label="Avg reel views" value={answers["views-now"] ?? "-"} />
          <Stat icon={<DollarSign size={16} />} label="Income goal" value={answers.income ?? "-"} />
        </div>
        <div className="mt-5 flex flex-col gap-3 pb-4">
          <Row icon={<Target size={18} />} title="Target" value={answers.target ?? "-"} />
          <Row icon={<Send size={18} />} title="Posting frequency" value={answers.frequency ?? "-"} />
          <Row icon={<Zap size={18} />} title="Challenges" value={answers.challenges ?? "-"} />
        </div>
      </div>
      <div className="p-4"><PrimaryButton onClick={onNext}>{cta}</PrimaryButton></div>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-[14px] border border-line bg-surface px-4 py-3">
      <div className="flex items-center gap-1.5 text-accent">{icon}<span className="font-ui text-[11.5px] font-semibold text-ink-soft">{label}</span></div>
      <div className="mt-1 font-ui text-[15px] font-bold text-ink">{value}</div>
    </div>
  );
}

function Row({ icon, title, value }: { icon: ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-[14px] border border-line bg-surface p-4">
      <span className="mt-0.5 text-accent">{icon}</span>
      <div className="flex-1">
        <div className="font-ui text-[13px] font-bold text-ink">{title}</div>
        <div className="mt-0.5 font-ui text-[13.5px] leading-snug text-ink-soft">{value}</div>
      </div>
    </div>
  );
}
