[jimin-lee.com](https://jimin-lee.com)

## Wireframe 4

Desktop rebuild of [Wireframe 4 in Figma](https://www.figma.com/design/m8hHk2MBeIp17UYQm0tXr4/Portfolio?node-id=19-39), using React, TypeScript, Vite, and Tailwind CSS.

```sh
npm install
npm run dev
npm run build
npm run preview
```

The build includes TypeScript checking. Deploy the generated `dist/` directory.

Hover or tap the first bio sentence to show the portrait and album gallery. The other bio items show their project details. Clicking or tapping pins the details until the same item or a different item is selected. Keyboard focus previews a detail, Enter and Space pin it, and Escape dismisses it. The arrow beside Tino Lockers opens its repository in a new tab. The initial state has no detail panel visible.

Edit `src/content/portfolio.ts` for profile destinations and detail-panel copy. The resume is imported as an asset so Vite bundles a working production URL. EB Garamond loads from Google Fonts (regular 400 and italic 600). The flag and name graphic are the original exported SVGs; the portrait matches the Figma asset exactly.

The desktop reference is 1440 × 1024 with 100px page padding, an 800px bio, and 600px detail panels. Smaller screens use fluid widths and tighter spacing. The wordmark scales below about 995px wide and on short viewports while keeping its intentional crop in the bottom-right corner. The intro and wordmark fade in on load, and details crossfade on interaction. Reduced-motion preferences disable these effects.
