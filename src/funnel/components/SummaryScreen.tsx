import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Loader2, Search, Star, Heart, Sparkles, User, Instagram, Users, Globe, Zap, Frown, Meh, Target, Send, Eye, DollarSign, TrendingUp } from "lucide-react";
import { SummaryShell, TopCard, InfoRow, FeaturedIcon } from "@/funnel/components/SummaryShell";
import type { Answers } from "@/funnel/flow/types";

const NOTE = "Don't worry - you can update your profile anytime in the profile settings.";

export function SummaryScreen({ kind, cta, answers, onNext, onBack }: {
  kind: "dna" | "audience" | "goals"; cta: string; answers: Answers; onNext: () => void; onBack?: () => void;
}) {
  if (kind === "audience") return <AudienceSummary answers={answers} cta={cta} onNext={onNext} onBack={onBack} />;
  if (kind === "goals") return <GoalsSummary answers={answers} cta={cta} onNext={onNext} onBack={onBack} />;
  return <DnaSummary answers={answers} cta={cta} onNext={onNext} onBack={onBack} />;
}

type P = { answers: Answers; cta: string; onNext: () => void; onBack?: () => void };

function DnaSummary({ answers, cta, onNext, onBack }: P) {
  const niche = answers["niche-list"] ?? answers["niche-gen"] ?? "Your niche";
  return (
    <SummaryShell title="Creator DNA" cta={cta} onNext={onNext} onBack={onBack} note={NOTE}
      subtitle={<>This will help us customize your <b className="font-semibold text-ink">content strategy</b> specifically for you.</>}>
      <TopCard cols={[{ icon: <User size={22} />, label: "You are", value: answers.describe ?? "-" }, { icon: <Instagram size={20} />, label: "Platforms", value: "Instagram" }]} />
      <InfoRow icon={<Search size={16} />} label="Your niche" value={niche} />
      <InfoRow icon={<Star size={16} />} label="Unique feature" value={answers.skills ?? "You turn complex ideas into simple, relatable content"} />
      <InfoRow icon={<Heart size={16} />} label="Topics & Trends" value={answers.topics ?? "Practical tips and fresh takes in your niche"} />
      <InfoRow icon={<Sparkles size={16} />} label="Content style" value="Authentic, punchy and made for short-form" />
    </SummaryShell>
  );
}

const FEARS = ["Posting and getting no views in front of people they know.", "Falling behind competitors who move faster."];
const FRUST = ["Inconsistent results despite steady effort.", "No time to plan content around a busy schedule."];

function AudienceSummary({ answers, cta, onNext, onBack }: P) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <SummaryShell title="Audience Profile" cta={cta} onNext={onNext} onBack={onBack} note={NOTE}
      subtitle={<>This will help us tailor your <b className="font-semibold text-ink">content strategy</b> to the right audience.</>}>
      <TopCard cols={[{ icon: <Users size={20} />, label: "Gender", value: answers.gender ?? "-" }, { icon: <User size={20} />, label: "Age", value: answers.age ?? "-" }, { icon: <Globe size={20} />, label: "Language", value: answers.language ?? "-" }]} />
      {loading ? (
        <div className="flex flex-col items-center gap-3 py-16"><Loader2 className="size-7 animate-spin text-accent" /><p className="font-ui text-[14px] text-ink-soft">Please wait a few seconds 🙏</p></div>
      ) : (
        <>
          <Section icon={<Zap size={16} />} title="Pain Points" items={[answers.pain ?? "They struggle to stay consistent and plan content.", "They fear wasting budget with no clear return."]} />
          <Section icon={<Frown size={16} />} title="Fears" items={FEARS} />
          <Section icon={<Meh size={16} />} title="Frustrations" items={FRUST} />
        </>
      )}
    </SummaryShell>
  );
}

function Section({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  return (
    <div className="flex gap-4 px-4 pt-6">
      <FeaturedIcon>{icon}</FeaturedIcon>
      <div className="flex flex-1 flex-col gap-1.5">
        <p className="font-ui text-[14px] font-semibold text-ink">{title}</p>
        {items.map((t, i) => <p key={i} className="font-ui text-[12px] font-medium leading-[1.5] text-ink-soft">{t}</p>)}
      </div>
    </div>
  );
}

function GoalsSummary({ answers, cta, onNext, onBack }: P) {
  return (
    <SummaryShell title="Strategic Goals" cta={cta} onNext={onNext} onBack={onBack} note={NOTE}
      subtitle={<>This will assist us in tailoring your <b className="font-semibold text-ink">content strategy</b> to align with your strategic goals.</>}>
      <TopCard cols={[{ icon: <Users size={20} />, label: "Followers goal", value: answers["follower-goal"] ?? "-" }, { icon: <DollarSign size={20} />, label: "Income goal", value: answers.income ?? "-" }]} />
      <InfoRow icon={<TrendingUp size={16} />} label="Followers now" value={answers["followers-now"] ?? "-"} />
      <InfoRow icon={<Eye size={16} />} label="Avg reel views" value={answers["views-now"] ?? "-"} />
      <InfoRow icon={<Target size={16} />} label="Target" value={answers.target ?? "-"} />
      <InfoRow icon={<Send size={16} />} label="Posting frequency" value={answers.frequency ?? "-"} />
      <InfoRow icon={<Zap size={16} />} label="Challenges" value={answers.challenges ?? "-"} />
    </SummaryShell>
  );
}
