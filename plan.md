# Data Science Portfolio Website Plan

Build a single-page portfolio website for a Data Scientist, inspired by the provided image (black, white, and peach color palette) and the "Data Driven" theme.

## Scope Summary
- **Hero Section**: Large visual impact using the provided image, including a catchy "Data Driven" headline.
- **About Me**: Brief professional background focused on data science.
- **Skills/Expertise**: Visual representation of data tools (Python, SQL, R, Tableau, etc.).
- **Projects**: Gallery or list of key data science projects with descriptions and links.
- **Experience/Education**: Timeline or simple list of career highlights.
- **Contact**: Simple contact form or social links.
- **Design**: Minimalist, clean, using black, white, and peach accents.

## Non-Goals
- Server-side data persistence (no database).
- Real email sending (client-side simulation or mailto only).
- Multi-page navigation (it's a single-page site).

## Assumptions & Open Questions
- **Image Asset**: The provided image `-ig5q1e.jpg` will be used as the primary hero/about element.
- **Content**: Generic but professional data science placeholder text will be used where specific details aren't provided.

## Affected Areas
- **Frontend**: `src/App.tsx`, `src/index.css`, and new component files.
- **Assets**: Public/Assets folder for the provided image.
- **Theme**: Tailwind configuration via `src/index.css` variables for the peach/black/white palette.

## Technical Requirements
- **Framework**: React + Vite (already present).
- **Styling**: Tailwind CSS 4.0.
- **Components**: Shadcn UI (already present in `src/components/ui`).
- **Icons**: Lucide React.
- **Animations**: Framer Motion (if available) or standard CSS transitions.

## Implementation Phases

### Phase 1: Foundation & Theme (quick_fix_engineer)
- Update `src/index.css` to define the peach accent color based on the image inspiration.
- Define basic layout wrapper in `src/App.tsx`.
- Deliverable: Updated CSS variables and layout structure.

### Phase 2: Hero & About Sections (frontend_engineer)
- Implement the Hero section using the provided image.
- Add the "Data Driven" headline and introduction text.
- Create the "About Me" section layout.
- Deliverable: Visual "top of fold" experience.

### Phase 3: Content Sections (frontend_engineer)
- **Skills**: Create a grid or badge-based skills section.
- **Projects**: Build a card-based project gallery using Shadcn UI `Card` components.
- **Timeline**: Simple vertical list for Experience/Education.
- Deliverable: Full scrollable content sections.

### Phase 4: Contact & Footer (quick_fix_engineer)
- Implement a contact section with links (LinkedIn, GitHub, Email).
- Add a simple footer.
- Deliverable: Completed page footer and contact area.

### Phase 5: Polish & Responsiveness (frontend_engineer)
- Ensure the site is fully responsive (mobile, tablet, desktop).
- Add scroll animations (Fade-ins).
- Finalize styling consistency.
- Deliverable: Production-ready single-page portfolio.
