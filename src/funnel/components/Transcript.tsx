import { Fragment } from "react";
import { BotBubble, UserBubble } from "@/funnel/components/ChatBubble";
import { DnaCard } from "@/funnel/components/DnaCard";
import type { Answers, Beat, Bullet } from "@/funnel/flow/types";
import { cn } from "@/lib/cn";

/** Bullets are real text nodes (no list markers, no pseudo-elements) so they survive a DOM capture. */
function BulletList({ items }: { items: Bullet[] }) {
  return (
    <div className="mt-3 flex flex-col gap-3">
      {items.map((it) => (
        <div key={it.title}>
          <p className="font-ui text-[15px] font-bold leading-[1.5] text-ink">
            <span className="mr-1">·</span>
            {it.title}
          </p>
          <p className="font-ui text-[15px] font-medium italic leading-[1.5] text-ink-soft">{it.sub}</p>
        </div>
      ))}
    </div>
  );
}

export function Transcript({ beats, answers }: { beats: Beat[]; answers: Answers }) {
  return (
    <>
      {beats.map((b, i) => {
        if (b.t === "bot") {
          const nextBot = beats[i + 1]?.t === "bot" && !b.card;
          return (
            <Fragment key={i}>
              <BotBubble tail={!nextBot} wide={!!b.list} className={cn(b.italic && "italic")}>
                {b.text}
                {b.list && <BulletList items={b.list} />}
              </BotBubble>
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
