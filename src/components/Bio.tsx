import type { ReactNode } from "react";
import { portfolio, type DetailId, type ProjectId, type ProjectDetail } from "../content/portfolio";

interface BioProps {
  activeDetail: DetailId | null;
  selectedDetail: DetailId | null;
  onToggle: (id: DetailId) => void;
  onHover: (id: DetailId | null) => void;
  onFocus: (id: DetailId | null) => void;
}

export function Bio({ activeDetail, selectedDetail, onToggle, onHover, onFocus }: BioProps) {
  function trigger(id: DetailId, children: ReactNode) {
    return (
      <span
        role="button"
        tabIndex={0}
        aria-controls={`detail-${id}`}
        aria-expanded={activeDetail === id}
        aria-pressed={selectedDetail === id}
        data-active={activeDetail === id}
        className={`bio-trigger ${id === "portrait" ? "bio-introduction" : "underline"}`}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") onHover(id);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") onHover(null);
        }}
        onFocus={() => onFocus(id)}
        onBlur={() => onFocus(null)}
        onClick={(event) => {
          event.currentTarget.focus();
          onToggle(id);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggle(id);
          }
        }}
      >
        {children}
      </span>
    );
  }
  function project(id: ProjectId) {
    const detail: ProjectDetail = portfolio.details[id];
    if (!detail.href) return trigger(id, detail.title);

    return (
      <span className="bio-project" data-active={activeDetail === id}>
        {trigger(id, detail.title)}
        <a
          href={detail.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open the ${detail.title} repository`}
          className="bio-project-link"
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") onHover(id);
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") onHover(null);
          }}
          onFocus={() => onFocus(id)}
          onBlur={() => onFocus(null)}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9 9 3M3 3h6v6" />
          </svg>
        </a>
      </span>
    );
  }
  return (
    <p className="bio">
      {trigger("portrait", <><em>Developer</em>, <em>designer</em>, {portfolio.introduction}</>)}
      {" Full-stack development at "}{project("hack4impact")}{" and "}
      {project("artify4kids")}{". Previously at "}{project("yearbookpro")}
      {". I also made  "}{project("tino-lockers")}{"."}
    </p>
  );
}
