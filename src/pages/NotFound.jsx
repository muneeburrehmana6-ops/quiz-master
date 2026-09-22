import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../styles/Learn.css";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found | QuizMaster Learn</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="learn-page">
        <h1>Page not found</h1>
        <p className="learn-lead">
          This page does not exist or has moved. Try one of these instead:
        </p>
        <ul className="learn-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">All quizzes</Link></li>
          <li><Link to="/learn">Study guides</Link></li>
          <li><Link to="/articles">Articles</Link></li>
        </ul>
      </div>
    </>
  );
}

export default NotFound;
