import { Helmet } from "react-helmet-async";
import "../styles/About.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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
            QuizMaster Learn is a free learning website from Pakistan that helps
            students and job seekers practise with multiple choice questions and
            understand the reasoning behind every answer.
          </p>

          <div className="about-text">
            <h2>Why we built it</h2>
            <p>
              Many students in Pakistan prepare for university exams, entry tests
              and job tests such as FPSC, PPSC and NTS by memorising long lists of
              questions. That approach is slow and the knowledge fades quickly.
              QuizMaster Learn was started to offer a better way: short, timed
              quizzes that show you what you know, followed by explanations that
              help you understand what you missed.
            </p>

            <h2>What you will find here</h2>
            <p>
              The site has more than 50 quiz topics across web development,
              programming fundamentals, artificial intelligence, English,
              mathematics, science and general knowledge. Every quiz has a matching
              study guide that lists all its questions with correct answers and
              explanations, so you can revise without needing an account. We also
              publish articles on study methods, learning to code and English
              grammar.
            </p>

            <h2>How the content is made</h2>
            <p>
              Questions are written and reviewed with a focus on the topics that
              appear most often in Pakistani syllabuses and tests. Each question has
              one clearly correct answer and a short explanation. If you spot an
              error or think an explanation could be clearer, please tell us
              through the <Link to="/contact">contact page</Link>. We correct
              mistakes as soon as we can and add new questions regularly.
            </p>

            <h2>Who runs QuizMaster Learn</h2>
            <p>
              QuizMaster Learn is developed and maintained by Muneeb ur Rehman, a
              web developer based in Rawalpindi, Pakistan. The website is built with
              React and is designed to work well on phones as well as computers,
              since most of our visitors study on mobile.
            </p>

            <h2>Features</h2>
            <ul>
              <li>Timed quizzes with instant feedback after each question.</li>
              <li>Free study guides with answers and explanations.</li>
              <li>Downloadable certificates when you finish a quiz.</li>
              <li>Optional account to save your quiz history and track progress.</li>
              <li>Dark mode and a mobile-friendly design.</li>
            </ul>

            <p>
              Ready to start? Browse the <Link to="/categories">quiz categories</Link>,
              read the <Link to="/learn">study guides</Link> or visit the{" "}
              <Link to="/articles">articles</Link> section.
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;