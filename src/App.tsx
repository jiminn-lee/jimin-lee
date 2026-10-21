import { Fragment } from "react";
import { portfolio } from "./content/portfolio";
import { Hero } from "./components/Hero";
import { InformationSection } from "./components/InformationSection";
import { InlineBold } from "./components/InlineBold";
import { PortfolioLink } from "./components/PortfolioLink";
import { DesignGallery } from "./components/DesignGallery";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <main>
        <Hero />
        <div className="portfolio-information mx-auto flex w-full max-w-[362px] flex-col gap-32 px-4 pb-32 sm:max-w-[547px] sm:px-0">
          <InformationSection id="about" {...portfolio.about}>
            <div className="space-y-7 sm:space-y-[31px]">
              {portfolio.about.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  <InlineBold text={paragraph} />
                </p>
              ))}
            </div>
          </InformationSection>
          <InformationSection id="experience" {...portfolio.experience}>
            <ul className="space-y-7 sm:space-y-[31px]">
              {portfolio.experience.entries.map((entry) => (
                <li key={entry.title}>
                  <h4 className="text-muted text-sm">{entry.date}</h4>
                  <h3 className="font-bold">{entry.title}</h3>
                  <p>{entry.description}</p>
                </li>
              ))}
            </ul>
          </InformationSection>
          <InformationSection id="projects" {...portfolio.projects}>
            <ul className="space-y-7 sm:space-y-[31px]">
              {portfolio.projects.entries.map((entry) => (
                <li key={entry.title}>
                  <h3 className="font-bold">
                    <PortfolioLink
                      label={entry.title}
                      href={entry.href}
                      showArrow
                    />
                  </h3>
                  <p>{entry.description}</p>
                </li>
              ))}
            </ul>
          </InformationSection>
          <InformationSection id="design" {...portfolio.design}>
            <DesignGallery />
          </InformationSection>
          <InformationSection id="skills" {...portfolio.skills}>
            <p className="[&:has(.skill-label:hover)_.skill-label:not(:hover)]:text-muted">
              {portfolio.skills.items.map((skill, index) => (
                <Fragment key={skill}>
                  {index > 0 && <span className="text-muted"> · </span>}
                  <span className="skill-label transition-colors">{skill}</span>
                </Fragment>
              ))}
            </p>
          </InformationSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
