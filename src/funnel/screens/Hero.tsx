import { useEffect } from "react";
import { PhoneFrame } from "@/funnel/components/PhoneFrame";
import { BrowserChrome } from "@/funnel/components/BrowserChrome";

function Stars() {
  return <span className="text-[13px] tracking-tight text-[#FFC700]">★★★★★</span>;
}

export function Hero({ onNext }: { onNext: () => void }) {
  useEffect(() => {
    const t = setTimeout(onNext, 3000);
    return () => clearTimeout(t);
  }, [onNext]);
  return (
    <PhoneFrame>
      <BrowserChrome dark>
        <div onClick={onNext} className="flex h-full cursor-pointer flex-col bg-[#030303] px-5 pt-4 text-white">
          <p className="text-center font-brand text-[16px] font-extrabold tracking-[0.06em]">SMMHUB</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
            <Stars />
            <span className="font-ui text-[12px] font-medium">Excellent</span>
            <span className="font-ui text-[12px] font-bold">4.7</span>
            <span className="text-white/25">|</span>
            <span className="font-ui text-[12px] font-medium text-white/85">43,392 ratings</span>
          </div>
          <h1 className="mt-4 text-center font-ui text-[24px] font-bold leading-[1.3]">
            Stop scrolling!<br />
            Start your journey to <span className="text-[#7a5cff]">10k followers</span>
          </h1>
          <div className="mt-4">
            <div className="mb-1.5 text-center font-ui text-[12px] font-semibold">65%</div>
            <div className="h-[16px] w-full overflow-hidden rounded-full bg-[#272741]/70">
              <div className="h-full w-[65%] rounded-full bg-[#8666ff] shadow-[0_0_12px_2px_rgba(134,102,255,0.6)]" />
            </div>
            <div className="mt-2.5 flex items-center justify-center gap-2 font-ui text-[14px] font-medium">
              <span className="size-4 animate-spin rounded-full border-2 border-white/25 border-t-white" /> Loading the quiz...
            </div>
          </div>
          <div className="relative flex flex-1 items-center justify-center py-2">
            <img src="/img/hero-phones.png" alt="" className="max-h-full w-auto object-contain" />
          </div>
          <p className="pb-3 text-center font-ui text-[11px] leading-relaxed text-white/90">
            By continuing, you agree with <u>Terms and Conditions</u>, <u>Privacy Policy</u>, <u>Subscription Terms</u>
          </p>
        </div>
      </BrowserChrome>
    </PhoneFrame>
  );
}
