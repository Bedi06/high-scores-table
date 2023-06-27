import React from "react";

function PlayerScore({ player, score }) {
    return (
      <tr>
        <td>{player}</td>
        <td>{score}</td>
      </tr>
    );
  }

export default PlayerScore;