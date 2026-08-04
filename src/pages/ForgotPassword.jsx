import { useState } from "react";
import "../styles/Login.css";

function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleReset = () => {
    if (!username || !newPassword) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem(`${username}_password`, newPassword);

    alert("Password Updated Successfully ✅");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Forgot Password</h1>

        <p>Reset your password</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={handleReset}
        >
          Reset Password
        </button>

      </div>
    </div>
  );
}

export default ForgotPassword;