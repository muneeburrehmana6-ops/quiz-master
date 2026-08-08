import { useNavigate } from "react-router-dom";
import "../styles/Programming.css";

function English() {
  const navigate = useNavigate();

  const topics = [
    {
      title: "English Grammar",
      icon: "📚",
      questions: 20,
      path: "/quiz/english-grammar",
    },
    {
      title: "Tenses",
      icon: "⏰",
      questions: 20,
      path: "/quiz/tenses",
    },
    {
      title: "Vocabulary",
      icon: "📝",
      questions: 20,
      path: "/quiz/vocabulary",
    },
    {
      title: "Synonyms & Antonyms",
      icon: "🔤",
      questions: 20,
      path: "/quiz/synonyms-antonyms",
    },
    {
      title: "Idioms & Phrases",
      icon: "💬",
      questions: 20,
      path: "/quiz/idioms",
    },
  ];

  return (
    <div className="programming-page">
      <h1>📚 English</h1>
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

export default English;