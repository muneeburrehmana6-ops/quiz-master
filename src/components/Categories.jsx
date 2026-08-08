import { NavLink } from "react-router-dom";
import "../styles/Categories.css";
import QuizCard from "./QuizCard";

function Categories() {
  const quizzes = [
    {
      title: "Programming",
      icon: "💻",
      questions: 100,
      path: "/programming",
    },
    {
      title: "Artificial Intelligence",
      icon: "🤖",
      questions: 100,
      path: "/ai",
    },
    {
      title: "English",
      icon: "📚",
      questions: 100,
      path: "/english",
    },
    {
      title: "Mathematics",
      icon: "🧮",
      questions: 100,
      path: "/mathematics",
    },
    {
      title: "Science",
      icon: "🔬",
      questions: 100,
      path: "/science",
    },
    {
      title: "General Knowledge",
      icon: "🌍",
      questions: 100,
      path: "/general-knowledge",
    },
    
  ];

  return (
    <section className="categories">
      <h2>Popular Categories</h2>

      <div className="category-grid">
        {quizzes.map((quiz, index) => (
          <QuizCard
            key={index}
            title={quiz.title}
            icon={quiz.icon}
            questions={quiz.questions}
            path={quiz.path}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;