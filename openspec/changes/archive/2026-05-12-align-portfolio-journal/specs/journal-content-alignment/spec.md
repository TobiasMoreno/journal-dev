## ADDED Requirements

### Requirement: "Sobre Mí" IDENTIDAD section SHALL declare 2-year tenure and correct employer

The IDENTIDAD section on `/sobre-mi` SHALL state that Tobias has been building software for 2 years total, with the last year in backend fintech, and SHALL identify the employer as "Techforb, trabajando en Creditú" (not "Credetu" — current typo, nor "Creditú" alone). The dynamic `experience()` signal computing "1 año y 2 meses" SHALL be removed or replaced by a static string.

#### Scenario: Spanish copy

- **WHEN** `/sobre-mi` is rendered with locale `es`
- **THEN** the first sentence of the second paragraph reads: "Soy Tobias Moreno, Backend Engineer en Techforb, trabajando en Creditú — una fintech con foco en crédito digital. Vivo en Córdoba, Argentina, y vengo desarrollando software hace 2 años, el último en backend fintech."

#### Scenario: English copy

- **WHEN** `/sobre-mi` is rendered with locale `en`
- **THEN** the equivalent English sentence references "Techforb, working on Creditú" and "2 years … the last in backend fintech"

#### Scenario: Typo fixed

- **WHEN** the codebase is searched for "Credetu"
- **THEN** no occurrence remains

### Requirement: Hero subtitle SHALL capitalize "Backend Engineer"

The hero subtitle SHALL render "Backend Engineer." (capitalized E) in both locales, matching the capitalization used in the portfolio's hero. The full copy is otherwise unchanged.

#### Scenario: EN hero

- **WHEN** the home page is rendered with locale `en`
- **THEN** the subtitle begins with "Backend Engineer." (not "Backend engineer.")

#### Scenario: ES hero

- **WHEN** the home page is rendered with locale `es`
- **THEN** the subtitle begins with "Backend Engineer." (not "Backend engineer.")

### Requirement: Footer SHALL include a soft CTA line

The footer in `src/app/app.html` SHALL render a line "¿Te resonó algo? Hablemos." between the role line ("Tobias Moreno — Backend Engineer") and the links row (Portfolio · CV · GitHub · LinkedIn · Email). Layout/styling SHALL remain coherent with the existing footer.

#### Scenario: CTA visible

- **WHEN** any page is rendered
- **THEN** the footer contains the text "¿Te resonó algo? Hablemos." between the role line and the links row
