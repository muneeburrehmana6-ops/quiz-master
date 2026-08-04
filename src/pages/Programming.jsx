import { useNavigate } from "react-router-dom";
import "../styles/Programming.css";

function Programming() {
  const navigate = useNavigate();

  const topics = [
    {
      title: "C Programming",
      icon: "💻",
      questions: 20,
      path: "/quiz/c-programming",
    },
    {
      title: "Data Structure",
      icon: "📚",
      questions: 20,
      path: "/quiz/data-structure",
    },
    {
      title: "Algorithms",
      icon: "⚡",
      questions: 20,
      path: "/quiz/algorithms",
    },
  ];

  return (
    <div className="programming-page">
      <h1>💻 Programming</h1>
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

export default Programming;