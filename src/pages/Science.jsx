import { useNavigate } from "react-router-dom";
import "../styles/Programming.css";

function Science() {
  const navigate = useNavigate();

  const topics = [
    {
      title: "Physics",
      icon: "⚛️",
      questions: 20,
      path: "/quiz/physics",
    },
    {
      title: "Chemistry",
      icon: "🧪",
      questions: 20,
      path: "/quiz/chemistry",
    },
    {
      title: "Biology",
      icon: "🧬",
      questions: 20,
      path: "/quiz/biology",
    },
    {
      title: "General Science",
      icon: "🌍",
      questions: 20,
      path: "/quiz/general-science",
    },
    {
      title: "Space Science",
      icon: "🚀",
      questions: 20,
      path: "/quiz/space-science",
    },
  ];

  return (
    <div className="programming-page">
      <h1>🔬 Science</h1>
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

export default Science;