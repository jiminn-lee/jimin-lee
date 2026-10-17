import { portfolio } from "../content/portfolio";
import { KoreanFlag } from "./KoreanFlag";
import { PortfolioLink } from "./PortfolioLink";

export function Hero() {
  return (
    <section
      aria-labelledby="portfolio-name"
      className="hero flex items-center justify-center py-8"
    >
      <div className="hero-composition relative w-[330px]">
        <div className="hero-flag absolute left-1/2 -translate-x-1/2">
          <KoreanFlag />
        </div>
        <nav aria-label="Profile links" className="row-start-1">
          <ul className="flex h-full items-end justify-between [&:has(a:hover)_a:not(:hover)]:text-muted">
            {portfolio.navigation.map((link, index) => (
              <li
                key={link.label}
                className={`w-22 ${index === 1 ? "text-center" : index === 2 ? "text-right" : "text-left"}`}
              >
                <PortfolioLink {...link} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="row-start-3 flex min-h-0 justify-center">
          <div className="image-grain aspect-3/4 h-full max-w-full">
            <img
              src={portfolio.portrait.src}
              alt={portfolio.portrait.alt}
              width={330}
              height={440}
              fetchPriority="high"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="row-start-5 flex flex-col gap-2">
          <div>
            <p lang="ko" className="font-korean text-[20px] leading-5">
              {portfolio.koreanName}
            </p>
            <h1
              id="portfolio-name"
              className="text-[48px] leading-12 tracking-[-1.2px]"
            >
              {portfolio.name}
            </h1>
          </div>
          <p className="italic">{portfolio.tagline}</p>
        </div>
      </div>
    </section>
  );
}
