import "../styles/Features.css";

function Features() {
  return (
    <section className="features">

      <h2>Why Choose QuizMaster?</h2>

      <div className="feature-grid">

        <div className="feature-card">
          <h3>⚡ Fast Quizzes</h3>
          <p>Take quizzes instantly and practice your knowledge without unnecessary waiting.</p>
        </div>

        <div className="feature-card">
          <h3>🏆 Leaderboard</h3>
          <p>Compare your quiz performance and track your progress with leaderboard scores.</p>
        </div>

        <div className="feature-card">
          <h3>🧠 Learning Challenges</h3>
          <p>Challenge yourself with quizzes designed to help you practice and improve your knowledge.</p>
        </div>

        <div className="feature-card">
          <h3>📱 Mobile Friendly</h3>
          <p>Works perfectly on phones, tablets and desktops.</p>
        </div>

      </div>

    </section>
  );
}

export default Features;