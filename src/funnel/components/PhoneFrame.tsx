import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Height of the exported iOS keyboard (public/img/ios-keyboard.png) at a 390px phone frame. */
export const KEYBOARD_H = 290;

/**
 * The phone column. It is full-bleed: the column takes the whole viewport width (capped at 402px,
 * the iPhone 16 width every screen and every Figma capture is shot at), so screen content runs edge
 * to edge and only the browser chrome frames it, top and bottom. It used to be a fixed 390px inside
 * a 402px viewport, which left a 6px stage-coloured gutter down each side of every screen.
 *
 * `keyboard` is a capture-only flag (?kb=1): it pins the real iOS keyboard image to the bottom of
 * the frame and shrinks the screen above it, so a Figma capture can show the keyboard-open state the
 * web app never renders on its own.
 */
export function PhoneFrame({ children, className, keyboard }: { children: ReactNode; className?: string; keyboard?: boolean }) {
  return (
    <div className="flex min-h-dvh w-full justify-center bg-[#e9e9ee]">
      <div className={cn("relative h-dvh w-full max-w-[402px] overflow-hidden", className)}>
        <div className="h-full" style={keyboard ? { height: `calc(100dvh - ${KEYBOARD_H}px)` } : undefined}>
          {children}
        </div>
        {keyboard && (
          <img
            src="/img/ios-keyboard.png"
            alt=""
            aria-hidden
            draggable={false}
            style={{ height: KEYBOARD_H }}
            className="absolute inset-x-0 bottom-0 block w-full select-none"
          />
        )}
      </div>
    </div>
  );
}
