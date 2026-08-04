import { Helmet } from "react-helmet-async";
import "../styles/About.css";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | QuizMaster</title>
        <meta
          name="description"
          content="Learn more about QuizMaster and our mission to make programming learning easier."
        />
      </Helmet>

      <div className="about-page">

        <div className="about-container">

          <h1>About QuizMaster</h1>

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
                HTML, CSS, JavaScript, React, C Programming,
                Data Structures and Algorithms quizzes with certificates,
                leaderboard and detailed history.
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

        </div>

      </div>
    </>
  );
}

export default About;