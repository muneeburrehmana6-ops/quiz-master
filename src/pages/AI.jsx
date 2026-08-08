import { useNavigate } from "react-router-dom";
import "../styles/Programming.css";

function AI() {
  const navigate = useNavigate();

  const topics = [
    {
      title: "AI Basics",
      icon: "🤖",
      questions: 20,
      path: "/quiz/ai-basics",
    },
    {
      title: "Machine Learning",
      icon: "📊",
      questions: 20,
      path: "/quiz/machine-learning",
    },
    {
      title: "Deep Learning",
      icon: "🧠",
      questions: 20,
      path: "/quiz/deep-learning",
    },
    {
      title: "Natural Language Processing",
      icon: "💬",
      questions: 20,
      path: "/quiz/nlp",
    },
    {
      title: "Computer Vision",
      icon: "👁️",
      questions: 20,
      path: "/quiz/computer-vision",
    },
  ];

  return (
    <div className="programming-page">
      <h1>🤖 Artificial Intelligence</h1>

      <p>Choose Your AI Topic</p>

      <div className="programming-grid">
        {topics.map((topic, index) => (
          <div className="programming-card" key={index}>
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

export default AI;