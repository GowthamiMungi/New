// src/components/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QuizHistory from './QuizHistory';
import Leaderboard from './Leaderboard';
// import QuizHistory from './QuizHistory.css';


const App = () => {
  const [quizHistory, setQuizHistory] = useState([
    { score: 8 },
    { score: 7 },
    { score: 10 },
  ]);

  const [leaderboard, setLeaderboard] = useState([
    { username: 'User1', score: 15 },
    { username: 'User2', score: 12 },
    { username: 'User3', score: 10 },
  ]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/history">Quiz History</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
        <Route
          path="/history"
          element={<QuizHistory history={quizHistory} />}
        />
        <Route
          path="/leaderboard"
          element={<Leaderboard leaderboard={leaderboard} />}
        />
         

        </Routes>

      </div>
    </Router>
  );
};

export default App;
