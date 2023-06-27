import React from "react";
import PlayerScore from "./PlayerScore";
import allCountryScores from "./scores";

function HighScoresTable({ country }) {
  const scores = allCountryScores.find((item) => item.name === country)?.scores;

  if (!scores) {
    return null;
  }
  const sortedScores = scores.sort((a, b) => b.s - a.s);


  return (
   <div className="d-flex justify-content-center"> 
        <div className="my-4">
            <h2 className="mb-3 text-center">High Scores : {country} </h2>
                <table className="table"> 
                    <tbody>
                        {sortedScores.map((score, index) => (
                            <PlayerScore key={index} player={score.n} score={score.s} />
                        ))}
                    </tbody>
                </table>
        </div>
   </div> 
  );
}

export default HighScoresTable;
