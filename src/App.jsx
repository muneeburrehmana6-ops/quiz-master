import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Leaderboard from "./pages/Leaderboard";

import Programming from "./pages/Programming";
import GeneralKnowledge from "./pages/GeneralKnowledge";
import AI from "./pages/AI";
import English from "./pages/English";
import Mathematics from "./pages/Mathematics";
import Science from "./pages/Science";


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
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<Categories />} />

        <Route path="/quiz/:category" element={<Quiz />} />

        <Route path="/result" element={<Result />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/leaderboard" element={<Leaderboard />} />

        <Route
          path="/programming"
          element={<Programming />}
        />
  ]
      
        <Route path="/ai" element={<AI />} />

        <Route
          path="/general-knowledge"
          element={<GeneralKnowledge />}
        />
        <Route path="/english" element={<English />} />
<Route path="/science" element={<Science />} />

      

        <Route path="/history" element={<History />} />

        <Route path="/profile" element={<Profile />} />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/privacy-policy"
          element={<Privacy />}
        />
        <Route path="/mathematics" element={<Mathematics />} />

        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        
      </Routes>
    </>
  );
}

export default App;