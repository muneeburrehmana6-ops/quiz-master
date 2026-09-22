import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { groups, topicsInGroup, topics, SITE_URL } from "../data/topics";
import Footer from "../components/Footer";
import "../styles/Learn.css";

function LearnIndex() {
  const total = topics.reduce((n, t) => n + t.questions.length, 0);
  const description = `Free study guides with ${total}+ MCQs, correct answers and explanations across programming, AI, English, mathematics, science and general knowledge.`;

  return (
    <>
      <Helmet>
        <title>Study Guides: MCQs with Answers and Explanations | QuizMaster Learn</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE_URL}/learn`} />
      </Helmet>

      <div className="learn-page">
        <h1>Study guides</h1>
        <p className="learn-lead">
          Every quiz on QuizMaster has a matching study guide. Each guide lists all
          the questions with the correct answer and a short explanation, so you can
          revise before you test yourself. There are {topics.length} guides and{" "}
          {total} questions in total.
        </p>

        {groups.map((g) => (
          <section key={g.key} className="learn-group">
            <h2>
              {g.icon} {g.title}
            </h2>
            <p>{g.intro[0]}</p>
            <ul className="learn-links">
              {topicsInGroup(g.key).map((t) => (
                <li key={t.slug}>
                  <Link to={`/learn/${t.slug}`}>
                    {t.icon} {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default LearnIndex;
