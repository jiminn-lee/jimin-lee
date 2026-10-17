# Jimin Lee — Portfolio

A desktop portfolio built with React, TypeScript, Vite, and Tailwind CSS. It follows the [supplied Figma design](https://www.figma.com/design/m8hHk2MBeIp17UYQm0tXr4/Untitled?node-id=1-122).

## Run locally

Use Node.js 22.12 or later; this project was verified with Node.js 24 and npm 11. From this folder:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://127.0.0.1:5173/`. Stop the server with Ctrl+C.

## Check and build

```sh
npm run typecheck
npm run build
npm run preview
```

The build also runs the TypeScript check. Production files are written to `dist/`. The preview command serves that production build locally. Relative asset paths allow the build to be hosted under a subdirectory.

## Content and links

About paragraphs are plain strings. Wrap any phrase in `**double asterisks**` to make it bold, for example: `"**Computer Science** student at the **University of Illinois Urbana-Champaign**."` Keep one string per paragraph; line wrapping is handled by the browser. This supports bold emphasis only, not general Markdown or HTML.

Edit `src/content/portfolio.ts` to change the name, bilingual headings, text, experience, projects, skills, image descriptions, footer caption, or album order.

Footer albums have optional `href` fields. Add a URL to make a cover open it in a new tab; empty values leave the cover unlinked. Every cover is 78 × 78px. Hovering one fades the other covers to 40% opacity.

The Resume, LinkedIn, and GitHub entries have optional `href` fields. Add a destination to enable each link. Items without a destination remain ordinary text, with no placeholder navigation. Links open in the same tab and have hover and keyboard-focus styles.

For a local resume, create `public/`, place `resume.pdf` there, and set the Resume entry to:

```ts
{ label: 'Resume', href: './resume.pdf' }
```

For LinkedIn and GitHub, add your complete profile URL to the corresponding entry's `href` field. Update the title and description in `index.html` if you change the portfolio identity.

## Layout

- The hero occupies exactly one viewport height. The 626px links/portrait/name block is centered vertically, with the flag positioned independently above it. The portrait stays 330 × 440 at 1440 × 900 and 1920 × 1080.
- At shorter desktop heights, the flag gap reduces toward 32px and the portrait shrinks proportionally. The main block remains centered, with readable text and at least 32px above the flag.
- The information area uses a 547px grid: 153px labels, a 64px gap, and 330px content. Sections are spaced 100px apart.
- The updated Figma copy is retained, including `경력` under Experience and the Skills / `기술` section after Design. Gallery images and album covers are static.
- Each design image has an `isSquare` boolean in the content file. `true` fills one square cell with `object-cover`; `false` spans both columns at the image's natural height. Helmet Game is marked square. Rows fit their images, and array order does not determine sizing.
- The compact footer places the copyright caption above the album covers, with a 10px gap and 10px top/bottom padding.
- Mobile layout, animations, a backend, routing, and deployment are outside this version's scope.

The page uses semantic sections and headings. `InformationSection` shares the bilingual section structure, while the hero, gallery, and footer are independent components. Tailwind handles layout and typography; `src/styles.css` contains font registration, design tokens, the hero height calculation, and the portrait grain effect.

## Assets

All 13 original image/SVG assets are bundled in `src/assets/images/`. The original flag SVG appears above the main hero block, with its intrinsic dimensions preserved, and serves as the favicon. No temporary Figma URLs are used at runtime.

Michelangelus regular, bold, and italic, plus Jeju Myeongjo, are bundled in `src/assets/fonts/` from the fonts supplied on the design machine. The portrait's original image is unchanged; a procedural CSS overlay recreates its white grain effect. Below-the-fold images load lazily.

The grain texture is defined globally as `--image-grain` in `src/styles.css`. To reuse the portrait effect, add `image-grain` to an image's wrapper (not the `<img>` itself):

```tsx
<div className="image-grain">
  <img src={image.src} alt={image.alt} className="block w-full" />
</div>
```

Keep the wrapper fitted to the image. The overlay covers that wrapper and lets pointer events pass through, so links and hover effects still work.

## Verification

TypeScript checking and the production build pass. Browser checks cover 1920 × 1080, 1440 × 900, 1440 × 768, and 1440 × 600, including the main hero block's vertical midpoint, all 13 image placements, all four font faces, updated copy, and absence of browser errors. Gallery checks verify square cells, full-width non-square images, natural row heights, the Helmet Game square override, and hover opacity. Hero positioning intentionally centers the links/portrait/name block separately from the flag. The portrait grain is a browser rendering of Figma's noise effect, so individual noise pixels can differ.
