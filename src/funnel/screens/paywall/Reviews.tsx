/** "What our users are saying about SMMHUB" - Figma 45573:2560. */

/** The lilac wedge behind the top of every card. A CSS gradient captures as a grey block, so it is
 *  an inline <linearGradient> projected along the original 76.642deg axis over the 358x53 strip. */
function WedgeGradient({ id }: { id: string }) {
  return (
    <svg
      className="absolute left-0 top-0 h-[53px] w-full"
      viewBox="0 0 358 53"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="69.33" y1="52.49" x2="346.36" y2="-13.16">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F7F6FE" />
        </linearGradient>
      </defs>
      <rect width="358" height="53" fill={`url(#${id})`} />
    </svg>
  );
}

function QuoteGlyph() {
  return (
    <div className="relative flex shrink-0 items-center justify-center">
      <div className="rotate-180">
        <div className="relative h-[20px] w-[20px] overflow-hidden">
          <svg
            className="absolute"
            style={{ left: "0.836px", top: "2.5px", width: "19.164px", height: "14.168px" }}
            viewBox="0 0 19.1658 14.1674"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4.58444 0.000178363C7.24628 0.000178363 9.16777 2.19772 9.16771 5.45154C9.15066 10.1792 5.59667 13.5217 0.469532 14.1636C-0.0061428 14.2232 -0.189557 13.5642 0.248479 13.3695C2.2158 12.4947 3.2094 11.3846 3.33774 10.2859C3.43363 9.46499 2.98738 8.74591 2.42705 8.61126C0.974394 8.26219 0.00110406 6.45317 0.00110406 4.58351C0.00110406 2.05221 2.05313 0.000178363 4.58444 0.000178363Z"
              fill="#5E39FF"
            />
            <path
              d="M14.5825 0C17.2444 0 19.1659 2.19754 19.1658 5.45136C19.1487 10.179 15.5948 13.5215 10.4676 14.1634C9.99194 14.223 9.80853 13.5641 10.2466 13.3693C12.2139 12.4945 13.2075 11.3844 13.3358 10.2857C13.4317 9.46481 12.9855 8.74573 12.4251 8.61108C10.9725 8.26202 9.99919 6.45299 9.99919 4.58333C9.99919 2.05203 12.0512 0 14.5825 0Z"
              fill="#5E39FF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* The 2px separation is a margin, not a flex gap: the capture engine can collapse gaps and the
   stars would touch. */
function Star({ last }: { last?: boolean }) {
  return (
    <svg
      className={`h-[12px] w-[12px] shrink-0 ${last ? "" : "mr-[2px]"}`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.3558 1.10132C6.13362 0.981526 5.86609 0.981526 5.64391 1.10132C5.43764 1.21254 5.34535 1.41525 5.30616 1.50328C5.25779 1.61192 5.20844 1.75393 5.1561 1.90456L4.40746 4.0583L2.12777 4.10476C1.96834 4.10799 1.81804 4.11104 1.69977 4.12347C1.60394 4.13355 1.38263 4.15868 1.21312 4.32048C1.03053 4.49476 0.947857 4.7492 0.993133 4.99753C1.03517 5.22806 1.19944 5.37848 1.27105 5.44296C1.35942 5.52253 1.47923 5.61334 1.60631 5.70967L3.42331 7.08722L2.76303 9.26967C2.71684 9.4223 2.67329 9.56619 2.64856 9.68252C2.62853 9.77677 2.58404 9.99502 2.68554 10.2062C2.79487 10.4337 3.01131 10.591 3.26148 10.6247C3.49372 10.6559 3.68753 10.5462 3.77098 10.498C3.87397 10.4385 3.99735 10.3527 4.12822 10.2616L5.99985 8.95919L7.87151 10.2616C8.00237 10.3527 8.12575 10.4386 8.22872 10.498C8.31218 10.5462 8.50599 10.6559 8.73823 10.6247C8.98839 10.591 9.20483 10.4337 9.31417 10.2062C9.41566 9.99502 9.37118 9.77677 9.35114 9.68252C9.32642 9.56619 9.28287 9.42229 9.23668 9.26966L8.5764 7.08722L10.3934 5.70968C10.5205 5.61335 10.6403 5.52254 10.7287 5.44296C10.8003 5.37848 10.9645 5.22806 11.0066 4.99753C11.0519 4.7492 10.9692 4.49476 10.7866 4.32048C10.6171 4.15868 10.3958 4.13355 10.2999 4.12347C10.1817 4.11104 10.0314 4.10799 9.87193 4.10476L7.59225 4.0583L6.84361 1.90456C6.79127 1.75393 6.74192 1.61192 6.69355 1.50328C6.65435 1.41525 6.56206 1.21254 6.3558 1.10132Z"
        fill="#FFA900"
      />
    </svg>
  );
}

type Review = { id: string; title: string; body: string; name: string };

/* "ang" in the first body is a typo in the Figma source. Kept verbatim - 1:1 fidelity. */
const REVIEWS: Review[] = [
  {
    id: "r1",
    title: "Wow!",
    body: "Finally I can post consistently ang grow my followers thanks to SMMHUB. Easy to use and super effective!",
    name: "Brandford Tilden",
  },
  {
    id: "r2",
    title: "Game Changer!!",
    body: "Skeptical at first, but the results speak for themselves. Tons of useful features, great support!",
    name: "John Benson",
  },
  {
    id: "r3",
    title: "Amazing Results!",
    body: "SMMHUB gave me way more content ideas than I expected. Totally worth it.",
    name: "Emily Carter",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="relative flex w-full flex-col items-start justify-center gap-[12px] overflow-hidden rounded-[12px] bg-white p-[20px]"
      style={{ boxShadow: "0px 2px 4.35px rgba(16,24,40,0.07)" }}
    >
      <WedgeGradient id={`rv-wedge-${review.id}`} />
      {/* Masks the wedge down to a diagonal sliver in the top-right. Real rotated div - the capture
          engine drops pseudo-elements. */}
      <div
        className="absolute"
        style={{
          left: "13.277px",
          right: "21.579px",
          top: "29.719px",
          height: "43.937px",
          background: "#FFFFFF",
          borderTopRightRadius: "12px",
          transform: "rotate(-4.84deg)",
        }}
      />
      <QuoteGlyph />
      <div className="relative flex w-full flex-col items-start gap-[4px] text-[14px] leading-[1.4] text-[#02082d] [word-break:break-word]">
        <p className="w-full font-extrabold">{review.title}</p>
        <p className="w-full font-semibold">{review.body}</p>
      </div>
      <div className="relative flex w-full flex-col items-start justify-end gap-[5px]">
        <p className="w-full text-[12px] font-medium leading-[1.4] text-[#585c74] [word-break:break-word]">
          {review.name}
        </p>
        <div className="flex w-full items-center">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star last />
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section className="flex flex-col items-center gap-[16px] bg-white px-4 py-[20px] font-ui">
      <h2 className="text-center text-[18px] font-bold leading-[1.4] text-[#02082d] [word-break:break-word]">
        What our <span className="text-[#584AE5]">users are saying</span> about SMMHUB
      </h2>
      <div className="flex w-full flex-col items-start gap-[10px]">
        {REVIEWS.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </section>
  );
}
