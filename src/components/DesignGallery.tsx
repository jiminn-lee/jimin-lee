import { portfolio } from "../content/portfolio";

export function DesignGallery() {
  return (
    <ul className="grid grid-cols-2 items-start gap-2 [&:has(li:hover)_li:not(:hover)]:opacity-40">
      {portfolio.design.images.map((image) => (
        <li
          key={image.src}
          className={`transition-opacity ${image.isSquare ? "" : "col-span-2"}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className={`block w-full ${image.isSquare ? "aspect-square object-cover" : "h-auto"}`}
          />
        </li>
      ))}
    </ul>
  );
}
