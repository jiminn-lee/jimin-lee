import { portfolio } from "../content/portfolio";

export function DesignGallery() {
  return (
    <ul className="grid grid-cols-2 items-start gap-2 [&:has(li:hover)_li:not(:hover)]:opacity-40">
      {portfolio.design.images.map((image) => {
        const artwork = (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className={`block w-full ${image.isSquare ? "aspect-square object-cover" : "h-auto"}`}
          />
        );

        return (
          <li
            key={image.src}
            className={`transition-opacity ${image.isSquare ? "" : "col-span-2"}`}
          >
            {image.href?.trim() ? (
              <a
                href={image.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
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
