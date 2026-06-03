import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://tobias-moreno.netlify.app';
const POSTS = resolve(__dirname, '..', 'src', 'data', 'posts.es.json');
const OUT = resolve(__dirname, '..', 'public', 'sitemap.xml');

// Static routes mirror src/app/app.routes.ts
const STATIC_ROUTES = ['/', '/posts', '/now', '/about'];

const posts = JSON.parse(await readFile(POSTS, 'utf8'));

// Most recent post date drives lastmod for the listing/home pages.
const latest = posts
  .map((p) => p.date)
  .sort((a, b) => b.localeCompare(a))[0];

const urls = [
  ...STATIC_ROUTES.map((path) => ({ loc: `${SITE_URL}${path}`, lastmod: latest })),
  ...posts.map((post) => ({ loc: `${SITE_URL}/posts/${post.id}`, lastmod: post.date })),
];

const body = urls
  .map(
    ({ loc, lastmod }) =>
      `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

await writeFile(OUT, xml, 'utf8');
console.log(`✔ Wrote ${OUT}`);
console.log(`  ${urls.length} URLs (${STATIC_ROUTES.length} static + ${posts.length} posts)`);
