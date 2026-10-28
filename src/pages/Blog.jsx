import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { articles } from "../content/articles.js";
import "../styles/Content.css";

function Blog() {
  return (
    <>
      <Helmet>
        <title>Study Guides & Articles - QuizMaster Learn</title>
        <meta
          name="description"
          content="Study guides and articles on programming, AI, English and general knowledge to help you learn faster and prepare for exams."
        />
        <link rel="canonical" href="https://www.quizmasterlearn.com/blog" />
      </Helmet>
      <div className="content-page">
        <h1>Study Guides & Articles</h1>
        <p className="lead">Short, practical guides that explain key ideas and show how to study more effectively.</p>
        <div className="card-grid">
          {articles.map((a) => (
            <Link key={a.slug} to={`/blog/${a.slug}`} className="content-card">
              <div className="meta">{a.category} · {a.date}</div>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
