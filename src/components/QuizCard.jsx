import { useNavigate } from "react-router-dom";
import "../styles/QuizCard.css";

function QuizCard({ title, icon, questions, path }) {
  const navigate = useNavigate();

  return (
    <div className="quiz-card">
      <div className="quiz-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{questions} Questions</p>

      <button onClick={() => navigate(path)}>
        Start Quiz
      </button>
    </div>
  );
}

export default QuizCard;