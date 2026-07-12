import { useEffect, useRef } from "react";
import { PhoneFrame } from "@/funnel/components/PhoneFrame";
import { BrowserChrome } from "@/funnel/components/BrowserChrome";
import { Header } from "@/funnel/components/Header";
import { TypingDots } from "@/funnel/components/ChatBubble";
import { Transcript } from "@/funnel/components/Transcript";
import { QuestionSheet } from "@/funnel/components/QuestionSheet";
import { SummaryScreen } from "@/funnel/components/SummaryScreen";
import { Hero } from "@/funnel/screens/Hero";
import { Welcome1, Welcome2, LoggedIn } from "@/funnel/screens/Welcome";
import { Today } from "@/funnel/screens/Today";
import { useFunnel } from "@/funnel/useFunnel";
import { FLOW } from "@/funnel/flow";
import type { Answers, ScreenKind } from "@/funnel/flow/types";

function ScreenView({ screen, onNext }: { screen: ScreenKind; onNext: () => void }) {
  if (screen === "hero") return <Hero onNext={onNext} />;
  if (screen === "welcome1") return <Welcome1 onNext={onNext} />;
  if (screen === "welcome2") return <Welcome2 onNext={onNext} />;
  if (screen === "today") return <Today onNext={onNext} />;
  return <LoggedIn onNext={onNext} />;
}

export function FunnelPage({ initial, instant }: { initial?: Answers; instant?: boolean }) {
  const f = useFunnel(FLOW, { initial, instant });
  const scroll = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scroll.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [f.resolved.length, f.typing, f.active]);
  const active = f.active;

  if (f.done) return <LoggedIn onNext={() => { window.location.href = "/"; }} />;
  if (active?.t === "screen") return <ScreenView screen={active.screen} onNext={() => f.answer(active.id, "done")} />;

  return (
    <PhoneFrame>
      <BrowserChrome>
        {active?.t === "summary" ? (
          <SummaryScreen kind={active.kind} cta={active.cta} answers={f.answers} onNext={() => f.answer(active.id, "done")} onBack={f.back} />
        ) : (
          <>
            <Header title={f.title} progress={f.progress} onBack={f.back} canBack={f.canBack} />
            <div ref={scroll} className="flex flex-1 flex-col justify-end gap-2 overflow-y-auto px-4 pb-3 pt-3">
              <Transcript beats={f.resolved} answers={f.answers} />
              {f.revealing && f.typing && <TypingDots />}
            </div>
            {active?.t === "ask" && <QuestionSheet key={active.id} q={active.q} onAnswer={(v) => f.answer(active.id, v)} />}
          </>
        )}
      </BrowserChrome>
    </PhoneFrame>
  );
}
