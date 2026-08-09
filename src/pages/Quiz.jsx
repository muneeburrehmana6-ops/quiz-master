import { Helmet } from "react-helmet-async";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../firebase";
import jsPDF from "jspdf";
import "../styles/Quiz.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import htmlQuestions from "../data/html";
import cssQuestions from "../data/css";
import javascriptQuestions from "../data/javascript";
import reactQuestions from "../data/react";
import pakistanGK from "../data/pakistanGK";
import worldGK from "../data/worldGK";
import islamicStudies from "../data/islamicStudies";
import sports from "../data/sports";
import aiBasics from "../data/aiBasics";
import machineLearning from "../data/machineLearning";
import deepLearning from "../data/deepLearning";
import nlp from "../data/nlp";
import computerVision from "../data/computerVision";
import englishGrammar from "../data/englishGrammar";
import tenses from "../data/tenses";
import vocabulary from "../data/vocabulary";
import synonymsAntonyms from "../data/synonymsAntonyms";
import idioms from "../data/idioms";
import algebra from "../data/algebra";
import geometry from "../data/geometry";
import trigonometry from "../data/trigonometry";
import calculus from "../data/calculus";
import statistics from "../data/statistics";
import physics from "../data/physics";
import chemistry from "../data/chemistry";
import biology from "../data/biology";
import generalScience from "../data/generalScience";
import spaceScience from "../data/spaceScience";
import bootstrapQuestions from "../data/bootstrap";
import tailwindQuestions from "../data/tailwind";
import jqueryQuestions from "../data/jquery";
import typescriptQuestions from "../data/typescript";
import firebaseQuestions from "../data/firebase";
import mongodbQuestions from "../data/mongodb";
import mysqlQuestions from "../data/mysql";
import phpQuestions from "../data/php";
import pythonQuestions from "../data/python";
import javaQuestions from "../data/java";
import cppQuestions from "../data/cpp";
import flutterQuestions from "../data/flutter";
import gitGithubQuestions from "../data/gitGithub";
import webDevelopmentQuestions from "../data/webDevelopment";
import cyberSecurityQuestions from "../data/cyberSecurity";
import linuxQuestions from "../data/linux";
import restApiQuestions from "../data/restApi";
import dataScienceQuestions from "../data/dataScience";
import machineLearningQuestions from "../data/mach-learn";
import devOpsQuestions from "../data/devops";
import nodejsQuestions from "../data/nodejs";

import cProgramming from "../programming/cProgramming";
import dataStructure from "../programming/dataStructure";
import algorithms from "../programming/algorithms";
import objectOrientedProgramming from "../programming/objectOrientedProgramming";
import databaseSystems from "../programming/databaseSystems";

function Quiz() {
  const { category } = useParams();
  const categoryName = category
  ? category
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase())
  : "Quiz";

