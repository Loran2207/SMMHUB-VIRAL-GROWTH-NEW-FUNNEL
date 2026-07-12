import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { Sheet, PrimaryButton, Radio } from "@/funnel/components/ui";

const NICHES = [
  { title: "AI-Powered Marketing Launches", desc: "Teach freelancers and small business owners how to use AI tools to plan and launch their first marketing campaigns" },
  { title: "Gym Lovers Personal Branding", desc: "Help gym enthusiasts and trainers build a personal brand and attract clients using simple, practical marketing strategies" },
  { title: "Growth Mindset for Marketers", desc: "Create content on personal growth, habits, and confidence tailored specifically to marketers and solo freelancers" },
];

export function NicheGen({ onAnswer }: { onAnswer: (v: string) => void }) {
  const [sel, setSel] = useState<number | null>(null);
  return (
    <Sheet>
      <div className="max-h-[320px] overflow-y-auto">
        {NICHES.map((n, i) => (
          <button key={n.title} type="button" onClick={() => setSel(i)} className="flex w-full items-start gap-3 border-t border-line-soft px-4 py-4 text-left">
            <div className="flex-1">
              <div className="font-ui text-[15px] font-bold text-ink">{n.title}</div>
              <p className="mt-1 font-ui text-[12.5px] leading-snug text-ink-soft">{n.desc}</p>
            </div>
            <Radio on={sel === i} />
          </button>
        ))}
      </div>
      <div className="flex items-stretch gap-3 border-t border-line-soft p-4">
        <button type="button" onClick={() => setSel(null)} aria-label="Regenerate" className="grid size-[56px] shrink-0 place-items-center rounded-[16px] border border-line bg-surface text-ink active:scale-95">
          <RefreshCw size={20} />
        </button>
        <div className="flex-1">
          <PrimaryButton disabled={sel === null} onClick={() => sel !== null && onAnswer(NICHES[sel].title)}>Confirm</PrimaryButton>
        </div>
      </div>
    </Sheet>
  );
}
