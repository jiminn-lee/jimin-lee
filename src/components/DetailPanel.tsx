import { MasonryGallery } from "./MasonryGallery";
import { portfolio, type DetailId, type ProjectId } from "../content/portfolio";

export function DetailPanel({ activeDetail }: { activeDetail: DetailId | null }) {
  return (
    <div className="detail-slot" aria-live="polite">
      <figure
        id="detail-portrait"
        data-active={activeDetail === "portrait"}
        aria-hidden={activeDetail !== "portrait"}
        inert={activeDetail !== "portrait"}
      >
        <MasonryGallery images={portfolio.gallery} />
      </figure>
      {(Object.keys(portfolio.details) as ProjectId[]).map((id) => {
        const detail = portfolio.details[id];
        return (
          <section
            key={id}
            id={`detail-${id}`}
            aria-labelledby={`detail-title-${id}`}
            data-active={activeDetail === id}
            aria-hidden={activeDetail !== id}
            inert={activeDetail !== id}
            className="project-detail flex flex-col gap-6"
          >
            <header>
              <h2 id={`detail-title-${id}`}>{detail.title}</h2>
              <p className="project-role">
                {detail.role}{" "}<span className="text-muted">({detail.period})</span>
              </p>
            </header>
            <div className="flex flex-col gap-2">
              <p className="project-description">{detail.description}</p>
              <p className="project-technologies">{detail.technologies}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
