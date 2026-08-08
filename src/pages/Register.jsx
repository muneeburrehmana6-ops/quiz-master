import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import "../styles/Register.css";


function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 const handleRegister = async () => {
  if (
    !name ||
    !email ||
    !username ||
    !password ||
    !confirmPassword
  ) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
 const userCredential = await createUserWithEmailAndPassword(
  auth,
  email,
  password
);

await updateProfile(userCredential.user, {
  displayName: name,
});
    const user = {
      name,
      email,
      username,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful ✅");

    navigate("/login");

  } catch (error) {
  if (error.code === "auth/email-already-in-use") {
    alert("This email is already registered.");
  } else if (error.code === "auth/weak-password") {
    alert("Password should be at least 6 characters.");
  } else {
    alert(error.message);
  }
  
  }
};

  return (
    <div className="register-page">
      <div className="register-card">

        <h1>Create Account 🚀</h1>

        <p>Register to start your QuizMaster journey.</p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
        />

        <button
          className="register-btn"
          onClick={handleRegister}
        >
          Register
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;