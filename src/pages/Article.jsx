import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { getArticle, articles } from "../content/articles.js";
import "../styles/Content.css";

function Article() {
  const { slug } = useParams();
  const article = getArticle(slug);
  if (!article) return <Navigate to="/blog" replace />;
  const others = articles.filter((a) => a.slug !== slug).slice(0, 3);
  const url = `https://www.quizmasterlearn.com/blog/${article.slug}`;

  return (
    <>
      <Helmet>
        <title>{article.title} | QuizMaster Learn</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
      </Helmet>
      <article className="content-page">
        <div className="breadcrumb"><Link to="/">Home</Link> › <Link to="/blog">Articles</Link> › {article.category}</div>
        <h1>{article.title}</h1>
        <div className="meta">By QuizMaster Learn Team · {article.date} · {article.category}</div>
        {article.body.map((b, i) => {
          if (typeof b === "string") return <p key={i}>{b}</p>;
          if (b.h) return <h2 key={i}>{b.h}</h2>;
          if (b.ul) return <ul key={i}>{b.ul.map((li, j) => <li key={j}>{li}</li>)}</ul>;
          return null;
        })}
        <h2>Keep reading</h2>
        <div className="related">
          {others.map((a) => (<Link key={a.slug} to={`/blog/${a.slug}`}>{a.title}</Link>))}
        </div>
        <div className="cta-row"><Link className="btn-primary" to="/categories">Browse all quizzes</Link></div>
      </article>
    </>
  );
}

export default Article;
