import "../styles/History.css";

function History() {
  const history =
    JSON.parse(localStorage.getItem("quizHistory")) || [];

  const clearHistory = () => {
    if (window.confirm("Are you sure you want to clear quiz history?")) {
      localStorage.removeItem("quizHistory");
      alert("✅ Quiz History Deleted Successfully");
      window.location.reload();
    }
  };

  return (
    <div className="history-page">
      <h1>📜 Quiz History</h1>

      {history.length === 0 ? (
        <h2>No Quiz History Found 😔</h2>
      ) : (
        <>
          <button
            className="delete-history-btn"
            onClick={clearHistory}
          >
            🗑 Clear History
          </button>

          <table className="history-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Score</th>
                <th>Percentage</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {history.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.category.toUpperCase()}</td>
                  <td>{item.score}</td>
                  <td>{item.percentage}%</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default History;