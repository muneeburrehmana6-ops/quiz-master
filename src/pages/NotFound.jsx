import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../styles/Content.css";

function NotFound() {
  return (
    <div className="content-page" style={{ textAlign: "center" }}>
      <Helmet>
        <title>Page Not Found - QuizMaster Learn</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1>Page not found</h1>
      <p className="lead">The page you are looking for does not exist or has moved.</p>
      <div className="cta-row" style={{ justifyContent: "center" }}>
        <Link className="btn-primary" to="/categories">Browse quizzes</Link>
        <Link className="btn-secondary" to="/">Go home</Link>
      </div>
    </div>
  );
}

export default NotFound;
