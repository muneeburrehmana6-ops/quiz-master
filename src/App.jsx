import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import QuizLanding from "./pages/QuizLanding";
import Quiz from "./pages/Quiz";
import GroupHub from "./pages/GroupHub";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Leaderboard from "./pages/Leaderboard";
import History from "./pages/History";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />

        {/* Public study page + playable quiz */}
        <Route path="/quiz/:category" element={<QuizLanding />} />
        <Route path="/quiz/:category/play" element={<Quiz />} />
        <Route path="/result" element={<Result />} />

        {/* Subject hubs */}
        <Route path="/programming" element={<GroupHub groupKey="programming" />} />
        <Route path="/ai" element={<GroupHub groupKey="ai" />} />
        <Route path="/english" element={<GroupHub groupKey="english" />} />
        <Route path="/mathematics" element={<GroupHub groupKey="mathematics" />} />
        <Route path="/science" element={<GroupHub groupKey="science" />} />
        <Route path="/general-knowledge" element={<GroupHub groupKey="gk" />} />

        {/* Articles */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />

        {/* Accounts */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />

        {/* Trust pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
