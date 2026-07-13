import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { PhoneFrame } from "@/funnel/components/PhoneFrame";
import { BrowserChrome } from "@/funnel/components/BrowserChrome";
import { WelcomeSwoosh, WelcomeScrim } from "@/funnel/screens/icons";

/**
 * Welcome 1/2 (Figma 45573:6126) and Welcome 2/2 (45573:6146).
 *
 * Both frames use byte-identical artwork - a room photo (/img/welcome-bg.png) with Sandy composited
 * on top (/img/welcome-girl.png) - and differ only in the caption stack: 1/2 shows one card, 2/2
 * adds the second card and the Continue button. They are the two states of one animation, so both
 * are kept.
 *
 * The header (wordmark, "Welcome Creator", swoosh) sits at the TOP of the photo, not the bottom.
 */
function PhotoStage({ children }: { children: ReactNode }) {
  return (
    <PhoneFrame>
      <BrowserChrome>
        <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#231a12]">
          <img src="/img/welcome-bg.png" alt="" aria-hidden draggable={false} className="absolute inset-0 size-full select-none object-cover" />
          <img src="/img/welcome-girl.png" alt="" draggable={false} className="absolute inset-0 size-full select-none object-cover" />
          {/* Figma "Blur": a 194px scrim pinned to the bottom. Inline <svg> gradient, not CSS. */}
          <WelcomeScrim className="pointer-events-none absolute inset-x-0 bottom-0 h-[194px] w-full" />
          <div className="relative z-10 flex h-full flex-col">{children}</div>
        </div>
      </BrowserChrome>
    </PhoneFrame>
  );
}

/** Wordmark + "Welcome Creator" + the hand-drawn underline. Figma: pt-20, gap-8, centred. */
function WelcomeHead() {
  return (
    <div className="flex flex-1 flex-col items-center gap-[8px] pt-[20px]">
      <p className="w-full text-center font-brand text-[12px] font-extrabold text-white/80">SMMHUB</p>
      <div className="flex w-full flex-col items-center">
        <p className="w-full text-center font-ui text-[32.3px] font-extrabold italic leading-[1.1] text-white">Welcome</p>
        <p className="w-full text-center font-ui text-[32.3px] font-extrabold italic leading-[1.1] text-white">Creator</p>
        <WelcomeSwoosh className="h-[14px] w-[151px] shrink-0" />
      </div>
    </div>
  );
}

/**
 * Figma "Coach Text Container": rgba(30,16,11,0.64), radius 16, 16/12 padding, Gilroy 16/1.5.
 *
 * `tight` shaves 0.4px off the tracking. It looks like nothing on screen and it is load-bearing for
 * the Figma capture: Figma has no Gilroy Medium, so it substitutes Montserrat, which is ~13% wider.
 * A caption that is one line in the browser is captured as a hug-width text node, and Figma then
 * re-measures that node with the substituted font - the second caption grew from 306px to 347px,
 * overflowed the card's 326px content box and had "plan." clipped off its right edge. The tracking
 * pulls the substituted width back under the box (~331px) so the sentence stays whole, on one line,
 * as in the original. Do not widen the cards to fix this instead: past ~345px the first caption
 * wraps to two lines in Gilroy but still needs three in Montserrat, and the capture clips it
 * vertically instead.
 */
function CaptionCard({ children, tight }: { children: ReactNode; tight?: boolean }) {
  return (
    <div className="flex w-full items-center justify-center rounded-[16px] bg-[rgba(30,16,11,0.64)] px-[16px] py-[12px] backdrop-blur-[4px]">
      <p className={cn("flex-1 font-brand text-[16px] font-medium leading-[1.5] text-white/90", tight && "tracking-[-0.4px]")}>{children}</p>
    </div>
  );
}

const SANDY = (
  <>
    I&apos;m Sandy, your <b className="font-bold text-white">Social Media Coach</b> - here to help you{" "}
    <b className="font-bold text-white">grow your audience with confidence.</b>
  </>
);

export function Welcome1({ onNext }: { onNext: () => void }) {
  return (
    <PhotoStage>
      <div onClick={onNext} className="flex h-full cursor-pointer flex-col">
        <WelcomeHead />
        <div className="flex w-full flex-col items-center">
          <div className="w-full px-[16px]">
            <CaptionCard>{SANDY}</CaptionCard>
          </div>
          {/* Figma leaves an 88px gap where 2/2 puts the Continue button. */}
          <div className="h-[88px] w-full" />
        </div>
      </div>
    </PhotoStage>
  );
}

export function Welcome2({ onNext }: { onNext: () => void }) {
  return (
    <PhotoStage>
      <div className="flex h-full flex-col">
        <WelcomeHead />
        <div className="flex w-full flex-col items-center">
          <div className="flex w-full flex-col gap-[8px] px-[16px]">
            <CaptionCard>{SANDY}</CaptionCard>
            <CaptionCard tight>
              Let&apos;s build your <b className="font-bold text-white">personalized growth plan.</b>
            </CaptionCard>
          </div>
          <div className="w-full p-[16px]">
            <button
              type="button"
              onClick={onNext}
              className="h-[56px] w-full rounded-[16px] bg-white font-ui text-[16px] font-bold text-ink shadow-[0_8px_12px_rgba(0,0,0,0.1)] active:scale-[0.99]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </PhotoStage>
  );
}

/** Post-purchase confirmation. Same room photo, no Sandy. */
export function LoggedIn({ onNext }: { onNext: () => void }) {
  return (
    <PhoneFrame>
      <BrowserChrome>
        <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#231a12]">
          <img src="/img/loggedin-room.png" alt="" aria-hidden draggable={false} className="absolute inset-0 size-full select-none object-cover" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
            <div className="text-[64px] leading-none">&#10003;</div>
            <p className="mt-3 font-brand text-[16px] font-medium text-white/90">
              You&apos;re logged in as <b className="font-semibold text-white">email@example.com</b>
            </p>
            <p className="mt-1 font-brand text-[16px] font-medium text-white">
              Your plan <b className="font-semibold text-[#4de55a]">is active!</b>
            </p>
            <div className="absolute inset-x-0 bottom-5 px-5">
              <button
                type="button"
                onClick={onNext}
                className="h-[56px] w-full rounded-[16px] bg-white font-ui text-[16px] font-bold text-ink shadow-[0_8px_12px_rgba(0,0,0,0.1)] active:scale-[0.99]"
              >
                Let&apos;s grow &#128640;
              </button>
            </div>
          </div>
        </div>
      </BrowserChrome>
    </PhoneFrame>
  );
}
