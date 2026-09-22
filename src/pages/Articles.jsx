import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import articles, { formatDate } from "../data/articles";
import { SITE_URL } from "../data/topics";
import Footer from "../components/Footer";
import "../styles/Learn.css";

function Articles() {
  return (
    <>
      <Helmet>
        <title>Articles: Study Tips, Programming and English | QuizMaster Learn</title>
        <meta
          name="description"
          content="Guides and explainers on exam preparation, learning to code, web development, English grammar and artificial intelligence."
        />
        <link rel="canonical" href={`${SITE_URL}/articles`} />
      </Helmet>

      <div className="learn-page">
        <h1>Articles</h1>
        <p className="learn-lead">
          Longer guides on studying effectively, learning programming, English
          grammar and technology topics. Each article links to quizzes where you
          can practise what you read.
        </p>

        <div className="article-list">
          {articles.map((a) => (
            <Link to={`/articles/${a.slug}`} className="article-card" key={a.slug}>
              <h2>{a.title}</h2>
              <p>{a.description}</p>
              <span className="article-date">{formatDate(a.date)}</span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Articles;
