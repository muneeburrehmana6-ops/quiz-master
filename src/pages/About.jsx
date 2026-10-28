import { Helmet } from "react-helmet-async";
import "../styles/About.css";

function About() {
  return (
    <>
      <Helmet>
        <title>About QuizMaster Learn - Online Learning & Quizzes</title>

        <meta
          name="description"
          content="Learn more about QuizMaster Learn, an online educational platform offering interactive quizzes for programming, web development, science, mathematics, English and general knowledge."
        />

        <meta
          name="keywords"
          content="about QuizMaster Learn, online quizzes, educational quizzes, programming quizzes, learning platform, quiz platform"
        />

        <link
          rel="canonical"
          href="https://www.quizmasterlearn.com/about"
        />

        <meta
          property="og:title"
          content="About QuizMaster Learn - Online Learning & Quizzes"
        />

        <meta
          property="og:description"
          content="Learn more about QuizMaster Learn and our mission to make learning engaging through interactive online quizzes."
        />

        <meta
          property="og:url"
          content="https://www.quizmasterlearn.com/about"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <div className="about-page">
        <div className="about-container">

          <h1>About QuizMaster Learn</h1>

          <p className="about-intro">
            QuizMaster is an online learning platform designed to help
            students improve their programming and web development skills
            through interactive quizzes.
          </p>

          <div className="about-grid">

            <div className="about-card">
              <h2>🎯 Our Mission</h2>
              <p>
                Our mission is to make learning simple, engaging and
                accessible for everyone through practical quizzes and
                real-time progress tracking.
              </p>
            </div>

            <div className="about-card">
              <h2>🚀 What We Offer</h2>
              <p>
                55 quizzes across programming and web development,
                artificial intelligence, English, mathematics, science and
                general knowledge. Every question has a written explanation,
                and each quiz has a study page you can read before you play.
              </p>
            </div>

            <div className="about-card">
              <h2>📈 Why Choose QuizMaster?</h2>
              <p>
                Responsive design, user-friendly interface,
                performance tracking, certificates,
                dark mode and continuous improvements.
              </p>
            </div>

            <div className="about-card">
              <h2>👨‍💻 Developed By</h2>
              <p>
                This project was developed as a modern educational platform
                to help students practice programming skills in a fun way.
              </p>
            </div>

          </div>


          <div className="about-card" style={{ marginTop: 24, textAlign: "left" }}>
            <h2>📝 How our content is made</h2>
            <p>
              QuizMaster Learn quizzes are multiple choice questions with a
              short explanation for every answer, so the goal is to understand
              a topic rather than guess. Each quiz has a study page with an
              overview, the topics covered, a study tip and the full list of
              questions with answers. We also publish articles on study
              methods and core concepts.
            </p>
            <p>
              Learning material can contain mistakes. If you find an incorrect
              answer, an unclear explanation or an outdated fact, please write
              to support@quizmasterlearn.com with the quiz name and question
              and we will review and correct it.
            </p>
            <p>
              The site is free to use. It may show Google AdSense
              advertisements; see our Privacy Policy for details on cookies
              and how to manage ad personalisation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;