import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Categories.css";

function Categories() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const categories = [
    {
      name: "HTML",
      icon: "🌐",
      color: "#e34c26",
    },
    {
      name: "CSS",
      icon: "🎨",
      color: "#264de4",
    },
    {
      name: "JavaScript",
      icon: "⚡",
      color: "#f7df1e",
    },
    {
      name: "React",
      icon: "⚛️",
      color: "#61dafb",
    },
  ];

  return (
    <div className="categories-page">

      <h1>🚀 Choose Your Quiz Category</h1>

      {/* Search Bar */}
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
            category.name
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((category) => (

            <div
              key={category.name}
              className="category-card"
              onClick={() =>
                navigate(`/quiz/${category.name.toLowerCase()}`)
              }
            >

              <h1 style={{ fontSize: "70px" }}>
                {category.icon}
              </h1>

              <h2 style={{ color: category.color }}>
                {category.name}
              </h2>

              <p>20 Multiple Choice Questions</p>

              <span>Start Quiz →</span>

            </div>

          ))}

      </div>

    </div>
  );
}

export default Categories;