import { portfolio } from "../content/portfolio";

export function KoreanFlag() {
  return (
    <div className="relative h-11.25 w-16 shrink-0">
      <img
        src={portfolio.flag.src}
        alt={portfolio.flag.alt}
        className="absolute left-[0.45%] top-[0.64%] max-w-none"
        decoding="async"
      />
    </div>
  );
}
