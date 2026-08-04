import "../styles/Leaderboard.css";

function Leaderboard() {
  const leaderboard =
    JSON.parse(localStorage.getItem("leaderboard")) || [];

  return (
    <div className="leaderboard-page">
      <h1>🏆 Leaderboard</h1>

      {leaderboard.length === 0 ? (
        <p>No Records Found</p>
      ) : (
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Category</th>
              <th>Score</th>
              <th>%</th>
            </tr>
          </thead>

          <tbody>
            {leaderboard.map((user, index) => (
              <tr key={index}>
                <td>
                  {index === 0
                    ? "🥇"
                    : index === 1
                    ? "🥈"
                    : index === 2
                    ? "🥉"
                    : index + 1}
                </td>

                <td>{user.name}</td>

                <td>{user.category.toUpperCase()}</td>

                <td>
                 {user.score}/{user.total}
                </td>

                <td>{user.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Leaderboard;