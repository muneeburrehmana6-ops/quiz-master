import { Link } from "react-router-dom";
import "../styles/QuizCard.css";

function QuizCard({ title, icon, questions, path }) {
  return (
    <div className="quiz-card">
      <div className="quiz-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{questions} Questions</p>

      <Link to={path} className="quiz-card-link">
        Explore quizzes
      </Link>
    </div>
  );
}

export default QuizCard;
