import { useEffect, useState } from "react";
import "../styles/Leaderboard.css";

import { db } from "../firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const q = query(
          collection(db, "quizHistory"),
          orderBy("percentage", "desc"),
          limit(10)
        );

        const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setLeaderboard(data);
      } catch (error) {
        console.error("Firestore Error:", error);
      }
    };

    fetchLeaderboard();
  }, []);

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
              <th>Percentage</th>
            </tr>
          </thead>

          <tbody>
            {leaderboard.map((user, index) => (
              <tr key={user.id}>
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

                <td>{user.category?.toUpperCase()}</td>

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