import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Loader2, Search, Star, Heart, Sparkles, User, Instagram, Users, Zap, Frown, Target, Send, Bot, Ban, Banknote } from "lucide-react";
import { SummaryShell, TopCard, InfoRow, FeaturedIcon } from "@/funnel/components/SummaryShell";
import { DESCRIBE_OPTIONS, uniqueFeature, yesNoAnswer } from "@/funnel/flow/step1";
import type { Answers } from "@/funnel/flow/types";

const DESCRIBE_EMOJI = new Map(DESCRIBE_OPTIONS.map((o) => [o.label, o.emoji]));
/** Custom (typed-in) answers have no option to match, so fall back to the default. */
const describeEmoji = (v?: string) => (v && DESCRIBE_EMOJI.get(v)) || "💼";

const NOTE = {
  dna: "Don't worry - you can update your Creator DNA profile anytime in the profile settings.",
  audience: "Don't worry - you can update your audience profile anytime in the profile settings.",
  goals: "Don't worry - you can update your goals anytime in the profile settings.",
};

function VenusMars({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="13" r="4" />
      <line x1="11" y1="17" x2="11" y2="22" />
      <line x1="8.5" y1="19.5" x2="13.5" y2="19.5" />
      <line x1="13.9" y1="10.1" x2="19" y2="5" />
      <polyline points="15,5 19,5 19,9" />
    </svg>
  );
}

export function SummaryScreen({ kind, cta, answers, onNext }: {
  kind: "dna" | "audience" | "goals"; cta: string; answers: Answers; onNext: () => void;
}) {
  if (kind === "audience") return <AudienceSummary answers={answers} cta={cta} onNext={onNext} />;
  if (kind === "goals") return <GoalsSummary answers={answers} cta={cta} onNext={onNext} />;
  return <DnaSummary answers={answers} cta={cta} onNext={onNext} />;
}

type P = { answers: Answers; cta: string; onNext: () => void };

function DnaSummary({ answers, cta, onNext }: P) {
  const niche = answers["niche-list"] ?? answers["niche-gen"] ?? "Your niche";
  // platforms is a multi-select and already arrives comma-joined ("Instagram, YouTube").
  const platforms = answers.platforms || "Instagram";
  return (
    <SummaryShell title="Creator DNA" cta={cta} onNext={onNext} note={NOTE.dna}
      subtitle={<>This will help us customize your <b className="font-semibold text-ink">content strategy</b> specifically for Creator DNA.</>}>
      <TopCard cols={[
        { icon: <User size={22} />, label: "You are", value: answers.describe ?? "-", emoji: describeEmoji(answers.describe) },
        { icon: <Instagram size={20} />, label: "Platforms", value: platforms, emoji: "📷" },
      ]} />
      <InfoRow icon={<Search size={16} />} label="Your niche" value={niche} />
      <InfoRow icon={<Star size={16} />} label="Unique feature" value={uniqueFeature(answers) ?? "-"} />
      <InfoRow icon={<Heart size={16} />} label="Topics & Trends" value={yesNoAnswer(answers, "topics-include") ?? "-"} />
      <InfoRow icon={<Ban size={16} />} label="Avoid Topics" value={yesNoAnswer(answers, "topics-avoid") ?? "-"} />
    </SummaryShell>
  );
}

const FEARS = ["Posting and getting no views in front of people they know.", "Falling behind competitors who move faster."];
const FRUST = ["Inconsistent results despite steady effort.", "No time to plan content around a busy schedule."];
const DESIRES = ["They want steady, predictable growth without burning out.", "They want their content to finally get seen by the right people."];

function AudienceSummary({ answers, cta, onNext }: P) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <SummaryShell title="Audience Profile" cta={cta} onNext={onNext} note={NOTE.audience}
      subtitle={<>This will help us tailor your <b className="font-semibold text-ink">content strategy</b> to the right audience.</>}>
      <TopCard cols={[{ icon: <VenusMars size={20} />, label: "Gender", value: answers.gender ?? "-" }, { icon: <Users size={20} />, label: "Age", value: answers.age ?? "-" }]} />
      {loading ? (
        <div className="flex flex-col items-center gap-3 py-16"><Loader2 className="size-7 animate-spin text-accent" /><p className="font-ui text-[14px] text-ink-soft">Please wait a few seconds 🙏</p></div>
      ) : (
        <>
          <Section icon={<Zap size={16} />} title="Pain Points" art="/img/audience-illustration.png" items={[answers.pain ?? "They struggle to stay consistent and plan content.", "They fear wasting budget with no clear return."]} />
          <Section icon={<Bot size={16} />} title="Fears" items={FEARS} />
          <Section icon={<Frown size={16} />} title="Frustrations" items={FRUST} />
          <Section icon={<Sparkles size={16} />} title="Desires" items={DESIRES} />
        </>
      )}
    </SummaryShell>
  );
}

function Section({ icon, title, items, art }: { icon: ReactNode; title: string; items: string[]; art?: string }) {
  return (
    <div className="flex gap-4 px-4 pt-6">
      <FeaturedIcon>{icon}</FeaturedIcon>
      <div className="flex flex-1 flex-col gap-1.5">
        <p className="font-ui text-[14px] font-semibold text-ink">{title}</p>
        {items.map((t, i) => <p key={i} className="font-ui text-[12px] font-medium leading-[1.5] text-ink-soft">{t}</p>)}
      </div>
      {/* Stubbed-toe line art, cropped from the Figma original at 4x. */}
      {art && <img src={art} alt="" aria-hidden className="mt-0.5 h-[107px] w-auto shrink-0 select-none" />}
    </div>
  );
}

function GoalsSummary({ answers, cta, onNext }: P) {
  return (
    <SummaryShell title="Strategic Goals" cta={cta} onNext={onNext} note={NOTE.goals}
      subtitle={<>This will assist us in tailoring your <b className="font-semibold text-ink">content strategy</b> to align with your strategic goals.</>}>
      <TopCard cols={[{ icon: <Users size={20} />, label: "Followers Goal", value: answers["follower-goal"] ?? "-" }, { icon: <Banknote size={20} />, label: "Income Goal", value: answers.income ?? "-" }]} />
      <InfoRow icon={<Target size={16} />} label="Target" value={answers.target ?? "-"} />
      <InfoRow icon={<Send size={16} />} label="Posting frequency" value={answers.frequency ?? "-"} />
    </SummaryShell>
  );
}
