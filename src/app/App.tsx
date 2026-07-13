import { FunnelPage } from "@/funnel/FunnelPage";
import { FLOW } from "@/funnel/flow";
import { seek } from "@/funnel/seek";
import type { Answers } from "@/funnel/flow/types";

function parseSeed(p: URLSearchParams): Answers {
  const raw = p.get("a");
  const out: Answers = {};
  if (raw) {
    for (const pair of raw.split(";")) {
      const idx = pair.indexOf(":");
      if (idx > 0) out[pair.slice(0, idx)] = decodeURIComponent(pair.slice(idx + 1));
    }
  }
  return out;
}

export default function App() {
  const p = new URLSearchParams(window.location.search);
  const screen = p.get("screen");
  const seed = parseSeed(p);
  const deep = !!screen || Object.keys(seed).length > 0 || p.has("instant");
  const initial = deep ? seek(FLOW, screen, seed) : {};
  /** Capture-only: ?kb=1 overlays the real iOS keyboard so the board can show the typing state. */
  const keyboard = p.get("kb") === "1";
  return <FunnelPage initial={initial} instant={deep} keyboard={keyboard} />;
}
