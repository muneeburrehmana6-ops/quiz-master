import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import articles, { getArticle, formatDate } from "../data/articles";
import { getTopic, SITE_URL } from "../data/topics";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import "../styles/Learn.css";

function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);
  if (!article) return <NotFound />;

  const url = `${SITE_URL}/articles/${article.slug}`;
  const related = (article.related || []).map(getTopic).filter(Boolean);
  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${article.title} | QuizMaster Learn`}</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="learn-page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link> / <Link to="/articles">Articles</Link>
        </nav>

        <h1>{article.title}</h1>
        <p className="article-meta">
          By QuizMaster Learn · {formatDate(article.date)}
        </p>

        {article.sections.map((s, i) => (
          <section key={i} className="article-section">
            {s.heading && <h2>{s.heading}</h2>}
            {(s.paragraphs || []).map((p, j) => (
              <p key={j}>{p}</p>
            ))}
            {s.list && (
              <ul>
                {s.list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {related.length > 0 && (
          <section className="related">
            <h2>Practise this topic</h2>
            <ul>
              {related.map((t) => (
                <li key={t.slug}>
                  <Link to={`/quiz/${t.slug}`}>
                    {t.icon} {t.title} quiz
                  </Link>{" "}
                  · <Link to={`/learn/${t.slug}`}>study guide</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="related">
          <h2>More articles</h2>
          <ul>
            {more.map((a) => (
              <li key={a.slug}>
                <Link to={`/articles/${a.slug}`}>{a.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
      <Footer />
    </>
  );
}

export default ArticlePage;
