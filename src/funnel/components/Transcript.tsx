import { Fragment } from "react";
import { BotBubble, UserBubble } from "@/funnel/components/ChatBubble";
import { DnaCard } from "@/funnel/components/DnaCard";
import type { Answers, Beat } from "@/funnel/flow/types";
import { cn } from "@/lib/cn";

export function Transcript({ beats, answers }: { beats: Beat[]; answers: Answers }) {
  return (
    <>
      {beats.map((b, i) => {
        if (b.t === "bot") {
          const nextBot = beats[i + 1]?.t === "bot" && !b.card;
          return (
            <Fragment key={i}>
              <BotBubble tail={!nextBot} className={cn(b.italic && "italic")}>{b.text}</BotBubble>
              {b.card?.kind === "dna" && <DnaCard done={b.card.done} />}
            </Fragment>
          );
        }
        if (b.t === "ask") {
          const txt = answers[b.id];
          return txt ? <UserBubble key={i}>{txt}</UserBubble> : null;
        }
        return null;
      })}
    </>
  );
}
