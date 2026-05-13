# Journal SEO Specification

## Purpose

Cubre los meta tags globales del sitio, el SEO dinámico por post (title/description/Open Graph/Twitter/article schema) y el asset `og-image.png` que se usa como fallback para previews en plataformas sociales y de mensajería.

## Requirements

### Requirement: Global SEO meta tags SHALL be present in the document head

`src/index.html` SHALL declare a complete set of baseline SEO meta tags so that any link to the site root produces a rich preview in social/messaging platforms (LinkedIn, WhatsApp, Slack, X).

#### Scenario: Required meta tags exist

- **WHEN** `src/index.html` is parsed
- **THEN** the following tags exist with non-empty content:
  - `meta[name=description]`
  - `meta[property=og:type]` (= `website`)
  - `meta[property=og:title]`
  - `meta[property=og:description]`
  - `meta[property=og:url]` (= `https://tobias-moreno.netlify.app`)
  - `meta[property=og:image]` (= `https://tobias-moreno.netlify.app/og-image.png`)
  - `meta[name=twitter:card]` (= `summary_large_image`)
  - `meta[name=twitter:title]`
  - `meta[name=twitter:description]`
  - `meta[name=twitter:image]`

#### Scenario: Site preview in WhatsApp/LinkedIn

- **WHEN** the URL `https://tobias-moreno.netlify.app` is pasted in WhatsApp Web or LinkedIn
- **THEN** a preview card with title, description and image is rendered (manual validation, not unit test)

### Requirement: Per-post SEO SHALL be injected dynamically at route navigation

When a user navigates to a post route, the document `<title>` and SEO meta tags SHALL be updated to reflect that post's title, description, publication date, author and tags. A dedicated Angular service (`SeoService`) using `@angular/platform-browser`'s `Meta` and `Title` SHALL encapsulate this.

#### Scenario: Post route updates title

- **WHEN** the user navigates to a post route
- **THEN** `document.title` becomes `"<post.title> — Tobias Moreno"`

#### Scenario: Post route updates Open Graph

- **WHEN** the user navigates to a post route
- **THEN** the following meta tags are updated to the post's values:
  - `meta[name=description]` ← `post.summary`
  - `meta[property=og:title]` ← `post.title`
  - `meta[property=og:description]` ← `post.summary`
  - `meta[property=og:type]` ← `"article"`
  - `meta[property=article:published_time]` ← `post.date` (ISO 8601)
  - `meta[property=article:author]` ← `"Tobias Moreno"`
  - `meta[property=article:tag]` ← comma-joined `post.tags`

#### Scenario: Returning to home resets meta

- **WHEN** the user navigates from a post back to the home/root route
- **THEN** the meta tags revert to the global defaults declared in `index.html`

### Requirement: og-image asset SHALL exist as a 1200×630 PNG fallback

A static asset SHALL exist at `public/og-image.png` (1200×630 px, < 300 KB, PNG) with the text "Tobias Moreno" and subtitle "Backend Engineer · Documentando la evolución" on a dark, minimal background coherent with the journal's design system. The asset is regenerable via `npm run og-image` (script at `scripts/generate-og-image.mjs` using `sharp` + SVG).

#### Scenario: File present

- **WHEN** the build output is inspected
- **THEN** `og-image.png` is served at `/og-image.png` with `Content-Type: image/png`

#### Scenario: Dimensions

- **WHEN** the image metadata is read
- **THEN** width is 1200 px and height is 630 px

### Requirement: Post data SHALL include all fields required by SEO

Each entry in `public/data/posts.en.json` and `public/data/posts.es.json` SHALL include `title`, `summary` (used as description), `date` (ISO 8601), and `tags` (array of strings). Entries missing any of these fields SHALL fail an integrity check.

#### Scenario: All posts valid

- **WHEN** the post JSON files are loaded
- **THEN** every entry has non-empty `title`, `summary`, `date`, and a `tags` array (may be empty array but must exist)
