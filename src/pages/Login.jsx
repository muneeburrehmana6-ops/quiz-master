import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No account found. Please register first.");
    return;
  }

  if (
    username === savedUser.username &&
    password === savedUser.password
  ) {
    localStorage.setItem("username", savedUser.name);

    alert("Login Successful ✅");

    navigate("/");
  } else {
    alert("Invalid Username or Password ❌");
  }
};

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Welcome </h1>

      <p>Enter your username and password.</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="show-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? " Hide Password" : "👁 Show Password"}
        </button>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>
        <p style={{ marginTop: "15px" }}>
  <Link to="/forgot-password">
    Forgot Password?
  </Link>
</p>

      </div>
    </div>
  );
}

export default Login;