import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Answers, Beat, StepKey } from "@/funnel/flow/types";
import { STEP_TITLE } from "@/funnel/flow/types";

const passes = (b: Beat, a: Answers) => !b.when || b.when(a);
const idOf = (b: Beat) => (b.t === "ask" || b.t === "summary" ? b.id : undefined);

export function useFunnel(flow: Beat[], opts?: { initial?: Answers; instant?: boolean }) {
  const [answers, setAnswers] = useState<Answers>(opts?.initial ?? {});
  const [shown, setShown] = useState(opts?.instant ? 99999 : 0);
  const [typing, setTyping] = useState(false);
  const timer = useRef<number | null>(null);

  const path = useMemo(() => flow.filter((b) => passes(b, answers)), [flow, answers]);
  const activeIdx = useMemo(() => {
    for (let i = 0; i < path.length; i++) {
      const id = idOf(path[i]);
      if (id && !(id in answers)) return i;
    }
    return path.length;
  }, [path, answers]);

  useEffect(() => {
    if (shown >= activeIdx) { setTyping(false); return; }
    const next = path[shown];
    const isBot = !!next && next.t === "bot";
    if (isBot) setTyping(true);
    timer.current = window.setTimeout(() => {
      setTyping(false);
      setShown((s) => Math.min(s + 1, activeIdx));
    }, isBot ? 640 : 30);
    return () => { if (timer.current) window.clearTimeout(timer.current); };
  }, [shown, activeIdx, path]);

  useEffect(() => { if (shown > activeIdx) setShown(activeIdx); }, [activeIdx, shown]);

  const answer = useCallback((id: string, value: string) => setAnswers((a) => ({ ...a, [id]: value })), []);
  const back = useCallback(() => {
    setAnswers((a) => {
      const ids = path.map(idOf).filter((x): x is string => !!x && x in a);
      if (!ids.length) return a;
      const rest = { ...a };
      delete rest[ids[ids.length - 1]];
      return rest;
    });
  }, [path]);

  const step = useMemo<StepKey | undefined>(() => {
    let s: StepKey | undefined;
    for (let i = 0; i <= Math.min(activeIdx, path.length - 1); i++) {
      const bs = path[i]?.step;
      if (bs) s = bs;
    }
    return s;
  }, [path, activeIdx]);

  const totalAsks = useMemo(() => flow.filter((b) => b.t !== "bot").length, [flow]);
  const progress = totalAsks ? (Object.keys(answers).length / totalAsks) * 100 : 0;

  return {
    answers,
    resolved: path.slice(0, Math.min(shown, activeIdx)),
    active: activeIdx < path.length ? path[activeIdx] : null,
    revealing: shown < activeIdx,
    typing,
    answer,
    back,
    title: step ? STEP_TITLE[step] : "",
    progress,
    canBack: Object.keys(answers).length > 0,
    done: activeIdx >= path.length,
  };
}
