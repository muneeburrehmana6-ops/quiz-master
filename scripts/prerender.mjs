// Post-build step: writes a real HTML file (title, description, canonical and readable
// content) for every public route, so crawlers see the content without running JavaScript.
// React replaces this content as soon as the app loads. Also regenerates sitemap.xml.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { categories, groups } from "../src/content/categories.js";
import { articles } from "../src/content/articles.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE = "https://www.quizmasterlearn.com";
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const nav = `<nav><a href="/">Home</a> | <a href="/categories">Quizzes</a> | <a href="/blog">Articles</a> | <a href="/about">About</a> | <a href="/contact">Contact</a></nav>`;
const footer = `<footer><p>${Object.values(groups).map((g) => `<a href="${g.path}">${esc(g.title)}</a>`).join(" | ")}</p><p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms</a> | <a href="/disclaimer">Disclaimer</a></p></footer>`;

const pages = [];
function add(p, { title, description, body, noindex = false, inSitemap = true, priority = "0.7" }) {
  pages.push({ path: p, title, description, body, noindex, inSitemap: inSitemap && !noindex, priority });
}

// ---- static pages ----
add("/", {
  title: "QuizMaster Learn - Free Quizzes with Explanations",
  description: "Free online quizzes with explanations on programming, web development, AI, English, mathematics, science and general knowledge.",
  priority: "1.0",
  body: `<h1>QuizMaster Learn</h1><p>Free quizzes with explanations on programming, AI, English, mathematics, science and general knowledge. ${categories.length} quizzes, each with a study page and an explanation for every answer.</p>` +
    Object.entries(groups).map(([k, g]) => `<h2><a href="${g.path}">${esc(g.title)}</a></h2><p>${esc(g.intro)}</p>`).join("") +
    `<h2>Latest articles</h2><ul>${articles.map((a) => `<li><a href="/blog/${a.slug}">${esc(a.title)}</a></li>`).join("")}</ul>`,
});

add("/categories", {
  title: "All Quiz Categories - QuizMaster Learn",
  description: "Browse 55 free quizzes on programming, web development, AI, English, mathematics, science and general knowledge. Every question has an explanation.",
  priority: "0.9",
  body: `<h1>All Quiz Categories</h1>` + Object.entries(groups).map(([k, g]) =>
    `<h2><a href="${g.path}">${esc(g.title)}</a></h2><ul>${categories.filter((c) => c.group === k).map((c) => `<li><a href="/quiz/${c.slug}">${esc(c.title)}</a> - ${c.questions.length} questions</li>`).join("")}</ul>`).join(""),
});

for (const [k, g] of Object.entries(groups)) {
  const items = categories.filter((c) => c.group === k);
  add(g.path, {
    title: `${g.title} Quizzes | QuizMaster Learn`,
    description: `${items.length} free ${g.title} quizzes with answers and explanations.`,
    priority: "0.8",
    body: `<h1>${esc(g.title)}</h1><p>${esc(g.intro)}</p><ul>${items.map((c) => `<li><a href="/quiz/${c.slug}">${esc(c.title)}</a>: ${esc(c.topics.slice(0, 3).join(", "))}</li>`).join("")}</ul>`,
  });
}

add("/blog", {
  title: "Study Guides & Articles - QuizMaster Learn",
  description: "Study guides and articles on programming, AI, English and general knowledge to help you learn faster and prepare for exams.",
  priority: "0.8",
  body: `<h1>Study Guides &amp; Articles</h1><ul>${articles.map((a) => `<li><a href="/blog/${a.slug}">${esc(a.title)}</a> - ${esc(a.description)}</li>`).join("")}</ul>`,
});

for (const a of articles) {
  const content = a.body.map((b) => typeof b === "string" ? `<p>${esc(b)}</p>` : b.h ? `<h2>${esc(b.h)}</h2>` : `<ul>${b.ul.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`).join("");
  add(`/blog/${a.slug}`, {
    title: `${a.title} | QuizMaster Learn`,
    description: a.description,
    priority: "0.7",
    body: `<article><h1>${esc(a.title)}</h1><p>By QuizMaster Learn Team, ${a.date}</p>${content}</article>`,
  });
}

