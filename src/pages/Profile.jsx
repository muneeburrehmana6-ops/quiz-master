import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

function Profile() {
  const username = localStorage.getItem("username") || "Guest";

  const [newName, setNewName] = useState(username);
  const [profileImage, setProfileImage] = useState(
  localStorage.getItem("profileImage") || ""
);
  const [newPassword, setNewPassword] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("username");
      navigate("/login");
      window.location.reload();
    }
  };

  const history =
    JSON.parse(localStorage.getItem("quizHistory")) || [];

  const totalQuizzes = history.length;

  const average =
    totalQuizzes > 0
      ? Math.round(
          history.reduce(
            (sum, item) => sum + item.percentage,
            0
          ) / totalQuizzes
        )
      : 0;

  const leaderboard =
    JSON.parse(localStorage.getItem("leaderboard")) || [];

  const userScores = leaderboard.filter(
    (item) => item.name === username
  );

  const highScore =
    userScores.length > 0
      ? Math.max(...userScores.map((u) => u.percentage))
      : 0;

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
  if (!newName.trim()) {
    alert("Please enter a username");
    return;
  }

  localStorage.setItem("username", newName);

  if (newPassword) {
    localStorage.setItem(`${newName}_password`, newPassword);
  }

  alert("✅ Profile Updated Successfully");
  window.location.reload();
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

            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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