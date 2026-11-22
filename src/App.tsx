import { useEffect, useState } from "react";
import { Bio } from "./components/Bio";
import { CopyEmail } from "./components/CopyEmail";
import { DetailPanel } from "./components/DetailPanel";
import { PortfolioLink } from "./components/PortfolioLink";
import { portfolio, type DetailId } from "./content/portfolio";
import { Analytics } from "@vercel/analytics/react";

const compactViewport = "(max-width: 900px), (max-height: 700px)";

export function App() {
  const [themeChanges, setThemeChanges] = useState(0);
  const isDark = themeChanges % 2 === 1;
  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);
  const [hoveredDetail, setHoveredDetail] = useState<DetailId | null>(null);
  const [focusedDetail, setFocusedDetail] = useState<DetailId | null>(null);
  const [selectedDetail, setSelectedDetail] = useState<DetailId | null>(null);
  const activeDetail = selectedDetail ?? hoveredDetail ?? focusedDetail;

  useEffect(() => {
    if (!selectedDetail || !window.matchMedia(compactViewport).matches) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(`detail-${selectedDetail}`)?.scrollIntoView({
      block: "nearest",
      behavior: reduceMotion ? "instant" : "smooth",
    });
  }, [selectedDetail]);

  function toggleDetail(id: DetailId) {
    setSelectedDetail((current) => current === id ? null : id);
    setHoveredDetail(null);
    setFocusedDetail(null);
  }
  return (
    <main
      className="portfolio-page relative isolate"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setSelectedDetail(null);
          setHoveredDetail(null);
          setFocusedDetail(null);
        }
      }}
    >
      <h1 className="sr-only">{portfolio.name}</h1>
      <div className="wordmark" aria-hidden="true">
        <img src={portfolio.wordmark} alt="" className="theme-image theme-image-light block max-w-none" />
        <img src={portfolio.darkWordmark} alt="" className="theme-image theme-image-dark block max-w-none" />
      </div>
      <div className="portfolio-content relative z-10 flex flex-col justify-between">
        <header className="intro flex flex-col items-start">
          <button type="button" className="flag shrink-0"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
            onClick={() => setThemeChanges((count) => count + 1)}>
            <span className="flag-artwork" aria-hidden="true">
              <img src={portfolio.flag.stripes} alt="" className="flag-stripes theme-image theme-image-light block max-w-none" />
              <img src={portfolio.flag.darkStripes} alt="" className="flag-stripes theme-image theme-image-dark block max-w-none" />
              <img src={portfolio.flag.center} alt="" className="flag-center block max-w-none" style={{ transform: `rotate(${33.69 + themeChanges * 360}deg)` }} />
            </span>
          </button>
          <Bio activeDetail={activeDetail} selectedDetail={selectedDetail} onToggle={toggleDetail} onHover={setHoveredDetail} onFocus={setFocusedDetail} />
          <nav aria-label="Profile links">
            <ul className="profile-links flex flex-wrap">
              {portfolio.navigation.map((link) => (
                <li key={link.label}><PortfolioLink {...link} /></li>
              ))}
              <li><CopyEmail address={portfolio.email} /></li>
            </ul>
          </nav>
        </header>
        <DetailPanel activeDetail={activeDetail} />
      </div>
       <Analytics />
    </main>
  );
}
