import type { PortfolioLink as PortfolioLinkData } from "../content/portfolio";

interface PortfolioLinkProps extends PortfolioLinkData {
  showArrow?: boolean;
}

export function PortfolioLink({ label, href, showArrow = false }: PortfolioLinkProps) {
  if (!href?.trim()) return <span>{label}</span>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link underline decoration-1 decoration-muted hover:decoration-ink transition-all"
    >
      {label}
      {showArrow && (
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1 inline-block size-2 align-super text-muted transition-colors group-hover/link:text-ink"
        >
          <path d="M3 9 9 3M3 3h6v6" />
        </svg>
      )}
    </a>
  );
}
