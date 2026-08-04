import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Learn While Having Fun 🎯</h1>

      <p>
        Test your knowledge with thousands of quizzes in
        Programming, AI, Science, English, Math and more.
      </p>

      <div className="hero-buttons">
        <button
          className="start-btn"
          onClick={() => navigate("/categories")}
        >
          Start Quiz
        </button>

        <button
          className="explore-btn"
          onClick={() => navigate("/categories")}
        >
          Explore Categories
        </button>
      </div>
    </section>
  );
}

export default Hero;