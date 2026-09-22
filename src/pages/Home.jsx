import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import articles, { formatDate } from "../data/articles";
import { groups, topicsInGroup } from "../data/topics";
import "../styles/Learn.css";

function Home() {
  return (
    <>
      <Helmet>
        <title>QuizMaster Learn | Free Online Quizzes and Study Guides</title>
        <link rel="canonical" href="https://www.quizmasterlearn.com/" />

        <meta
          name="description"
          content="Free online quizzes and study guides with explanations for programming, web development, AI, English, mathematics, science and Pakistan general knowledge."
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

      {/* Study guides */}
      <section className="home-section">
        <h2>Free study guides</h2>
        <p>
          Every quiz has a study guide with all the questions, the correct answers
          and a short explanation. Read one before you take the quiz, or after it
          to review what you missed.
        </p>
        <div className="home-guides">
          {groups.map((g) => (
            <div key={g.key} className="home-guide-group">
              <h3>
                <Link to={g.path}>
                  {g.icon} {g.title}
                </Link>
              </h3>
              <ul>
                {topicsInGroup(g.key)
                  .slice(0, 5)
                  .map((t) => (
                    <li key={t.slug}>
                      <Link to={`/learn/${t.slug}`}>{t.title}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <p>
          <Link className="learn-link" to="/learn">
            See all study guides
          </Link>
        </p>
      </section>

      {/* Latest articles */}
      <section className="home-section">
        <h2>Latest articles</h2>
        <div className="article-list">
          {articles.slice(0, 3).map((a) => (
            <Link to={`/articles/${a.slug}`} className="article-card" key={a.slug}>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
              <span className="article-date">{formatDate(a.date)}</span>
            </Link>
          ))}
        </div>
        <p>
          <Link className="learn-link" to="/articles">
            Read all articles
          </Link>
        </p>
      </section>

      {/* Why Choose QuizMaster */}
      <Features />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;