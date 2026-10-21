import { portfolio } from "../content/portfolio";
import { KoreanFlag } from "./KoreanFlag";
import { PortfolioLink } from "./PortfolioLink";

export function Hero() {
  return (
    <section
      aria-labelledby="portfolio-name"
      className="hero flex items-center justify-center pb-12"
    >
      <div className="hero-composition">
        <div className="hero-flag pb-4">
          <KoreanFlag />
        </div>
        <nav aria-label="Profile links" className="hero-navigation shrink-0">
          <ul className="hero-links flex h-full items-end justify-between [&:has(a:hover)_a:not(:hover)]:text-muted">
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
        <div className="hero-portrait flex min-h-0 justify-center">
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
        <div className="hero-identity mt-2 flex shrink-0 flex-col gap-1">
          <div className="flex items-end gap-2">
            <h1
              id="portfolio-name"
              className="hero-name text-[48px] leading-12 tracking-tight"
            >
              {portfolio.name}
            </h1>
            <p
              lang="ko"
              className="hero-korean-name font-korean text-[20px tracking-tight"
            >
              <span className="text-muted">·</span> {portfolio.koreanName}
            </p>
          </div>
          <p className="italic">{portfolio.tagline}</p>
        </div>
      </div>
    </section>
  );
}
