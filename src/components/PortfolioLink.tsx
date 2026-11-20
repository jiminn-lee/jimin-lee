import type { PortfolioLink as PortfolioLinkData } from "../content/portfolio";

export function PortfolioLink({ label, href }: PortfolioLinkData) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="profile-link underline"
    >
      {label}
    </a>
  );
}
