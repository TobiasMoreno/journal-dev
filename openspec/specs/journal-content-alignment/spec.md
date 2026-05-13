# Journal Content Alignment Specification

## Purpose

Cubre el copy de identidad (página "Sobre Mí", hero, footer) y su consistencia con la identidad madre (Backend & Product Engineer en Techforb/Creditú) y con el portfolio hermano.

## Requirements

### Requirement: "Sobre Mí" IDENTIDAD section SHALL declare 2-year tenure and correct employer

The IDENTIDAD section on `/sobre-mi` SHALL state that Tobias has been building software for 2 years total, with the last year in backend fintech, and SHALL identify the employer as "Techforb, trabajando en Creditú". The dynamic `experience()` signal computing "1 año y 2 meses" SHALL be removed.

#### Scenario: Spanish copy

- **WHEN** `/sobre-mi` is rendered with locale `es`
- **THEN** the first sentence of the second paragraph reads: "Soy Tobias Moreno, Backend Engineer en Techforb, trabajando en Creditú — una fintech con foco en crédito digital. Vivo en Córdoba, Argentina, y vengo desarrollando software hace 2 años, el último en backend fintech."

#### Scenario: English copy

- **WHEN** `/sobre-mi` is rendered with locale `en`
- **THEN** the equivalent English sentence references "Techforb, working on Creditú" and "2 years, the last one in backend fintech"

#### Scenario: Employer name correctly spelled

- **WHEN** the codebase is searched for "Credetu" or "Creditu" (without accent) in user-facing copy
- **THEN** no occurrence remains; only "Creditú" (with accent) is used

### Requirement: Hero subtitle SHALL capitalize "Backend Engineer"

The hero subtitle SHALL render "Backend Engineer." (capitalized E) in both locales, matching the capitalization used in the portfolio's hero. The full copy is otherwise unchanged.

#### Scenario: EN hero

- **WHEN** the home page is rendered with locale `en`
- **THEN** the subtitle begins with "Backend Engineer." (not "Backend engineer.")

#### Scenario: ES hero

- **WHEN** the home page is rendered with locale `es`
- **THEN** the subtitle begins with "Backend Engineer." (not "Backend engineer.")

### Requirement: Footer SHALL include a soft CTA line

The footer in `src/app/app.html` SHALL render a CTA line between the role line ("Tobias Moreno — Backend Engineer") and the links row (Portfolio · CV · GitHub · LinkedIn · Email). The CTA SHALL be locale-aware via the `footer.cta` translation key. Default copy: "¿Te resonó algo? Hablemos." (ES) / "Did anything resonate? Let's talk." (EN).

#### Scenario: CTA visible (ES)

- **WHEN** any page is rendered with locale `es`
- **THEN** the footer contains the text "¿Te resonó algo? Hablemos." between the role line and the links row

#### Scenario: CTA visible (EN)

- **WHEN** any page is rendered with locale `en`
- **THEN** the footer contains the text "Did anything resonate? Let's talk." between the role line and the links row
