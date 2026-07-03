# Muhammad Talha Rauf — Portfolio

A performance-first, single-page portfolio built with **React + Vite**. No animation libraries, no bloated UI kits — just clean React, hand-written CSS, and the native `IntersectionObserver` API for scroll animations.

**Live demo:** [https://talha-cmd-portfolio.vercel.app/](https://talha-cmd-portfolio.vercel.app/)

---

## ✨ Features

- **Fast by default** — no Framer Motion or component libraries. Production build is ~64 KB JS / ~3.5 KB CSS (gzipped).
- **Fully responsive** — collapses gracefully from desktop down to small phones, including a slide-in mobile nav.
- **Smooth scroll-reveal animations** powered by `IntersectionObserver`, not a library.
- **Respects accessibility preferences** — honors `prefers-reduced-motion` and includes a skip-to-content link, visible focus states, and semantic HTML.
- **Terminal-style hero visual** — an animated "typing" code block that introduces the developer, built entirely in CSS keyframes.
- **Sections**: Hero, About, Skills, Experience, Projects, Education, Contact.

---

## 🛠 Tech Stack

| Layer      | Choice                                   |
| ---------- | ----------------------------------------- |
| Framework  | React 18 + Vite                           |
| Styling    | Plain CSS with custom properties (no Tailwind/SCSS) |
| Animation  | CSS keyframes + native `IntersectionObserver` |
| Fonts      | Space Grotesk (headings), Inter (body), JetBrains Mono (code/labels) — loaded via Google Fonts with `preconnect` + `font-display: swap` |

---

## 📁 Project Structure

```
portfolio/
├── index.html          # HTML shell, meta tags, font preconnects
├── src/
│   ├── main.jsx          # React entry point
│   ├── App.jsx            # All sections + content data
│   └── App.css            # All styles (design tokens, layout, responsive rules)
└── public/                # Static assets (favicon, etc.)
```

Everything is deliberately kept in **two source files** (`App.jsx` and `App.css`) so the project stays easy to read and edit — no scattered component folders.

---

## 🚀 Getting Started

### 1. Clone / copy the project

```bash
git clone https://github.com/talhaw-cmd/<repo-name>.git
cd <repo-name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 4. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy anywhere static (Vercel, Netlify, GitHub Pages, Railway).

### 5. Preview the production build locally (optional)

```bash
npm run preview
```

---

## ✏️ Customizing Content

All editable content lives at the top of **`src/App.jsx`** in a few plain JavaScript objects/arrays — no need to touch JSX to update text:

| Constant         | Controls                                          |
| ----------------- | -------------------------------------------------- |
| `PROFILE`         | Name, role, location, email, phone, social links   |
| `SKILLS`          | Skill categories and tags                          |
| `EXPERIENCE`      | Timeline entries (role, org, bullet points)        |
| `PROJECTS`        | Project cards (name, tag, stack, description, link)|
| `EDUCATION`       | Degree, school, coursework                         |
| `NAV_LINKS`       | Header navigation items                            |
| `TERMINAL_LINES`  | Lines shown in the animated hero terminal          |

Update the values in these objects and the whole page reflects the change — no styling knowledge required.

### Changing colors

All colors are CSS custom properties defined at the top of `App.css`:

```css
:root {
  --bg: #0a0f0d;         /* page background */
  --accent: #3ecf8e;      /* primary teal-green accent */
  --accent-dim: #2a9d6f;  /* muted accent (borders, hover) */
  --text: #edf5f1;        /* primary text */
  --text-muted: #8fa39b;  /* secondary text */
}
```

Change these once and the whole site updates consistently.

---

## 📱 Responsive Breakpoints

| Width       | Behavior                                                          |
| ----------- | -------------------------------------------------------------------|
| `> 960px`   | Full desktop layout, two-column hero                              |
| `≤ 960px`   | Hero stacks vertically, skills/projects reflow to fewer columns   |
| `≤ 720px`   | Mobile nav becomes a slide-in drawer                               |
| `≤ 420px`   | Buttons go full-width, tighter section padding                    |

---

## 📦 Deployment

The site is a static build — deploy the `dist/` folder to any static host:

- **Vercel**: `vercel --prod` (or connect the GitHub repo for auto-deploys)
- **Netlify**: drag-and-drop the `dist/` folder, or connect the repo
- **GitHub Pages**: build, then push `dist/` to a `gh-pages` branch

---

## 📬 Contact

- **Email**: 123mtalha789@gmail.com
- **LinkedIn**: [linkedin.com/in/talha-rauf-9244a23a0](https://www.linkedin.com/in/talha-rauf-9244a23a0/)
- **GitHub**: [github.com/talhaw-cmd](https://github.com/talhaw-cmd/)

---

## 📄 License

This project is personal portfolio code belonging to Muhammad Talha Rauf. Feel free to reference the structure for learning purposes, but please don't republish the content as your own.