const seoDescription = `Practice ${categoryName} quiz questions on QuizMaster Learn. Test your knowledge, improve your skills, and track your quiz progress.`;
  const navigate = useNavigate();
  

  let questions = [];
  switch (category) {
    case "html":
      questions = htmlQuestions;
      break;

    case "css":
      questions = cssQuestions;
      break;

    case "javascript":
      questions = javascriptQuestions;
      break;

    case "react":
      questions = reactQuestions;
      break;

    case "cprogramming":
    case "c-programming":
      questions = cProgramming;
      break;

    case "datastructure":
    case "data-structure":
      questions = dataStructure;
      break;

    case "algorithms":
      questions = algorithms;
      break;
      case "pakistan-gk":
  questions = pakistanGK;
  break;
  case "world-gk":
  questions = worldGK;
  break;
  case "islamic-studies":
  questions = islamicStudies;
  break;
  case "sports":
  questions = sports;
  break;
  case "ai-basics":
  questions = aiBasics;
  break;
  case "machine-learning":
  questions = machineLearning;
  break;
  case "deep-learning":
  questions = deepLearning;
  break;
  case "nlp":
  questions = nlp;
  break;
  case "computer-vision":
  questions = computerVision;
  break;
  case "english-grammar":
  questions = englishGrammar;
  break;
case "tenses":
  questions = tenses;
  break;
case "vocabulary":
  questions = vocabulary;
  break;
  case "synonyms-antonyms":
  questions = synonymsAntonyms;
  break;
  case "idioms":
  questions = idioms;
  break;
case "algebra":
  questions = algebra;
  break;
  case "geometry":
  questions = geometry;
  break;
  case "trigonometry":
  questions = trigonometry;
  break;
  case "calculus":
  questions = calculus;
  break;
  case "statistics":
  questions = statistics;
  break;
  case "physics":
  questions = physics;
  break;
  case "chemistry":
  questions = chemistry;
  break;
  case "biology":
  questions = biology;
  break;
  case "general-science":
  questions = generalScience;
  break;
  case "space-science":
  questions = spaceScience;
  break;
case "oop":
case "object-oriented-programming":
  questions = objectOrientedProgramming;
  break;
  case "database-systems":
  questions = databaseSystems;
  break;
  case "bootstrap":
  questions = bootstrapQuestions;
  break;
  case "tailwind":
  questions = tailwindQuestions;
  break;
  case "jquery":
    questions = jqueryQuestions;
    break;
    case "typescript":
    questions = typescriptQuestions;
    break;
    case "firebase":
    questions = firebaseQuestions;
    break;
    case "mongodb":
    questions = mongodbQuestions;
    break;
    case "mysql":
    questions = mysqlQuestions;
    break;
    case "php":
    questions = phpQuestions;
    break;
    case "python":
    questions = pythonQuestions;
    break;
    case "java":
    questions = javaQuestions;
    break;
  case "cpp":
    questions = cppQuestions;
    break;
    case "flutter":
    questions = flutterQuestions;
    break;
    case "gitgithub":
    questions = gitGithubQuestions;
    break;
    case "webdevelopment":
    questions = webDevelopmentQuestions;
    break;
    case "cybersecurity":
    questions = cyberSecurityQuestions;
    break;
    case "linux":
    questions = linuxQuestions;
    break;
    case "restapi":
    questions = restApiQuestions;
    break;
    case "datascience":
    questions = dataScienceQuestions;
    break;
   case "mach-learn":
  questions = machineLearningQuestions;
  break;
  case "devops":
  questions = devOpsQuestions;
  break;
  case "nodejs":
  questions = nodejsQuestions;
  break;
    default:
      questions = [];
  }
  

  console.log("Category:", category);
  console.log("Questions:", questions);
  <Helmet>
  <title>{categoryName} Quiz - QuizMaster Learn</title>

  <meta
    name="description"
    content={seoDescription}
  />

  <meta
    name="robots"
    content="index, follow"
  />

  <link
    rel="canonical"
    href={`https://www.quizmasterlearn.com/quiz/${category}`}
  />

  <meta
    property="og:title"
    content={`${categoryName} Quiz - QuizMaster Learn`}
  />

  <meta
    property="og:description"
    content={seoDescription}
  />

  <meta
    property="og:url"
    content={`https://www.quizmasterlearn.com/quiz/${category}`}
  />

  <meta
    property="og:type"
    content="website"
  />
</Helmet>

  const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [selected, setSelected] = useState("");
const [finished, setFinished] = useState(false);
const [timeLeft, setTimeLeft] = useState(30);
const [showExplanation, setShowExplanation] = useState(false);
const [userAnswers, setUserAnswers] = useState([]);
const username = localStorage.getItem("username") || "Guest";
useEffect(() => {
  if (!auth.currentUser) {
    navigate("/login", {
      state: {
        from: `/quiz/${category}`,
      },
      replace: true,
    });
  }
}, [category, navigate]);



  if (questions.length === 0)
    
     {
    return (
      
      
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>No Questions Found</h1>
        <h3>Category: {category}</h3>
      </div>
      
    );
  }

const handleAnswer = (option) => {
  if (selected) return;

  setSelected(option);

  setUserAnswers((prev) => [
    ...prev,
    {
      question: questions[currentQuestion].question,
      selected: option,
      correct: questions[currentQuestion].answer,
      explanation: questions[currentQuestion].explanation,
    },
  ]);

  if (option === questions[currentQuestion].answer) {
    setScore((prev) => prev + 1);
  }

  };
useEffect(() => 
  {
  if (finished) return;

  if (timeLeft === 0) {
    nextQuestion(true);
    return;
  }

  const timer = setTimeout(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearTimeout(timer);

}, [timeLeft, finished, currentQuestion]);

const nextQuestion = async (auto = false) => {
  if (!selected && !auto) {
    alert("Please select an answer.");
    return;
  }

if (currentQuestion === questions.length - 1) {
  const percentage = Math.round(((score + (selected === questions[currentQuestion].answer ? 1 : 0)) / questions.length) * 100);

  const currentUser = auth.currentUser;

  if (currentUser) {
    try {
      await addDoc(collection(db, "quizHistory"), {
        uid: currentUser.uid,
        name: currentUser.displayName || currentUser.email,
        email: currentUser.email,
        category,
        score: score + (selected === questions[currentQuestion].answer ? 1 : 0),
        total: questions.length,
        percentage,
        date: new Date().toLocaleDateString(),
        createdAt: new Date(),
      });
    } catch (error) {
      console.log(error);
    }
  }

  setFinished(true);
  return;
}
  setCurrentQuestion((prev) => prev + 1);
  setSelected("");
  setTimeLeft(30);
  setShowExplanation(false);

};
const downloadCertificate = () => {
  const doc = new jsPDF();
  

  const percentage = Math.round((score / questions.length) * 100);
  

  // Border
  doc.setDrawColor(218, 165, 32);
  doc.setLineWidth(2);
  doc.rect(10, 10, 190, 277);

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(218, 165, 32);
  doc.text("CERTIFICATE OF ACHIEVEMENT", 105, 30, {
    align: "center",
  });

  // Subtitle
  doc.setFontSize(15);
  doc.setTextColor(80);
  doc.text("This Certificate is Proudly Presented To", 105, 50, {
    align: "center",
  });

  // Student Name
  doc.setFontSize(24);
  doc.setTextColor(0, 0, 0);
  doc.text(username || "Student", 105, 70, {
    align: "center",
  });

  // Category
  doc.setFontSize(16);
  doc.text(
    `For Successfully Completing the ${category.toUpperCase()} Quiz`,
    105,
    95,
    { align: "center" }
  );

  // Score
  doc.setFontSize(15);
  doc.text(`Score: ${score} / ${questions.length}`, 105, 120, {
    align: "center",
  });

  doc.text(`Percentage: ${percentage}%`, 105, 135, {
    align: "center",
  });

  // Congratulations
  doc.setFontSize(18);
  doc.setTextColor(34, 139, 34);
  doc.text(" Congratulations ", 105, 165, {
    align: "center",
  });

  // Date
  doc.setFontSize(13);
  doc.setTextColor(0);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 240);

  // Signature
  doc.line(140, 240, 185, 240);
  doc.text("Quiz Master", 150, 248);

  doc.save("Certificate.pdf");
};

