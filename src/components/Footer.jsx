import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { groups } from "../content/categoryInfo.js";

function Footer() {
  return (
    <footer className="footer">
      <h2>QuizMaster Learn</h2>

      <p>Free quizzes with explanations on programming, AI, English, mathematics, science and general knowledge.</p>

      <div className="footer-groups">
        {Object.values(groups).map((g) => (
          <Link key={g.path} to={g.path}>{g.title}</Link>
        ))}
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/categories">All Quizzes</Link>
        <Link to="/blog">Articles</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms &amp; Conditions</Link>
        <Link to="/disclaimer">Disclaimer</Link>
      </div>

      <p className="copyright">© {new Date().getFullYear()} QuizMaster Learn. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
