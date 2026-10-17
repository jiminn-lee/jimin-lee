import { portfolio } from "../content/portfolio";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 py-2">
      <p className="whitespace-pre text-center text-[10px] leading-4">
        {portfolio.footer.caption}
      </p>
      <ul
        aria-label="Album covers"
        className="flex w-full items-start justify-center gap-2 [&:has(li:hover)_li:not(:hover)]:opacity-40"
      >
        {portfolio.footer.albums.map((album) => {
          const cover = (
            <img
              src={album.src}
              alt={album.alt}
              width={78}
              height={78}
              loading="lazy"
              decoding="async"
              className="block size-14 object-cover"
            />
          );

          return (
            <li key={album.src} className="shrink-0 transition-opacity">
              {album.href?.trim() ? (
                <a
                  href={album.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                >
                  {cover}
                </a>
              ) : (
                cover
              )}
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
