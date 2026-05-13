import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '..', 'public', 'og-image.png');

const WIDTH = 1200;
const HEIGHT = 630;

const BG = '#0a0a0a';
const FG = '#ededed';
const MUTED = '#888888';
const ACCENT = '#3291ff';
const BORDER = '#1f1f1f';

const FONT_STACK = "'Inter', 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif";

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BG}" />
      <stop offset="100%" stop-color="#050505" />
    </linearGradient>
    <radialGradient id="glow" cx="20%" cy="30%" r="50%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.12" />
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)" />

  <!-- subtle inner border for "card" feel -->
  <rect x="40" y="40" width="${WIDTH - 80}" height="${HEIGHT - 80}" fill="none" stroke="${BORDER}" stroke-width="1" rx="12" />

  <!-- accent dot + label row -->
  <g transform="translate(96, 168)">
    <circle cx="6" cy="-8" r="6" fill="${ACCENT}" />
    <text x="24" y="0" font-family="${FONT_STACK}" font-size="22" font-weight="500" fill="${MUTED}" letter-spacing="2">
      JOURNAL
    </text>
  </g>

  <!-- main title -->
  <text x="96" y="320" font-family="${FONT_STACK}" font-size="104" font-weight="700" fill="${FG}" letter-spacing="-2">
    Tobias Moreno
  </text>

  <!-- subtitle -->
  <text x="96" y="400" font-family="${FONT_STACK}" font-size="40" font-weight="500" fill="${FG}">
    Backend Engineer
    <tspan fill="${MUTED}"> · </tspan>
    <tspan fill="${MUTED}">Documentando la evolución</tspan>
  </text>

  <!-- footer URL -->
  <text x="96" y="${HEIGHT - 80}" font-family="${FONT_STACK}" font-size="22" font-weight="400" fill="${MUTED}">
    tobias-moreno.netlify.app
  </text>
</svg>`;

await mkdir(dirname(OUT), { recursive: true });

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9, quality: 90 })
  .toFile(OUT);

const { size } = await import('node:fs').then((m) => m.promises.stat(OUT));
console.log(`✔ Wrote ${OUT}`);
console.log(`  ${WIDTH}×${HEIGHT}, ${(size / 1024).toFixed(1)} KB`);
