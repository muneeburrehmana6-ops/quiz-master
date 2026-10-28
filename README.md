# QuizMaster Learn

React + Vite quiz site.

## Build and deploy

    npm install
    npm run build      # vite build + scripts/prerender.mjs
    # deploy the dist/ folder

`npm run build` also pre-renders ~75 static HTML pages (quiz study pages, articles, hubs) and regenerates
`sitemap.xml`, so crawlers (Google / AdSense) can read the content without running JavaScript.
Your host must serve `dist/<route>/index.html` for each route and fall back to `/index.html` for unknown URLs.

## Content

- `src/content/categoryInfo.js` – overview, topics and study tip shown on every quiz page
- `src/content/articles.js` – blog articles
- `src/content/categories.js` – joins category info with the question files in `src/data` and `src/programming`
- To add a quiz: add the question file, add its entry in `categoryInfo.js`, import it in `categories.js`.
- `current-affairs` is set to noindex in `categories.js`; review/refresh it, then remove it from `noindexSlugs`.

## Routes

- `/quiz/:slug` – public study page (overview + all questions with answers and explanations)
- `/quiz/:slug/play` – timed quiz (no login required; login only saves history)
