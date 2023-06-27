import React from 'react';
import './App.css';
import HighScoresTable from './HighScoresTable';
import allCountryScores from './scores';

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1 className="mb-4">High Scores per Country </h1>
      {allCountryScores.map((country, index) => (
        <HighScoresTable key={index} country={country.name} />
      ))}
    </div>
  );
}

export default App;
