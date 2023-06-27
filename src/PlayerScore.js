import React from "react";

function PlayerScore({ player, score }) {
    return (
      <tr>
        <td className="text-end">{player}</td>
        <td className="text-end">{score}</td>
      </tr>
    );
  }

export default PlayerScore;