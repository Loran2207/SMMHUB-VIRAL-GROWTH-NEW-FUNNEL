import type { Answers, Beat, Question } from "@/funnel/flow/types";

function def(q: Question): string {
  switch (q.kind) {
    case "continue": return q.label;
    case "single":
    case "nicheList":
    case "gender":
    case "multi": return q.options[0]?.label ?? "OK";
    case "platforms": return q.options[0]?.label ?? "Instagram";
    case "yesno": return "Yes";
    case "text": return "My answer";
    case "nicheGen": return "AI-Powered Marketing Launches";
    case "age": return "18-50";
    case "language": return "English";
    case "email": return "you@gmail.com";
    case "optin": return q.yes;
    case "yesNoText": return "No";
  }
}

export function seek(flow: Beat[], target: string | null, seed: Answers): Answers {
  const answers: Answers = { ...seed };
  for (let g = 0; g < 300; g++) {
    const path = flow.filter((b) => !b.when || b.when(answers));
    let id: string | null = null;
    let q: Question | null = null;
    let summary = false;
    for (const b of path) {
      if (b.t === "ask" && !(b.id in answers)) { id = b.id; q = b.q; break; }
      if (b.t === "summary" && !(b.id in answers)) { id = b.id; summary = true; break; }
      if (b.t === "screen" && !(b.id in answers)) { id = b.id; summary = true; break; }
    }
    if (!id || id === target) break;
    answers[id] = summary ? "done" : def(q!);
  }
  return answers;
}
