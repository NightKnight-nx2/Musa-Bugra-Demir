# Musa Buğra Demir - Personal Portfolio 🚀

A modern, dynamic, and highly interactive personal portfolio website showcasing my engineering projects, leadership experiences, and technical skills. Built with a dark, neon-infused aesthetic inspired by high-end tech designs and autonomous systems.

## ✨ Key Features

- **Proof first:** featured projects with real figures and measured results, a filterable archive of every repo, and case-study pages (`#/p/<slug>`).
- **Bilingual (TR/EN):** all content lives in `src/data/` as `{ tr, en }` pairs; the language choice is remembered.
- **Content as data:** edit `src/data/content.js` (home page) and `src/data/caseStudies.js` (project pages) · no component changes needed. Values wrapped in `TODO(...)` render as visible amber placeholders until filled in.
- **Accessible & light:** semantic HTML, keyboard focus styles, skip link, `prefers-reduced-motion`, no animation library.
- **SEO:** meta description, Open Graph image (`public/og-image.png`), JSON-LD Person schema.

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** plain CSS with design tokens (`src/index.css`) · Archivo, IBM Plex Sans, IBM Plex Mono
- **Localization:** react-i18next
- **Deployment:** GitHub Pages (`gh-pages`)

## 🚀 Quick Start (Local Development)

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NightKnight-nx2/Musa-Bugra-Demir.git
   cd Musa-Bugra-Demir
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *The app will be available at `http://localhost:5173/`*

## 📦 Deployment

This project is configured to be deployed automatically to GitHub pages. 
Make sure your `vite.config.js` has the correct `base` path setup if you are not using a root domain.

To build and deploy the application:
```bash
npm run deploy
```
*This command runs `npm run build` and then uses the `gh-pages` package to push the `dist` folder to your `gh-pages` branch.*

## 📄 License

© 2026 Musa Buğra Demir. All rights reserved.
