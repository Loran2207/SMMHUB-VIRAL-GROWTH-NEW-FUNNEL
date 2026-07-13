import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/cn";
import { Bottom, CardList, PrimaryButton } from "@/funnel/components/ui";

const NICHES = [
  { title: "AI-Powered Marketing Launches", desc: "Teach freelancers and small business owners how to use AI tools to plan and launch their first marketing campaigns" },
  { title: "Gym Lovers Personal Branding", desc: "Help gym enthusiasts and trainers build a personal brand and attract clients using simple, practical marketing strategies" },
  { title: "Growth Mindset For Marketers", desc: "Create content on personal growth, habits, and confidence tailored specifically to marketers and solo freelancers" },
];

/** niche-gen is single-select: tap one card to select it, then Confirm. No checkbox - that would read as multi-select. */
export function NicheGen({ onAnswer }: { onAnswer: (v: string) => void }) {
  const [sel, setSel] = useState<number | null>(null);
  return (
    <Bottom>
      <CardList>
        {NICHES.map((n, i) => (
          <button key={n.title} type="button" aria-pressed={sel === i} onClick={() => setSel(i)} className={cn("flex w-full flex-col items-start rounded-[16px] bg-white px-[18px] py-[16px] text-left transition-all duration-150", sel === i ? "border-2 border-accent shadow-card-sel" : "border border-[#eceef3] shadow-card hover:border-[#d9dcea]")}>
            <span className={cn("font-ui text-[15px] font-bold", sel === i ? "text-accent" : "text-ink")}>{n.title}</span>
            <span className="mt-1 font-ui text-[12.5px] leading-snug text-ink-soft">{n.desc}</span>
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
