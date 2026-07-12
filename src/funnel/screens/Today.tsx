import type { ReactNode } from "react";
import { BookOpen, Headphones, MessageCircle, Calendar, RefreshCw, User, Star } from "lucide-react";
import { PhoneFrame } from "@/funnel/components/PhoneFrame";
import { BrowserChrome } from "@/funnel/components/BrowserChrome";
import { cn } from "@/lib/cn";

const STEPS = [
  { n: 1, title: "Step 1: Niche", time: "1 min", sub: "Define your niche & creator profile", tone: "active" as const },
  { n: 2, title: "Step 2: Target Audience", time: "2 min", sub: "Understand who your content is for", tone: "idle" as const },
  { n: 3, title: "Step 3: Goals", time: "1 min", sub: "Define clear goals for your journey", tone: "idle" as const },
  { n: 4, title: "Step 4: Growth Content Plan", time: "", sub: "Unlock your hyper-personalized plan", tone: "gold" as const },
];

export function Today({ onNext }: { onNext: () => void }) {
  return (
    <PhoneFrame>
      <BrowserChrome>
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="px-5 pt-2">
            <img src="/img/today-avatar.png" alt="" className="size-9 rounded-full object-cover" />
            <p className="mt-3 font-ui text-[12px] font-semibold text-ink-soft">Meet your <span className="font-brand font-extrabold text-ink">SMMHUB</span></p>
            <h1 className="mt-1 font-ui text-[30px] font-extrabold italic leading-[1.04] text-ink">Growth<br />Content Plan</h1>
            <p className="mt-2 font-ui text-[12px] font-medium text-ink-soft">A hyper-personalized plan engineered for viral growth</p>
            <div className="mt-4 flex gap-3">
              <Stat icon={<Calendar size={17} />} big="30" small="days of viral content ideas" />
              <Stat icon={<RefreshCw size={17} />} big="" small="fresh plan every month" />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1">
                <p className="mb-2 font-ui text-[11px] font-medium text-ink-soft">Also included</p>
                <Incl icon={<BookOpen size={15} />} label="19 pdf guides" />
                <Incl icon={<Headphones size={15} />} label="AI Chat Assistant" />
                <Incl icon={<MessageCircle size={15} />} label="100+ ready-to-use prompts" />
              </div>
              <img src="/img/today-woman.png" alt="" className="h-[128px] w-auto shrink-0 object-contain" />
            </div>
          </div>
          <div className="mt-3 rounded-t-[32px] bg-white px-5 pt-6 shadow-[0_-6px_20px_rgba(130,147,172,0.08)]">
            <p className="text-center font-ui text-[14px] leading-relaxed text-ink"><b>Complete 4 quick steps</b> to unlock your personalized content plan</p>
            <div className="mt-5 flex flex-col gap-3">{STEPS.map((s) => <StepRow key={s.n} {...s} />)}</div>
            <div className="relative mt-2 h-[110px] overflow-hidden">
              <img src="/img/today-man.png" alt="" className="absolute -bottom-2 left-1 h-[130px] w-auto object-contain" />
            </div>
          </div>
        </div>
        <div className="border-t border-line-soft bg-white px-5 py-3">
          <button type="button" onClick={onNext} className="h-[56px] w-full rounded-[16px] bg-primary font-ui text-[16px] font-bold text-white shadow-[0_8px_12px_rgba(0,0,0,0.1)] active:scale-[0.99]">Start</button>
        </div>
        <TabBar />
      </BrowserChrome>
    </PhoneFrame>
  );
}

function Stat({ icon, big, small }: { icon: ReactNode; big: string; small: string }) {
  return (
    <div className="flex flex-1 items-center gap-2 rounded-[14px] border border-line bg-white px-3 py-2.5">
      <span className="text-accent">{icon}</span>
      <div>{big && <span className="font-ui text-[18px] font-bold text-accent">{big} </span>}<span className="font-ui text-[11.5px] font-semibold leading-tight text-ink">{small}</span></div>
    </div>
  );
}

function Incl({ icon, label }: { icon: ReactNode; label: string }) {
  return <div className="flex items-center gap-2 border-t border-line-soft py-2 first:border-t-0"><span className="text-ink-soft">{icon}</span><span className="font-ui text-[14px] font-medium text-ink">{label}</span></div>;
}

function StepRow({ title, time, sub, tone }: { title: string; time: string; sub: string; tone: "active" | "idle" | "gold" }) {
  return (
    <div className="flex items-start gap-3">
      <span className={cn("grid size-9 shrink-0 place-items-center rounded-full", tone === "active" ? "bg-accent text-white" : tone === "gold" ? "bg-[#fff4cc] text-[#ffc700]" : "bg-line-soft text-ink-soft")}>
        {tone === "gold" ? <Star size={17} fill="currentColor" /> : <User size={17} />}
      </span>
      <div className="flex-1 border-b border-line-soft pb-3">
        <div className="flex items-center gap-2"><span className="font-ui text-[16px] font-bold text-ink">{title}</span>{time && <span className="font-ui text-[12px] font-medium text-ink-faint">{time}</span>}</div>
        <p className="mt-0.5 font-ui text-[13.5px] font-medium text-ink-soft">{sub}</p>
      </div>
    </div>
  );
}

function TabBar() {
  const items = ["Today", "Templates", "AI Apps", "Academy"];
  return (
    <div className="flex items-center justify-around border-t border-line-soft bg-white pb-1 pt-2">
      {items.map((t, i) => (
        <div key={t} className="flex flex-col items-center gap-1">
          <span className={cn("size-[18px] rounded-[5px]", i === 0 ? "bg-ink" : "bg-ink-faint/60")} />
          <span className={cn("font-ui text-[10px]", i === 0 ? "font-bold text-ink" : "font-medium text-ink-soft")}>{t}</span>
        </div>
      ))}
    </div>
  );
}
