import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Categories.css";

function Categories() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const categories = [
    { name: "HTML", icon: "🌐", color: "#e34c26", path: "/quiz/html" },
    { name: "CSS", icon: "🎨", color: "#264de4", path: "/quiz/css" },
    { name: "JavaScript", icon: "⚡", color: "#f7df1e", path: "/quiz/javascript" },
    { name: "React", icon: "⚛️", color: "#61dafb", path: "/quiz/react" },
    { name: "Node.js", icon: "🟢", color: "#3C873A", path: "/quiz/nodejs" },
    { name: "Bootstrap", icon: "🅱️", color: "#7952B3", path: "/quiz/bootstrap" },
    { name: "Tailwind CSS", icon: "💨", color: "#38BDF8", path: "/quiz/tailwind" },
    { name: "jQuery", icon: "💛", color: "#0769AD", path: "/quiz/jquery" },
    { name: "TypeScript", icon: "📘", color: "#3178C6", path: "/quiz/typescript" },
    { name: "Firebase", icon: "🔥", color: "#FFCA28", path: "/quiz/firebase" },
    { name: "MongoDB", icon: "🍃", color: "#47A248", path: "/quiz/mongodb" },
    { name: "MySQL", icon: "🐬", color: "#00758F", path: "/quiz/mysql" },
    { name: "PHP", icon: "🐘", color: "#777BB4", path: "/quiz/php" },
    { name: "Python", icon: "🐍", color: "#3776AB", path: "/quiz/python" },
    { name: "Java", icon: "☕", color: "#F89820", path: "/quiz/java" },
    { name: "C++", icon: "💠", color: "#00599C", path: "/quiz/cpp" },
    { name: "Flutter", icon: "🩵", color: "#02569B", path: "/quiz/flutter" },
    { name: "Git & GitHub", icon: "🐙", color: "#F05032", path: "/quiz/gitgithub" },
    { name: "Web Development", icon: "🌐", color: "#2563EB", path: "/quiz/webdevelopment" },
    { name: "Cyber Security", icon: "🔒", color: "#DC2626", path: "/quiz/cybersecurity" },
    { name: "Linux", icon: "🐧", color: "#FCC624", path: "/quiz/linux" },
    { name: "REST API", icon: "🔗", color: "#0EA5E9", path: "/quiz/restapi" },
    { name: "Data Science", icon: "📊", color: "#2563EB", path: "/quiz/datascience" },
    { name: "Machine Learning", icon: "🤖", color: "#7C3AED", path: "/quiz/mach-learn" },
    { name: "DevOps", icon: "⚙️", color: "#2563EB", path: "/quiz/devops" },
  ];

  return (
    <>
      <Helmet>
        <title>Quiz Categories - QuizMaster Learn</title>

        <meta
          name="description"
          content="Explore QuizMaster Learn's online quiz categories including HTML, CSS, JavaScript, React, Python, Java, cybersecurity, data science, machine learning and more."
        />

        <meta
          name="keywords"
          content="quiz categories, programming quizzes, HTML quiz, CSS quiz, JavaScript quiz, React quiz, Python quiz, web development quiz, QuizMaster Learn"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.quizmasterlearn.com/categories"
        />

        <meta
          property="og:title"
          content="Quiz Categories - QuizMaster Learn"
        />

        <meta
          property="og:description"
          content="Explore programming, technology and educational quiz categories on QuizMaster Learn."
        />

        <meta
          property="og:url"
          content="https://www.quizmasterlearn.com/categories"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <div className="categories-page">
        <h1>🚀 Choose Your Quiz Category</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search Category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="category-grid">
          {categories
            .filter((category) =>
              category.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((category) => (
              <div
                key={category.name}
                className="category-card"
                onClick={() => navigate(category.path)}
              >
                <h1 style={{ fontSize: "70px" }}>
                  {category.icon}
                </h1>

                <h2 style={{ color: category.color }}>
                  {category.name}
                </h2>

                <span>Start Quiz →</span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Categories;