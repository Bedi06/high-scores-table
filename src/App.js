import React from 'react';
import './App.css';
import HighScoresTable from './HighScoresTable';
import allCountryScores from './scores';

function App() {

  const sortedCountryScores = allCountryScores.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1 className="mb-4">High Scores per Country </h1>
      {sortedCountryScores.map((country, index) => (
        <HighScoresTable key={index} country={country.name} />
      ))}
    </div>
  );
}

export default App;
