import type { ReactNode } from "react";
import { PhoneFrame } from "@/funnel/components/PhoneFrame";
import { BrowserChrome } from "@/funnel/components/BrowserChrome";

function PhotoScreen({ img, children }: { img: string; children: ReactNode }) {
  return (
    <PhoneFrame>
      <BrowserChrome dark>
        <div className="relative flex h-full w-full flex-col overflow-hidden bg-black">
          <img src={img} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="relative z-10 flex h-full flex-col">{children}</div>
        </div>
      </BrowserChrome>
    </PhoneFrame>
  );
}

function WelcomeHead() {
  return (
    <>
      <p className="font-brand text-[12px] font-extrabold tracking-[0.08em] text-white/80">SMMHUB</p>
      <h1 className="font-ui text-[32px] font-extrabold italic leading-[1.02]">Welcome<br />Creator</h1>
    </>
  );
}

const CARD = "rounded-[16px] bg-[#1e100b]/70 p-4 font-brand text-[16px] leading-relaxed text-white/90 backdrop-blur-[4px]";

export function Welcome1({ onNext }: { onNext: () => void }) {
  return (
    <PhotoScreen img="/img/welcome-woman.png">
      <div onClick={onNext} className="mt-auto flex cursor-pointer flex-col gap-3 bg-gradient-to-t from-[#231a12] via-[#231a12]/85 to-transparent px-5 pb-6 pt-28 text-white">
        <WelcomeHead />
        <div className={CARD}>I&apos;m Sandy, your <b>Social Media Coach</b> - here to help you <b>grow your audience with confidence.</b></div>
      </div>
    </PhotoScreen>
  );
}

export function Welcome2({ onNext }: { onNext: () => void }) {
  return (
    <PhotoScreen img="/img/welcome-woman.png">
      <div className="mt-auto flex flex-col gap-3 bg-gradient-to-t from-[#231a12] via-[#231a12]/85 to-transparent px-5 pb-5 pt-20 text-white">
        <WelcomeHead />
        <div className={CARD}>I&apos;m Sandy, your <b>Social Media Coach</b> - here to help you <b>grow your audience with confidence.</b></div>
        <div className={CARD}>Let&apos;s build your <b>personalized growth plan.</b></div>
        <button type="button" onClick={onNext} className="mt-1 h-[56px] w-full rounded-[16px] bg-white font-ui text-[16px] font-bold text-ink shadow-[0_8px_12px_rgba(0,0,0,0.1)] active:scale-[0.99]">Continue</button>
      </div>
    </PhotoScreen>
  );
}

export function LoggedIn({ onNext }: { onNext: () => void }) {
  return (
    <PhotoScreen img="/img/loggedin-room.png">
      <div className="flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <div className="text-[64px] leading-none">&#10003;</div>
        <p className="mt-3 font-brand text-[16px] font-medium text-white/90">You&apos;re logged in as <b className="font-semibold text-white">email@example.com</b></p>
        <p className="mt-1 font-brand text-[16px] font-medium text-white">Your plan <b className="font-semibold text-[#4de55a]">is active!</b></p>
        <div className="absolute inset-x-0 bottom-5 px-5">
          <button type="button" onClick={onNext} className="h-[56px] w-full rounded-[16px] bg-white font-ui text-[16px] font-bold text-ink shadow-[0_8px_12px_rgba(0,0,0,0.1)] active:scale-[0.99]">Let&apos;s grow &#128640;</button>
        </div>
      </div>
    </PhotoScreen>
  );
}
