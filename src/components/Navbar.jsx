import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const username = localStorage.getItem("username");

  return (
    <nav className="navbar">
      <div className="logo">QuizMaster</div>

      <ul className="nav-links">
        <li>
          <button
            className="dark-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </li>

        {/* Always Visible */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        
        <li><Link to="/history">History</Link></li>
                   <li>
  <Link to="/about">About</Link>
</li>
<li>
  <Link to="/contact">Contact</Link>
</li>

        {/* Login Status */}
        {username ? (
          <li><Link to="/profile">Profile</Link></li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            
  

          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;