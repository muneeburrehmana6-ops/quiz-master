import { useEffect, useState } from "react";
import "../styles/History.css";

import { auth, db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const user = auth.currentUser;

      if (!user) return;

      try {
        const q = query(
          collection(db, "quizHistory"),
          where("uid", "==", user.uid)
        );

        const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setHistory(data);
      } catch (error) {
        console.error("Firestore Error:", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-page">
      <h1>📜 Quiz History</h1>

      {history.length === 0 ? (
        <h2>No Quiz History Found 😔</h2>
      ) : (
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
            {history.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category?.toUpperCase()}</td>
                <td>
                  {item.score}/{item.total}
                </td>
                <td>{item.percentage}%</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default History;