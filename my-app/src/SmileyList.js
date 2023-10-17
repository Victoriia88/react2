import React, { useState } from "react";
import Smiley from "./Smiley";
import "./App.css";

const SmileyList = () => {
  const [smileys, setSmileys] = useState([
    { id: 1, text: "😃", count: 0 },
    { id: 2, text: "😍", count: 0 },
    { id: 3, text: "😂", count: 0 },
  ]);

  const [showResults, setShowResults] = useState(false);

  const handleSmileyClick = (id) => {
    setSmileys((prevSmileys) =>
      prevSmileys.map((smiley) =>
        smiley.id === id ? { ...smiley, count: smiley.count + 1 } : smiley
      )
    );
  };

  const determineWinner = () => {
    if (showResults) {
      const maxCount = Math.max(...smileys.map((smiley) => smiley.count));
      const winners = smileys.filter((smiley) => smiley.count === maxCount);

      if (maxCount === 0) {
        return [{ text: "Переможця не знайдено" }];
      }

      return winners;
    } else {
      return [];
    }
  };

  return (
    <div className="smiley-list">
      {smileys.map((smiley) => (
        <Smiley
          key={smiley.id}
          text={smiley.text}
          count={smiley.count}
          onClick={() => handleSmileyClick(smiley.id)}
        />
      ))}
      <button onClick={() => setShowResults(true)}>Show Results</button>
      {showResults && (
        <div className="winner">
          <h2>Переможці:</h2>
          {determineWinner().map((winner, index) => (
            <div key={index}>{winner.text}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SmileyList;
