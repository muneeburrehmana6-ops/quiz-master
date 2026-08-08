import { useNavigate } from "react-router-dom";
import "../styles/Programming.css";

function Mathematics() {
  const navigate = useNavigate();

  const topics = [
    {
      title: "Algebra",
      icon: "➗",
      questions: 20,
      path: "/quiz/algebra",
    },
    {
      title: "Geometry",
      icon: "📐",
      questions: 20,
      path: "/quiz/geometry",
    },
    {
      title: "Trigonometry",
      icon: "📏",
      questions: 20,
      path: "/quiz/trigonometry",
    },
    {
      title: "Calculus",
      icon: "📈",
      questions: 20,
      path: "/quiz/calculus",
    },
    {
      title: "Statistics",
      icon: "📊",
      questions: 20,
      path: "/quiz/statistics",
    },
  ];

  return (
    <div className="programming-page">
      <h1>🧮 Mathematics</h1>
      <p>Choose Your Topic</p>

      <div className="programming-grid">
        {topics.map((topic) => (
          <div className="programming-card" key={topic.title}>
            <h2>{topic.icon}</h2>

            <h3>{topic.title}</h3>

            <p>{topic.questions} Questions</p>

            <button onClick={() => navigate(topic.path)}>
              Start Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mathematics;