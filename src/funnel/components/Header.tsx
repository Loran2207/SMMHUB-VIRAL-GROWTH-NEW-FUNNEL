import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/cn";

export function Header({ title, progress, onBack, canBack = true }: {
  title: string;
  progress: number;
  onBack?: () => void;
  canBack?: boolean;
}) {
  return (
    <div className="sticky top-0 z-20 w-full backdrop-blur-[10px]" style={{ background: "rgba(250,250,251,0.72)" }}>
      <div className="flex h-[56px] items-center justify-between px-4">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className={cn(
            "grid size-8 place-items-center rounded-full text-ink transition active:scale-90",
            !canBack && "pointer-events-none opacity-0",
          )}
        >
          <ChevronLeft size={26} strokeWidth={2.2} />
        </button>
        <p className="font-ui text-[16px] font-bold tracking-[-0.2px] text-ink">{title}</p>
        <Avatar />
      </div>
      <div className="relative h-[4px] w-full bg-line">
        <div
          className="absolute left-0 top-0 h-full rounded-r-full bg-progress transition-[width] duration-500 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative size-9 shrink-0">
      {/* Figma draws the photo at 41.2x45.3 offset (-4.18, +1.33) inside a 32px circle. Scaled to our 36px circle. */}
      <div
        className="size-9 rounded-full bg-[#ebebee] bg-no-repeat"
        style={{ backgroundImage: "url(/img/avatar.png)", backgroundSize: "46.3px 51px", backgroundPosition: "-4.7px 1.5px" }}
      />
      <span className="absolute bottom-0 right-0 size-[9px] rounded-full border-2 border-[#fafafb] bg-good" />
    </div>
  );
}
