import { useEffect, useRef } from "react";
import { PhoneFrame } from "@/funnel/components/PhoneFrame";
import { Header } from "@/funnel/components/Header";
import { TypingDots } from "@/funnel/components/ChatBubble";
import { Transcript } from "@/funnel/components/Transcript";
import { QuestionSheet } from "@/funnel/components/QuestionSheet";
import { SummaryScreen } from "@/funnel/components/SummaryScreen";
import { useFunnel } from "@/funnel/useFunnel";
import { FLOW } from "@/funnel/flow";
import type { Answers } from "@/funnel/flow/types";

export function FunnelPage({ initial, instant }: { initial?: Answers; instant?: boolean }) {
  const f = useFunnel(FLOW, { initial, instant });
  const scroll = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scroll.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [f.resolved.length, f.typing, f.active]);
  const active = f.active;
  return (
    <PhoneFrame>
      <Header title={f.title} progress={f.progress} onBack={f.back} canBack={f.canBack} />
      {active?.t === "summary" ? (
        <SummaryScreen kind={active.kind} cta={active.cta} answers={f.answers} onNext={() => f.answer(active.id, "done")} />
      ) : (
        <>
          <div ref={scroll} className="flex flex-1 flex-col justify-end gap-2 overflow-y-auto px-4 pb-4 pt-3">
            <Transcript beats={f.resolved} answers={f.answers} />
            {f.revealing && f.typing && <TypingDots />}
          </div>
          {active?.t === "ask" && <QuestionSheet key={active.id} q={active.q} onAnswer={(v) => f.answer(active.id, v)} />}
          {f.done && <div className="p-5 text-center font-ui text-[13px] text-ink-soft">You are all set 🎉</div>}
        </>
      )}
    </PhoneFrame>
  );
}