if (finished) {
  const percentage = Math.round((score / questions.length) * 100);
  const highScore =
  Number(localStorage.getItem(category)) || 0;
  
  

if (percentage > highScore) {
  localStorage.setItem(category, percentage);
}

const leaderboard =
  JSON.parse(localStorage.getItem("leaderboard")) || [];

leaderboard.push({
  name: username,
  category,
  score,
   total: questions.length,
  percentage,
});

leaderboard.sort((a, b) => b.percentage - a.percentage);

localStorage.setItem(
  "leaderboard",
  JSON.stringify(leaderboard.slice(0, 10))
);
const history =
  JSON.parse(localStorage.getItem("quizHistory")) || [];

history.push({
  name: username,
  category,
  score,
  percentage,
  date: new Date().toLocaleDateString(),
});

localStorage.setItem(
  "quizHistory",
  JSON.stringify(history)
);

  return (
    <div className="result-card">

      <h1>🎉 Quiz Completed</h1>

      <div className="circle-score">
        {percentage}%
      </div>

      <h2>
        {score} / {questions.length} Correct
      </h2>
      <h3>
  High Score: {localStorage.getItem(category)}%
</h3>
<h2 style={{ marginTop: "30px" }}>🏆 Leaderboard</h2>

<div className="leaderboard">
  {(JSON.parse(localStorage.getItem("leaderboard")) || []).map(
    (user, index) => (
      <div key={index} className="leaderboard-item">
        <span>
          {index + 1}. {user.name}
        </span>

        <span>{user.percentage}%</span>
      </div>
    )
  )}
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

<button
  className="certificate-btn"
  onClick={downloadCertificate}
>
  📄 Download Certificate
</button>

  <button
    className="play-btn"
    onClick={() => window.location.reload()}
  >
    🔄 Play Again
  </button>

</div>

);
}

  return (
    
    
  <div className="quiz-container">

    {/* Header */}
    <div className="quiz-header">

      <h1 className="quiz-title">
        {category.replace("-", " ").toUpperCase()}
      </h1>

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

    {/* Progress */}
    <div className="progress">

      <div
        className="progress-bar"
        style={{
          width: `${
            ((currentQuestion + 1) / questions.length) * 100
          }%`,
        }}
      ></div>

    </div>
    <div className="timer-box">
    ⏰ Time Left: {timeLeft}s
</div>

    {/* Question */}

    <div className="question-card">

      <h2>
        {questions[currentQuestion].question}
      </h2>

    </div>

    {/* Options */}

  <div className="options">
  {questions[currentQuestion].options.map((option, index) => {

    let className = "option";

    if (selected) {
      if (option === questions[currentQuestion].answer) {
        className += " correct";
      } else if (option === selected) {
        className += " wrong";
      }
    }

    return (
      
      <button
        key={index}
        className={className}
        onClick={() => handleAnswer(option)}
      >
        {option}
      </button>
    );

  })}
</div>

{selected && (
  <div className="explanation-box">
    <h3>
      {selected === questions[currentQuestion].answer
        ? "✅ Correct!"
        : "❌ Wrong!"}
    </h3>

    <p>
      <strong>Correct Answer:</strong>{" "}
      {questions[currentQuestion].answer}
    </p>

    <p>
      {questions[currentQuestion].explanation ||
        "No explanation available."}
    </p>
  </div>
)}

<button
  className="next-btn"
  onClick={nextQuestion}
>
  {currentQuestion === questions.length - 1
    ? "Finish Quiz 🎯"
    : "Next ➜"}
</button>


  </div>
);
}

export default Quiz; 