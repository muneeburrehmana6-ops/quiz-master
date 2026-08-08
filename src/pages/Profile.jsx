import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import "../styles/Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
const [username, setUsername] = useState("Guest");
  const [newName, setNewName] = useState(username);
  const [profileImage, setProfileImage] = useState(
  localStorage.getItem("profileImage") || ""
  
);
useEffect(() => {
  setNewName(username);
}, [username]);
  
  const [showEdit, setShowEdit] = useState(false);
  const [totalQuizzes, setTotalQuizzes] = useState(0);
const [average, setAverage] = useState(0);
const [highScore, setHighScore] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    setUsername(
  currentUser.displayName || currentUser.email
);
    } else {
      navigate("/login");
    }
  });

  return () => unsubscribe();
}, [navigate]);
useEffect(() => {
  const fetchUserStats = async () => {
    if (!user) return;

    try {
      const q = query(
        collection(db, "quizHistory"),
        where("uid", "==", user.uid)
      );

      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map((doc) => doc.data());

      setTotalQuizzes(data.length);

      if (data.length > 0) {
        const avg = Math.round(
          data.reduce((sum, item) => sum + item.percentage, 0) /
            data.length
        );

        setAverage(avg);

        const highest = Math.max(
          ...data.map((item) => item.percentage)
        );

        setHighScore(highest);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchUserStats();
}, [user]);
const handleLogout = async () => {
  if (window.confirm("Are you sure you want to logout?")) {
    await signOut(auth);

    localStorage.removeItem("username");
    localStorage.removeItem("user");

    navigate("/login");
  }
};
const handleChangePassword = async () => {
  if (!user) return;

  try {
    await sendPasswordResetEmail(auth, user.email);

    alert("Password reset link sent to your email ✅");
  } catch (error) {
    alert(error.message);
  }
};

 

  // Badge
  let badge = "🥉 Bronze Member";

  if (totalQuizzes >= 10) badge = "🥈 Silver Member";
  if (totalQuizzes >= 25) badge = "🥇 Gold Member";
  if (totalQuizzes >= 50) badge = "💎 Diamond Member";

  // Progress
  const progress = Math.min(totalQuizzes * 10, 100);

  
    const handleImageUpload = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    localStorage.setItem("profileImage", reader.result);
    setProfileImage(reader.result);
  };

  reader.readAsDataURL(file);
};

const saveProfile = () => {
  setUsername(newName);
  localStorage.setItem("username", newName);

  alert("✅ Profile Updated Successfully");
  setShowEdit(false);
};

  return (
    <div className="profile-page">
      <div className="profile-card">

       <div className="profile-avatar">

  {profileImage ? (
    <img
      src={profileImage}
      alt="Profile"
      className="profile-img"
    />
  ) : (
    username.charAt(0).toUpperCase()
  )}

</div>

        <h1>Welcome, {username} 👋</h1>

        <p>QuizMaster Member</p>

        <h4>📅 Member Since: {new Date().getFullYear()}</h4>

        <div className="badge-box">
          <h3>{badge}</h3>
        </div>

        <h3 style={{ marginTop: "20px" }}>
          Profile Progress
        </h3>

        <div className="progress-container">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>

        <div className="profile-stats">

          <div className="stat-box">
            <h2>{totalQuizzes}</h2>
            <p>Quizzes Played</p>
          </div>

          <div className="stat-box">
            <h2>{highScore}%</h2>
            <p>High Score</p>
          </div>

          <div className="stat-box">
            <h2>{average}%</h2>
            <p>Average Score</p>
          </div>

        </div>

        <hr style={{ margin: "30px 0" }} />

        <button
          className="edit-btn"
          onClick={() => setShowEdit(!showEdit)}
        >
          {showEdit ? "❌ Cancel" : "✏️ Edit Profile"}
        </button>

        {showEdit && (
          <>
            <input
              type="text"
              placeholder="New Username"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />

           
            <label className="upload-label">
  📷 Upload Profile Picture
</label>

<input
  type="file"
  accept="image/*"
  onChange={handleImageUpload}
/>
            

            <button
              className="save-btn"
              onClick={saveProfile}
            >
              💾 Save Changes
            </button>
          </>
        )}
<button
  className="save-btn"
  onClick={handleChangePassword}
>
  🔒 Change Password
</button>

<button
  className="logout-btn"
  onClick={handleLogout}
>
  🚪 Logout
</button>

      </div>
    </div>
  );
}

export default Profile;