import { useNavigate } from "react-router-dom";
import "../styles/Programming.css";

function GeneralKnowledge() {
  const navigate = useNavigate();

  const topics = [
    {
      title: "Pakistan GK",
      icon: "🇵🇰",
      questions: 20,
      path: "/quiz/pakistan-gk",
    },
    {
      title: "World GK",
      icon: "🌍",
      questions: 20,
      path: "/quiz/world-gk",
    },
    {
      title: "Islamic Studies",
      icon: "☪️",
      questions: 20,
      path: "/quiz/islamic-studies",
    },
    {
      title: "Current Affairs",
      icon: "📰",
      questions: 20,
      path: "/quiz/current-affairs",
    },
    {
      title: "Sports",
      icon: "⚽",
      questions: 20,
      path: "/quiz/sports",
    },
  ];

  return (
    <div className="programming-page">
      <h1>🌍 General Knowledge</h1>

      <p>
        Test your knowledge with our General Knowledge quizzes. Choose any topic
        below and start learning.
      </p>

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

export default GeneralKnowledge;