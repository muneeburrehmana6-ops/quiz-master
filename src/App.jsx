import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import History from "./pages/History";
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
function App()
 {const [darkMode, setDarkMode] = useState(
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

        {/* Quiz Category Route */}
        <Route path="/quiz/:category" element={<Quiz />} />

        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/programming" element={<Programming />} />
         <Route path="/history" element={<History />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/forgot-password"element={<ForgotPassword />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/privacy-policy" element={<Privacy />} />
         <Route path="/terms" element={<Terms />} />

     </Routes>
</>
  );
}

export default App;