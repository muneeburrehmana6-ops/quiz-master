import { Helmet } from "react-helmet-async";
import "../styles/Content.css";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Features from "../components/Features";
import { Link } from "react-router-dom";
import { articles } from "../content/articles.js";
import { categories } from "../content/categories.js";

function Home() {
  return (
    <>
      <Helmet>
        <title>QuizMaster Learn - Free Quizzes with Explanations</title>

        <meta
          name="description"
          content="Free online quizzes with explanations on programming, web development, AI, English, mathematics, science and general knowledge."
        />

        <meta
          name="keywords"
          content="Quiz, HTML Quiz, CSS Quiz, JavaScript Quiz, React Quiz, Programming Quiz, DSA Quiz, C Programming"
        />

        <meta
          name="author"
          content="QuizMaster"
        />

        <meta
          property="og:title"
          content="QuizMaster"
        />

        <meta
          property="og:description"
          content="Practice programming with interactive quizzes."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="QuizMaster"
        />
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* Popular Categories */}
      <Categories />

      {/* Educational Content Section */}
      <section
        style={{
          padding: "70px 30px",
          background: "#f8fafc",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              marginBottom: "20px",
              color: "#111827",
            }}
          >
            Learn, Practice & Improve 📚
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#64748b",
              maxWidth: "850px",
              margin: "0 auto 45px",
            }}
          >
            QuizMaster is an educational quiz platform designed to
            help learners practice their knowledge across programming,
            web development, artificial intelligence, science,
            mathematics, English, cybersecurity and other
            technology-related subjects.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
            }}
          >
            {/* Practice Your Skills */}
            <div
              style={{
                background: "#ffffff",
                padding: "30px 25px",
                borderRadius: "14px",
                boxShadow:
                  "0 5px 18px rgba(0,0,0,0.08)",
              }}
            >
              <div
  style={{
    fontSize: "42px",
    height: "55px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "12px",
  }}
>
  🎯
</div>

              <h3
                style={{
                  color: "#2563eb",
                  marginBottom: "12px",
                }}
              >
                Practice Your Skills
              </h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                Test your understanding with
                topic-focused questions and practice
                the concepts you are learning.
              </p>
            </div>

            {/* Learn From Explanations */}
            <div
              style={{
                background: "#ffffff",
                padding: "30px 25px",
                borderRadius: "14px",
                boxShadow:
                  "0 5px 18px rgba(0,0,0,0.08)",
              }}
            >
              <div
  style={{
    fontSize: "42px",
    height: "55px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "12px",
  }}
>
  💡
</div>

              <h3
                style={{
                  color: "#2563eb",
                  marginBottom: "12px",
                }}
              >
                Learn From Explanations
              </h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                Review explanations after answering
                questions and understand the concepts
                behind each answer.
              </p>
            </div>

            {/* Track Your Progress */}
            <div
              style={{
                background: "#ffffff",
                padding: "30px 25px",
                borderRadius: "14px",
                boxShadow:
                  "0 5px 18px rgba(0,0,0,0.08)",
              }}
            >
            <div
  style={{
    fontSize: "42px",
    height: "55px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "12px",
  }}
>
  📊
</div>

              <h3
                style={{
                  color: "#2563eb",
                  marginBottom: "12px",
                }}
              >
                Track Your Progress
              </h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                Review your quiz results and monitor
                your learning progress over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose QuizMaster */}
      <Features />

      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "50px 20px", textAlign: "left" }}>
        <h2>Latest study guides</h2>
        <p>
          Besides {categories.length} quizzes, QuizMaster Learn publishes short guides that explain key ideas and
          show how to study more effectively.
        </p>
        <div className="card-grid">
          {articles.slice(0, 3).map((a) => (
            <Link key={a.slug} to={`/blog/${a.slug}`} className="content-card">
              <div className="meta">{a.category}</div>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </Link>
          ))}
        </div>
        <Link className="btn-secondary" to="/blog">All articles →</Link>
      </section>
    </>
  );
}

export default Home;