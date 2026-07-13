import { PhoneFrame } from "@/funnel/components/PhoneFrame";
import { BrowserChrome } from "@/funnel/components/BrowserChrome";
import { CountdownBar, ProgressChip } from "@/funnel/screens/paywall/bits";
import { GrowthChart, Headline } from "@/funnel/screens/paywall/GrowthChart";
import { TrialSteps } from "@/funnel/screens/paywall/TrialSteps";
import { ChoosePlan } from "@/funnel/screens/paywall/ChoosePlan";
import { WhatYouGet } from "@/funnel/screens/paywall/WhatYouGet";
import { SocialProof } from "@/funnel/screens/paywall/SocialProof";
import { Reviews } from "@/funnel/screens/paywall/Reviews";
import { FinalOffer } from "@/funnel/screens/paywall/FinalOffer";
import { Guarantee } from "@/funnel/screens/paywall/Guarantee";

/** 28px, the gap Figma leaves between every top-level block of 45573:2210. */
function Gap({ h = 28 }: { h?: number }) {
  return <div aria-hidden style={{ height: h }} />;
}

/**
 * Paywall - after (Figma 45573:2190, 390x5027). The long page the user lands on after dismissing
 * the Checkout. One scroll column, exactly as the original stacks it: the countdown bar scrolls
 * away with the rest, and the headline sits flush against the chart block with no gap.
 *
 * The gaps are real sized boxes, not a flex `gap` - the Figma capture engine can collapse gaps.
 */
export function Paywall({ onNext, email }: { onNext: () => void; email?: string }) {
  const shown = email || "kirill@gmail.com";
  return (
    <PhoneFrame>
      <BrowserChrome>
        <div className="min-h-0 flex-1 overflow-y-auto bg-white">
          <CountdownBar />
          {/* The chip sits on the top of the chart block's tint, not on white. */}
          <div className="bg-[#FBFCFD] pt-[10px]">
            <ProgressChip email={shown} />
            <GrowthChart />
          </div>
          <Headline onStart={onNext} />
          <Gap />
          <TrialSteps />
          <Gap />
          <ChoosePlan onStart={onNext} />
          <Gap />
          <WhatYouGet />
          <Gap />
          <ProgressChip email={shown} />
          <Gap h={16} />
          <SocialProof onStart={onNext} />
          <Gap />
          <Reviews />
          <Gap />
          <FinalOffer onStart={onNext} />
          <Gap />
          <Guarantee />
          <Gap h={20} />
        </div>
      </BrowserChrome>
    </PhoneFrame>
  );
}
