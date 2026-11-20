import { useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const hoverGrowth = 8;
const tileGap = 8;
const fullSizeGalleryWidth = 430;

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
}

export function MasonryGallery({
  images,
}: {
  images: readonly GalleryImage[];
}) {
  const galleryRef = useRef<HTMLUListElement>(null);
  const [galleryWidth, setGalleryWidth] = useState(0);
  const [ratios, setRatios] = useState<Record<string, number>>({});

  useLayoutEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const measure = () => setGalleryWidth(Math.floor(gallery.getBoundingClientRect().width));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  const scale = galleryWidth ? Math.min(1, galleryWidth / fullSizeGalleryWidth) : 1;

  return (
    <ul ref={galleryRef} className="masonry-gallery" aria-label="Personal photo gallery">
      {images.map((image) => {
        const availableWidth = galleryWidth ? galleryWidth - tileGap : image.width;
        const width = Math.max(1, Math.floor(Math.min(image.width * scale, availableWidth)));
        const height = width * (ratios[image.src] ?? 1);

        return (
          <li
            key={image.src}
            style={{
              gridColumn: `span ${width + tileGap}`,
              gridRow: `span ${Math.ceil(height) + tileGap}`,
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={width}
              style={{
                width,
                "--gallery-hover-scale": 1 + hoverGrowth / width,
              } as CSSProperties}
              decoding="async"
              className="outline-muted outline-1"
              onLoad={(event) => {
                const { naturalWidth, naturalHeight } = event.currentTarget;
                if (naturalWidth) {
                  setRatios((current) => ({ ...current, [image.src]: naturalHeight / naturalWidth }));
                }
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
