/** "See how trial works" - the three-step card. Figma 45573:2227 (the layer is named "Show how
 *  trial works"; the drawn heading says "See how trial works"). */

/** The rail fade-out below the star. A CSS gradient captures as a grey block, so it is an inline SVG. */
function RailTail() {
  return (
    <svg
      width="18"
      height="40"
      viewBox="0 0 18 40"
      fill="none"
      aria-hidden
      className="absolute left-[2px] top-[111px] block"
    >
      <defs>
        <linearGradient id="tsRailTail" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C1B2FF" stopOpacity="0.5" />
          <stop offset="1" stopColor="#C1B2FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="18" height="40" rx="9" fill="url(#tsRailTail)" />
    </svg>
  );
}

function Step({ top, title, sub }: { top: number; title: string; sub: string }) {
  return (
    <div className="absolute left-[36px] flex flex-col items-start gap-[2px] leading-[0]" style={{ top }}>
      <p className="whitespace-nowrap text-[14px] font-bold leading-[1.3] text-[#02082d]">{title}</p>
      <p className="whitespace-nowrap text-[11px] font-medium leading-[1.5] text-[#465063]">{sub}</p>
    </div>
  );
}

export function TrialSteps() {
  return (
    <div className="w-full px-4 font-ui">
      <div className="relative flex flex-col items-start gap-[16px] overflow-hidden rounded-[12px] bg-[#FAF9FF] px-[14px] py-[16px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[12px] border border-solid border-[#EAECF0]" />
        <div className="flex w-full items-center justify-center gap-[16px]">
          <p className="whitespace-nowrap text-center text-[14px] font-semibold leading-[1.3] text-[#02082d]">
            See how trial works
          </p>
        </div>

        <div className="relative h-[151px] w-full">
          <RailTail />

          <Step top={1} title={"Start 7-day trial "} sub="Unlock all premium features" />
          <Step top={54} title="Get personalized Content Plan" sub="Go viral without burning out" />
          <Step top={107} title="End of trial" sub="Switch to the selected recurring payment plan" />

          <div className="absolute left-[2px] top-0 h-[126px] w-[18px] rounded-[100px] bg-[#CEC2FF]">
            <svg viewBox="0 0 12 12" fill="none" aria-hidden className="absolute left-[3px] top-[4px] block size-[12px]">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 1C4.34315 1 3 2.34315 3 4V4.57516C2.8587 4.60613 2.72307 4.65121 2.59202 4.71799C2.2157 4.90973 1.90973 5.21569 1.71799 5.59202C1.59434 5.83469 1.54506 6.09304 1.5221 6.37409C1.49999 6.64468 1.49999 6.97686 1.5 7.37934V8.12065C1.49999 8.52313 1.49999 8.85532 1.5221 9.12591C1.54506 9.40696 1.59434 9.66531 1.71799 9.90798C1.90973 10.2843 2.2157 10.5903 2.59202 10.782C2.83469 10.9057 3.09304 10.9549 3.37409 10.9779C3.64468 11 3.97686 11 4.37934 11H7.62066C8.02314 11 8.35532 11 8.62591 10.9779C8.90696 10.9549 9.16531 10.9057 9.40798 10.782C9.78431 10.5903 10.0903 10.2843 10.282 9.90798C10.4057 9.66531 10.4549 9.40696 10.4779 9.12591C10.5 8.85532 10.5 8.52314 10.5 8.12066V7.37934C10.5 6.97686 10.5 6.64468 10.4779 6.37409C10.4549 6.09304 10.4057 5.83469 10.282 5.59202C10.0903 5.21569 9.78431 4.90973 9.40798 4.71799C9.16531 4.59434 8.90696 4.54506 8.62591 4.5221C8.35532 4.49999 8.02314 4.49999 7.62066 4.5H4.37935C4.2452 4.5 4.11886 4.5 4 4.50081V4C4 2.89543 4.89543 2 6 2C6.81935 2 7.52472 2.49278 7.8338 3.20019C7.94436 3.45323 8.23912 3.56874 8.49216 3.45818C8.74521 3.34762 8.86071 3.05286 8.75015 2.79981C8.28768 1.74132 7.23097 1 6 1ZM6 6.75C5.72386 6.75 5.5 6.97386 5.5 7.25V8.25C5.5 8.52614 5.72386 8.75 6 8.75C6.27614 8.75 6.5 8.52614 6.5 8.25V7.25C6.5 6.97386 6.27614 6.75 6 6.75Z"
                fill="#5E39FF"
              />
            </svg>
          </div>

          <svg viewBox="0 0 12 12" fill="none" aria-hidden className="absolute left-[5px] top-[110px] block size-[12px]">
            <path
              d="M6.3558 1.10132C6.13362 0.981526 5.86609 0.981526 5.64391 1.10132C5.43764 1.21254 5.34535 1.41525 5.30616 1.50328C5.25779 1.61192 5.20844 1.75393 5.1561 1.90456L4.40746 4.0583L2.12777 4.10476C1.96834 4.10799 1.81804 4.11104 1.69977 4.12347C1.60394 4.13355 1.38263 4.15868 1.21312 4.32048C1.03053 4.49476 0.947857 4.7492 0.993133 4.99753C1.03517 5.22806 1.19944 5.37848 1.27105 5.44296C1.35942 5.52253 1.47923 5.61334 1.60631 5.70967L3.42331 7.08722L2.76303 9.26967C2.71684 9.4223 2.67329 9.56619 2.64856 9.68252C2.62853 9.77677 2.58404 9.99502 2.68554 10.2062C2.79487 10.4337 3.01131 10.591 3.26148 10.6247C3.49372 10.6559 3.68753 10.5462 3.77098 10.498C3.87397 10.4385 3.99735 10.3527 4.12822 10.2616L5.99985 8.95919L7.87151 10.2616C8.00237 10.3527 8.12575 10.4386 8.22872 10.498C8.31218 10.5462 8.50599 10.6559 8.73823 10.6247C8.98839 10.591 9.20483 10.4337 9.31417 10.2062C9.41566 9.99502 9.37118 9.77677 9.35114 9.68252C9.32642 9.56619 9.28287 9.42229 9.23668 9.26966L8.5764 7.08722L10.3934 5.70968C10.5205 5.61335 10.6403 5.52254 10.7287 5.44296C10.8003 5.37848 10.9645 5.22806 11.0066 4.99753C11.0519 4.7492 10.9692 4.49476 10.7866 4.32048C10.6171 4.15868 10.3958 4.13355 10.2999 4.12347C10.1817 4.11104 10.0314 4.10799 9.87193 4.10476L7.59225 4.0583L6.84361 1.90456C6.79127 1.75393 6.74192 1.61192 6.69355 1.50328C6.65435 1.41525 6.56206 1.21254 6.3558 1.10132Z"
              fill="#5E39FF"
            />
          </svg>

          <div
            className="absolute left-[-1px] top-[50px] flex size-[26px] items-center justify-center rounded-[100px] border-2 border-solid border-white bg-[#5E39FF]"
            style={{ boxShadow: "0px 1px 1.5px rgba(16,24,40,0.10), 0px 1px 1px rgba(16,24,40,0.06)" }}
          >
            <svg viewBox="0 0 14 14" fill="none" aria-hidden className="block size-[14px] shrink-0">
              <path
                d="M7 1.16667C5.38917 1.16667 4.08333 2.4725 4.08333 4.08333C4.08333 5.69416 5.38917 7 7 7C8.61083 7 9.91667 5.69416 9.91667 4.08333C9.91667 2.4725 8.61083 1.16667 7 1.16667Z"
                fill="#FFFFFF"
              />
              <path
                d="M7 7.58333C4.42267 7.58333 2.33333 9.67267 2.33333 12.25C2.33333 12.5722 2.5945 12.8333 2.91667 12.8333H11.0833C11.4055 12.8333 11.6667 12.5722 11.6667 12.25C11.6667 9.67267 9.57733 7.58333 7 7.58333Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
