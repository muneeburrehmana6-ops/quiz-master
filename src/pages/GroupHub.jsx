import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { groups, categoriesByGroup } from "../content/categories.js";
import "../styles/Content.css";

function GroupHub({ groupKey }) {
  const group = groups[groupKey];
  const items = categoriesByGroup(groupKey);
  const title = `${group.title} Quizzes | QuizMaster Learn`;
  const description = `${items.length} free ${group.title} quizzes with answers and explanations.`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://www.quizmasterlearn.com${group.path}`} />
      </Helmet>
      <div className="content-page">
        <div className="breadcrumb"><Link to="/">Home</Link> › <Link to="/categories">Categories</Link> › {group.title}</div>
        <h1>{group.icon} {group.title}</h1>
        <p className="lead">{group.intro}</p>
        <div className="card-grid">
          {items.map((c) => (
            <Link key={c.slug} to={`/quiz/${c.slug}`} className="content-card">
              <div className="icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.questions.length} questions with explanations. {c.topics.slice(0, 3).join(", ")}.</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default GroupHub;
