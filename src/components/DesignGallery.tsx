import { portfolio } from "../content/portfolio";

export function DesignGallery() {
  return (
    <ul className="columns-2 gap-2 [&:has(li:hover)_li:not(:hover)]:opacity-75">
      {portfolio.design.images.map((image) => {
        const artwork = (
          <img
            src={image.src}
            alt={image.alt}
            // loading="lazy"
            decoding="async"
            className="block h-auto w-full outline-muted hover:outline-1"
          />
        );

        return (
          <li
            key={image.src}
            className="mb-2 break-inside-avoid transition-opacity last:mb-0"
          >
            {image.href?.trim() ? (
              <a
                href={image.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {artwork}
              </a>
            ) : (
              artwork
            )}
          </li>
        );
      })}
    </ul>
  );
}