// ---- quiz study pages ----
for (const c of categories) {
  const qa = c.questions.map((q, i) =>
    `<div><h3>${i + 1}. ${esc(q.question)}</h3><ol>${q.options.map((o) => `<li>${esc(o)}</li>`).join("")}</ol><p><strong>Answer: ${esc(q.answer)}</strong></p><p>${esc(q.explanation)}</p></div>`).join("");
  add(`/quiz/${c.slug}`, {
    title: `${c.title} Quiz with Answers & Explanations | QuizMaster Learn`,
    description: `Practice ${c.title} with ${c.questions.length} multiple choice questions. Every answer includes an explanation. Read the study notes, then take the timed quiz free.`,
    noindex: c.noindex,
    priority: "0.8",
    body: `<h1>${esc(c.title)} Quiz</h1><p>${esc(c.overview)}</p><h2>What this quiz covers</h2><ul>${c.topics.map((t) => `<li>${esc(t)}</li>`).join("")}</ul><p><strong>Study tip:</strong> ${esc(c.tip)}</p><h2>Questions, answers and explanations</h2>${qa}<p><a href="/quiz/${c.slug}/play">Take the timed quiz</a></p>`,
  });
}

// ---- trust pages (short summaries; full text is rendered by the app) ----
const trust = [
  ["/about", "About QuizMaster Learn", "Learn about QuizMaster Learn: free quizzes with explanations, how our content is made and how to report a mistake.", "<h1>About QuizMaster Learn</h1><p>QuizMaster Learn offers free multiple choice quizzes with a written explanation for every answer, plus study pages and articles. If you find a mistake, email support@quizmasterlearn.com.</p>"],
  ["/contact", "Contact QuizMaster Learn - Get in Touch", "Contact QuizMaster Learn for questions, suggestions, feedback, and corrections.", "<h1>Contact Us</h1><p>Email: support@quizmasterlearn.com</p>"],
  ["/privacy-policy", "Privacy Policy - QuizMaster Learn", "How QuizMaster Learn handles information, cookies and Google AdSense advertising.", "<h1>Privacy Policy</h1><p>This policy explains what information QuizMaster Learn collects, how cookies and Google AdSense advertising are used, and how you can manage your choices.</p>"],
  ["/terms", "Terms & Conditions - QuizMaster Learn", "Terms and conditions for using QuizMaster Learn.", "<h1>Terms &amp; Conditions</h1><p>The terms that apply when you use QuizMaster Learn.</p>"],
  ["/disclaimer", "Disclaimer - QuizMaster Learn", "Educational purpose, content accuracy and limitations of information on QuizMaster Learn.", "<h1>Disclaimer</h1><p>QuizMaster Learn content is provided for educational purposes.</p>"],
];
for (const [p, title, description, body] of trust) add(p, { title, description, body, priority: "0.5" });

// ---- write files ----
function render(page) {
  const url = SITE + (page.path === "/" ? "/" : page.path);
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`);
  html = html.replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${esc(page.description)}" />`);
  html = html.replace(/<meta\s+name="robots"[\s\S]*?\/>/, `<meta name="robots" content="${page.noindex ? "noindex, follow" : "index, follow"}" />`);
  html = html.replace(/<link\s+rel="canonical"[\s\S]*?\/>/, `<link rel="canonical" href="${url}" />`);
  html = html.replace(/<meta\s+property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${esc(page.title)}" />`);
  html = html.replace(/<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${esc(page.description)}" />`);
  html = html.replace(/<meta\s+property="og:url"[\s\S]*?\/>/, `<meta property="og:url" content="${url}" />`);
  html = html.replace('<div id="root"></div>', `<div id="root"><main>${nav}${page.body}${footer}</main></div>`);
  return html;
}

for (const page of pages) {
  const dir = page.path === "/" ? dist : path.join(dist, page.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), render(page));
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  pages.filter((p) => p.inSitemap).map((p) => `  <url>\n    <loc>${SITE}${p.path === "/" ? "/" : p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p.priority}</priority>\n  </url>`).join("\n") + `\n</urlset>\n`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(root, "public", "sitemap.xml"), sitemap);

console.log(`Prerendered ${pages.length} pages, ${pages.filter((p) => p.inSitemap).length} in sitemap.`);
