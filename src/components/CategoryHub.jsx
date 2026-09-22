import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getGroup, topicsInGroup, SITE_URL } from "../data/topics";
import Footer from "./Footer";
import "../styles/Programming.css";
import "../styles/Learn.css";

function CategoryHub({ groupKey }) {
  const group = getGroup(groupKey);
  const list = topicsInGroup(groupKey);
  const title = `${group.title} Quizzes and Study Guides`;
  const description = `${group.intro[0]}`.slice(0, 155);

  return (
    <>
      <Helmet>
        <title>{`${title} | QuizMaster Learn`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE_URL}${group.path}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}${group.path}`} />
      </Helmet>

      <div className="programming-page">
        <h1>
          {group.icon} {group.title}
        </h1>

        <div className="hub-intro">
          {group.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="programming-grid">
          {list.map((topic) => (
            <div className="programming-card" key={topic.slug}>
              <h2>{topic.icon}</h2>
              <h3>{topic.title}</h3>
              <p className="hub-card-text">{topic.intro[0].split(". ")[0]}.</p>
              <p>{topic.questions.length} questions</p>
              <Link className="hub-btn" to={`/quiz/${topic.slug}`}>
                Start quiz
              </Link>
              <Link className="hub-btn-secondary" to={`/learn/${topic.slug}`}>
                Read study guide
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CategoryHub;
