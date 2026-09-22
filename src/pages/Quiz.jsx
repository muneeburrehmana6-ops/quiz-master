import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import jsPDF from "jspdf";
import "../styles/Quiz.css";
import "../styles/Learn.css";
import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getTopic, getGroup, SITE_URL } from "../data/topics";
import NotFound from "./NotFound";
import Footer from "../components/Footer";

const SECONDS_PER_QUESTION = 30;

function QuizGame({ topic }) {
  const questions = topic.questions;
  const category = topic.slug;
  const group = getGroup(topic.group);

  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(SECONDS_PER_QUESTION);
  const savedRef = useRef(false);
  const [board, setBoard] = useState([]);

  const username =
    localStorage.getItem("username") ||
    auth.currentUser?.displayName ||
    "Guest";

  // Countdown timer, only while the quiz is running
  useEffect(() => {
    if (!started || finished) return;
    if (timeLeft === 0) {
      nextQuestion(true);
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, finished, started, currentQuestion]);

  // Save results once when the quiz ends
  useEffect(() => {
    if (!finished || savedRef.current) return;
    savedRef.current = true;

    const percentage = Math.round((score / questions.length) * 100);

    const highScore = Number(localStorage.getItem(category)) || 0;
    if (percentage > highScore) localStorage.setItem(category, percentage);

    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push({
      name: username,
      category,
      score,
      total: questions.length,
      percentage,
    });
    leaderboard.sort((a, b) => b.percentage - a.percentage);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard.slice(0, 10)));
    setBoard(leaderboard.slice(0, 10));

    const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
    history.push({
      name: username,
      category,
      score,
      percentage,
      date: new Date().toLocaleDateString(),
    });
    localStorage.setItem("quizHistory", JSON.stringify(history));

    const currentUser = auth.currentUser;
    if (currentUser) {
      addDoc(collection(db, "quizHistory"), {
        uid: currentUser.uid,
        name: currentUser.displayName || currentUser.email,
        email: currentUser.email,
        category,
        score,
        total: questions.length,
        percentage,
        date: new Date().toLocaleDateString(),
        createdAt: new Date(),
      }).catch((error) => console.log(error));
    }
  }, [finished, score, questions.length, category, username]);

  const handleAnswer = (option) => {
    if (selected) return;
    setSelected(option);
    if (option === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = (auto = false) => {
    if (!selected && auto !== true) {
      alert("Please select an answer.");
      return;
    }
    if (currentQuestion === questions.length - 1) {
      setFinished(true);
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
    setSelected("");
    setTimeLeft(SECONDS_PER_QUESTION);
  };

  const restart = () => {
    savedRef.current = false;
    setCurrentQuestion(0);
    setScore(0);
    setSelected("");
    setTimeLeft(SECONDS_PER_QUESTION);
    setFinished(false);
    setStarted(true);
  };

  const downloadCertificate = () => {
    const doc = new jsPDF();
    const percentage = Math.round((score / questions.length) * 100);

    doc.setDrawColor(218, 165, 32);
    doc.setLineWidth(2);
    doc.rect(10, 10, 190, 277);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(218, 165, 32);
    doc.text("CERTIFICATE OF ACHIEVEMENT", 105, 30, { align: "center" });

    doc.setFontSize(15);
    doc.setTextColor(80);
    doc.text("This Certificate is Proudly Presented To", 105, 50, { align: "center" });

    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    doc.text(username || "Student", 105, 70, { align: "center" });

    doc.setFontSize(16);
    doc.text(`For Successfully Completing the ${topic.title} Quiz`, 105, 95, {
      align: "center",
    });

    doc.setFontSize(15);
    doc.text(`Score: ${score} / ${questions.length}`, 105, 120, { align: "center" });
    doc.text(`Percentage: ${percentage}%`, 105, 135, { align: "center" });

    doc.setFontSize(18);
    doc.setTextColor(34, 139, 34);
    doc.text("Congratulations", 105, 165, { align: "center" });

    doc.setFontSize(13);
    doc.setTextColor(0);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 240);
    doc.line(140, 240, 185, 240);
    doc.text("Quiz Master", 150, 248);

    doc.save("Certificate.pdf");
  };

  const url = `${SITE_URL}/quiz/${topic.slug}`;
  const pageTitle = `${topic.title} Quiz: ${questions.length} MCQs with Explanations`;
  const description = `Free online ${topic.title} quiz with ${questions.length} multiple choice questions, a 30 second timer and an explanation for every answer. ${topic.intro[0]}`.slice(0, 158);

  const head = (
    <Helmet>
      <title>{`${pageTitle} | QuizMaster Learn`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  );

  // ---------- Intro screen (what Google and new visitors see first) ----------
  if (!started) {
    return (
      <>
        {head}
        <article className="learn-page">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / <Link to={group.path}>{group.title}</Link> /{" "}
            <span>{topic.title} quiz</span>
          </nav>

          <h1>
            {topic.icon} {topic.title} Quiz
          </h1>

          {topic.intro.map((p, i) => (
            <p className="learn-lead" key={i}>
              {p}
            </p>
          ))}

          <h2>How this quiz works</h2>
          <ul className="quiz-facts">
            <li>{questions.length} multiple choice questions, one at a time.</li>
            <li>{SECONDS_PER_QUESTION} seconds per question. If time runs out, the quiz moves on.</li>
            <li>After each answer you see the correct option and a short explanation.</li>
            <li>At the end you get your score and can download a certificate.</li>
          </ul>

          <div className="learn-cta">
            <button className="learn-btn" onClick={() => setStarted(true)}>
              Start the {topic.title} quiz
            </button>
            <Link className="learn-link" to={`/learn/${topic.slug}`}>
              Revise first with the study guide
            </Link>
            {!auth.currentUser && (
              <p className="quiz-login-note">
                You can play as a guest. <Link to="/login">Log in</Link> to save
                your results to your profile.
              </p>
            )}
          </div>

          <h2>Sample questions</h2>
          <ol className="qa-list">
            {questions.slice(0, 3).map((q, i) => (
              <li className="qa-item" key={i}>
                <h3>{q.question}</h3>
                <ul className="qa-options">
                  {q.options.map((o, j) => (
                    <li key={j}>
                      {String.fromCharCode(65 + j)}. {o}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <p>
            Answers and explanations for all questions are in the{" "}
            <Link to={`/learn/${topic.slug}`}>{topic.title} study guide</Link>.
          </p>
        </article>
        <Footer />
      </>
    );
  }

  // ---------- Result screen ----------
  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="result-card">
        {head}
        <h1>🎉 Quiz Completed</h1>
        <div className="circle-score">{percentage}%</div>
        <h2>
          {score} / {questions.length} Correct
        </h2>
        <h3>High Score: {localStorage.getItem(category) || percentage}%</h3>

        <h2 style={{ marginTop: "30px" }}>🏆 Leaderboard</h2>
        <div className="leaderboard">
          {board.map((user, index) => (
            <div key={index} className="leaderboard-item">
              <span>
                {index + 1}. {user.name}
              </span>
              <span>{user.percentage}%</span>
            </div>
          ))}
        </div>

        <p className="result-text">
          {percentage >= 80
            ? "Excellent Work! 🔥"
            : percentage >= 60
            ? "Good Job 👏"
            : percentage >= 40
            ? "Keep Practicing 💪"
            : "Don't Give Up 😊"}
        </p>

        <button className="certificate-btn" onClick={downloadCertificate}>
          📄 Download Certificate
        </button>
        <button className="play-btn" onClick={restart}>
          🔄 Play Again
        </button>
        <p style={{ marginTop: "20px" }}>
          <Link to={`/learn/${topic.slug}`}>Review all answers in the study guide</Link>
        </p>
      </div>
    );
  }

  // ---------- Question screen ----------
  const q = questions[currentQuestion];

  return (
    <div className="quiz-container">
      {head}
      <div className="quiz-header">
        <h1 className="quiz-title">{topic.title}</h1>
        <div className="quiz-status">
          <div className="status-card">
            <h4>Question</h4>
            <h2>
              {currentQuestion + 1}/{questions.length}
            </h2>
          </div>
          <div className="status-card">
            <h4>Score</h4>
            <h2>{score}</h2>
          </div>
        </div>
      </div>

      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
      <div className="timer-box">⏰ Time Left: {timeLeft}s</div>

      <div className="question-card">
        <h2>{q.question}</h2>
      </div>

      <div className="options">
        {q.options.map((option, index) => {
          let className = "option";
          if (selected) {
            if (option === q.answer) className += " correct";
            else if (option === selected) className += " wrong";
          }
          return (
            <button key={index} className={className} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="explanation-box">
          <h3>{selected === q.answer ? "✅ Correct!" : "❌ Wrong!"}</h3>
          <p>
            <strong>Correct Answer:</strong> {q.answer}
          </p>
          <p>{q.explanation || "No explanation available."}</p>
        </div>
      )}

      <button className="next-btn" onClick={() => nextQuestion(false)}>
        {currentQuestion === questions.length - 1 ? "Finish Quiz 🎯" : "Next ➜"}
      </button>
    </div>
  );
}

function Quiz() {
  const { category } = useParams();
  const topic = getTopic(category);
  if (!topic) return <NotFound />;
  // key resets the quiz when moving from one topic to another
  return <QuizGame key={topic.slug} topic={topic} />;
}

export default Quiz;
