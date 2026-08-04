import "../styles/Features.css";

function Features() {
  return (
    <section className="features">

      <h2>Why Choose QuizMaster?</h2>

      <div className="feature-grid">

        <div className="feature-card">
          <h3>⚡ Fast Quizzes</h3>
          <p>Take quizzes instantly without waiting.</p>
        </div>

        <div className="feature-card">
          <h3>🏆 Leaderboard</h3>
          <p>Compete with players around the world.</p>
        </div>

        <div className="feature-card">
          <h3>🧠 Daily Challenge</h3>
          <p>New quiz every day to improve your skills.</p>
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