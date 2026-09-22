import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Learn While Having Fun 🎯</h1>

      <p>
        Test your knowledge with hundreds of carefully designed questions across
        programming, AI, science, mathematics and more.
      </p>

      <div className="hero-buttons">
        <Link to="/categories" className="start-btn">
          Start Quiz
        </Link>

        <Link to="/learn" className="explore-btn">
          Browse Study Guides
        </Link>
      </div>
    </section>
  );
}

export default Hero;
