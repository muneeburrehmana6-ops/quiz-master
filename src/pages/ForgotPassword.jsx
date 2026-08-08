import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/Login.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);

      alert("Password reset link sent to your email ✅");

    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("No account found with this email.");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email address.");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Forgot Password</h1>

        <p>Enter your email to reset your password</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={handleReset}
        >
          Send Reset Link
        </button>

      </div>
    </div>
  );
}

export default ForgotPassword;