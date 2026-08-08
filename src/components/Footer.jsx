import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <h2>QuizMaster</h2>

      <p>
        Learn • Practice • Improve
      </p>

      <div className="footer-links">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/privacy-policy">
          Privacy Policy
        </Link>

        <Link to="/terms">
          Terms & Conditions
        </Link>
        <Link to="/disclaimer">Disclaimer</Link>

      </div>

      <p className="copyright">
        © {new Date().getFullYear()} QuizMaster. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;