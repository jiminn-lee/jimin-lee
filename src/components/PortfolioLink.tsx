import type { PortfolioLink as PortfolioLinkData } from "../content/portfolio";

export function PortfolioLink({ label, href }: PortfolioLinkData) {
  if (!href?.trim()) return <span>{label}</span>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-1 decoration-muted hover:decoration-ink transition-all"
    >
      {label}
    </a>
  );
}
