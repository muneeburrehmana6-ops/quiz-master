import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(
  auth,
  email,
  password
);

localStorage.setItem(
  "username",
  userCredential.user.displayName || userCredential.user.email
);

alert("Login Successful ✅");

navigate("/");

  } catch (error) {
    if (error.code === "auth/user-not-found") {
      alert("No account found.");
    } else if (error.code === "auth/wrong-password") {
      alert("Incorrect password.");
    } else if (error.code === "auth/invalid-credential") {
      alert("Invalid email or password.");
    } else {
      alert(error.message);
    }
  
};
};

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Welcome </h1>

      <p>Enter your email and password.</p>

        <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
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