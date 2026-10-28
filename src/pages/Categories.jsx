import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { categories, groups } from "../content/categories.js";
import "../styles/Content.css";

function Categories() {
  const [search, setSearch] = useState("");
  const q = search.trim().toLowerCase();

  return (
    <>
      <Helmet>
        <title>All Quiz Categories - QuizMaster Learn</title>
        <meta
          name="description"
          content="Browse 55 free quizzes on programming, web development, AI, English, mathematics, science and general knowledge. Every question has an explanation."
        />
        <link rel="canonical" href="https://www.quizmasterlearn.com/categories" />
      </Helmet>

      <div className="content-page">
        <h1>All Quiz Categories</h1>
        <p className="lead">
          Choose a subject to read its study notes and take a quiz. Each of the {categories.length} quizzes has
          multiple choice questions with explanations for every answer.
        </p>
        <input
          type="text"
          placeholder="🔍 Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", maxWidth: 420, padding: 12, fontSize: 16, borderRadius: 10, border: "1px solid #cbd5e1" }}
        />

        {Object.entries(groups).map(([key, g]) => {
          const items = categories.filter(
            (c) => c.group === key && (!q || c.title.toLowerCase().includes(q))
          );
          if (items.length === 0) return null;
          return (
            <section key={key}>
              <h2><Link to={g.path} style={{ color: "inherit", textDecoration: "none" }}>{g.icon} {g.title}</Link></h2>
              <div className="card-grid">
                {items.map((c) => (
                  <Link key={c.slug} to={`/quiz/${c.slug}`} className="content-card">
                    <div className="icon">{c.icon}</div>
                    <h3>{c.title}</h3>
                    <p>{c.questions.length} questions</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
