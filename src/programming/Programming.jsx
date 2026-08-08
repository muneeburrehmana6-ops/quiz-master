import { useNavigate } from "react-router-dom";
import "../styles/Programming.css";

function Programming() {
  const navigate = useNavigate();

  const courses = [
    {
      title: "C Programming",
      icon: "💻",
      questions: 20,
      path: "/quiz/cprogramming",
    },
    {
      title: "Data Structure",
      icon: "📚",
      questions: 20,
      path: "/quiz/datastructure",
    },
    {
      title: "Algorithms",
      icon: "⚡",
      questions: 4,
      path: "/quiz/algorithms",
    },
    {
  title: "Object-Oriented Programming",
  icon: "🏛️",
  questions: 20,
  path: "/quiz/object-oriented-programming",
},
{
  title: "Database Systems",
  icon: "🗄️",
  questions: 20,
  path: "/quiz/database-systems",
},
  ];

  return (
    <div className="programming-page">
      <h1>Programming Quiz</h1>
      <p>Select a Programming Topic</p>

      <div className="programming-grid">
        {courses.map((course) => (
          <div className="program-card" key={course.title}>
            <div className="program-icon">
              {course.icon}
            </div>

            <h2>{course.title}</h2>

            <p>{course.questions} Questions</p>

            <button
              onClick={() => navigate(course.path)}
            >
              Start Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programming;