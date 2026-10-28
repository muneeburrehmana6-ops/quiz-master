import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { getCategory, resolveSlug, groups, categoriesByGroup } from "../content/categories.js";
import "../styles/Content.css";

const SITE = "https://www.quizmasterlearn.com";

function QuizLanding() {
  const { category: slugParam } = useParams();
  const category = getCategory(slugParam);

  if (!category) return <Navigate to="/categories" replace />;
  if (resolveSlug(slugParam) !== slugParam) {
    return <Navigate to={`/quiz/${category.slug}`} replace />;
  }

  const group = groups[category.group];
  const related = categoriesByGroup(category.group).filter((c) => c.slug !== category.slug).slice(0, 6);
  const title = `${category.title} Quiz with Answers & Explanations | QuizMaster Learn`;
  const description = `Practice ${category.title} with ${category.questions.length} multiple choice questions. Every answer includes an explanation. Read the study notes, then take the timed quiz free.`;
  const url = `${SITE}/quiz/${category.slug}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta name="robots" content={category.noindex ? "noindex, follow" : "index, follow"} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
      </Helmet>

      <article className="content-page">
        <div className="breadcrumb">
          <Link to="/">Home</Link> › <Link to="/categories">Categories</Link> › <Link to={group.path}>{group.title}</Link> › {category.title}
        </div>

        <h1>{category.icon} {category.title} Quiz</h1>
        <p className="lead">{category.overview}</p>

        <div className="cta-row">
          <Link className="btn-primary" to={`/quiz/${category.slug}/play`}>
            Start the {category.questions.length}-question quiz →
          </Link>
        </div>
        <p className="meta">
          {category.questions.length} questions · 30 seconds per question · explanation after every answer · free, no sign-up needed
        </p>

        <h2>What this quiz covers</h2>
        <ul>
          {category.topics.map((t) => (<li key={t}>{t}</li>))}
        </ul>

        <div className="info-box">
          <strong>Study tip:</strong> {category.tip}
        </div>

        <h2>Questions, answers and explanations</h2>
        <p>
          Read through the questions below before you take the quiz, or use them afterwards to review what you missed.
          The correct answer and a short explanation are shown for each one.
        </p>

        {category.questions.map((q, i) => (
          <div className="qa-item" key={i}>
            <div className="q">{i + 1}. {q.question}</div>
            <ol>
              {q.options.map((o, j) => (<li key={j}>{o}</li>))}
            </ol>
            <div className="a">Answer: {q.answer}</div>
            <div className="e">{q.explanation}</div>
          </div>
        ))}

        <div className="cta-row">
          <Link className="btn-primary" to={`/quiz/${category.slug}/play`}>Take the timed quiz</Link>
          <Link className="btn-secondary" to={group.path}>More {group.title} quizzes</Link>
        </div>

        {related.length > 0 && (
          <>
            <h2>Related quizzes</h2>
            <div className="related">
              {related.map((r) => (<Link key={r.slug} to={`/quiz/${r.slug}`}>{r.icon} {r.title}</Link>))}
            </div>
          </>
        )}
      </article>
    </>
  );
}

export default QuizLanding;
