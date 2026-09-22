import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { getTopic, getGroup, topicsInGroup, SITE_URL } from "../data/topics";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import "../styles/Learn.css";

function StudyGuide() {
  const { slug } = useParams();
  const topic = getTopic(slug);
  if (!topic) return <NotFound />;

  const group = getGroup(topic.group);
  const related = topicsInGroup(topic.group)
    .filter((t) => t.slug !== topic.slug)
    .slice(0, 4);
  const url = `${SITE_URL}/learn/${topic.slug}`;
  const title = `${topic.title} MCQs with Answers and Explanations`;
  const description = `${topic.questions.length} ${topic.title} multiple choice questions with correct answers and short explanations. ${topic.intro[0]}`.slice(0, 158);

  return (
    <>
      <Helmet>
        <title>{`${title} | QuizMaster Learn`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="learn-page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link> / <Link to={group.path}>{group.title}</Link> /{" "}
          <span>{topic.title}</span>
        </nav>

        <h1>
          {topic.icon} {title}
        </h1>

        {topic.intro.map((p, i) => (
          <p className="learn-lead" key={i}>
            {p}
          </p>
        ))}

        <div className="learn-cta">
          <p>
            Read through the questions below, then test yourself with the timed{" "}
            {topic.title} quiz. You get 30 seconds per question.
          </p>
          <Link className="learn-btn" to={`/quiz/${topic.slug}`}>
            Take the {topic.title} quiz
          </Link>
        </div>

        <h2>Questions and answers</h2>

        <ol className="qa-list">
          {topic.questions.map((q, i) => (
            <li className="qa-item" key={i}>
              <h3>{q.question}</h3>
              <ul className="qa-options">
                {q.options.map((o, j) => (
                  <li key={j} className={o === q.answer ? "is-answer" : ""}>
                    {String.fromCharCode(65 + j)}. {o}
                  </li>
                ))}
              </ul>
              <p className="qa-answer">
                <strong>Answer:</strong> {q.answer}
              </p>
              {q.explanation && (
                <p className="qa-explain">
                  <strong>Explanation:</strong> {q.explanation}
                </p>
              )}
            </li>
          ))}
        </ol>

        <div className="learn-cta">
          <p>Finished reading? See how many you remember.</p>
          <Link className="learn-btn" to={`/quiz/${topic.slug}`}>
            Start the quiz
          </Link>
        </div>

        {related.length > 0 && (
          <section className="related">
            <h2>More {group.title} study guides</h2>
            <ul>
              {related.map((t) => (
                <li key={t.slug}>
                  <Link to={`/learn/${t.slug}`}>
                    {t.icon} {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
      <Footer />
    </>
  );
}

export default StudyGuide;
