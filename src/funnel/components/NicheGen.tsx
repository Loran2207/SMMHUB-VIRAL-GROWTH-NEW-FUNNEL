import { useState } from "react";
import { RefreshCw, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { Bottom, CardList, PrimaryButton } from "@/funnel/components/ui";

const NICHES = [
  { title: "AI-Powered Marketing Launches", desc: "Teach freelancers and small business owners how to use AI tools to plan and launch their first marketing campaigns" },
  { title: "Gym Lovers Personal Branding", desc: "Help gym enthusiasts and trainers build a personal brand and attract clients using simple, practical marketing strategies" },
  { title: "Growth Mindset for Marketers", desc: "Create content on personal growth, habits, and confidence tailored specifically to marketers and solo freelancers" },
];

export function NicheGen({ onAnswer }: { onAnswer: (v: string) => void }) {
  const [sel, setSel] = useState<number | null>(null);
  return (
    <Bottom>
      <CardList>
        {NICHES.map((n, i) => (
          <button key={n.title} type="button" onClick={() => setSel(i)} className={cn("flex w-full items-start gap-3 rounded-[16px] bg-white px-[18px] py-[16px] text-left transition-all", sel === i ? "border-2 border-accent shadow-card-sel" : "border border-[#eceef3] shadow-card")}>
            <div className="flex-1">
              <div className={cn("font-ui text-[15px] font-bold", sel === i ? "text-accent" : "text-ink")}>{n.title}</div>
              <p className="mt-1 font-ui text-[12.5px] leading-snug text-ink-soft">{n.desc}</p>
            </div>
            <span className={cn("mt-0.5 grid size-[22px] shrink-0 place-items-center rounded-[7px] border-[1.5px]", sel === i ? "border-accent bg-accent text-white" : "border-[#d6d9e3]")}>{sel === i && <Check size={13} strokeWidth={3.5} />}</span>
          </button>
        ))}
      </CardList>
      <div className="flex items-stretch gap-3 px-4 pb-4 pt-2">
        <button type="button" onClick={() => setSel(null)} aria-label="Regenerate" className="grid size-[56px] shrink-0 place-items-center rounded-[16px] border border-[#ececf1] bg-white text-ink shadow-card active:scale-95"><RefreshCw size={20} /></button>
        <div className="flex-1"><PrimaryButton disabled={sel === null} onClick={() => sel !== null && onAnswer(NICHES[sel].title)}>Confirm</PrimaryButton></div>
      </div>
    </Bottom>
  );
}
