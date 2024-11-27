// MidSquareHashing.js
import React, { useState } from "react";
import "./MidSquareHashing.css";

function MidSquareHashing() {
  const [inputValue, setInputValue] = useState("");
  const [hashValue, setHashValue] = useState(null);
  const [squared, setSquared] = useState(null);

  const handleHashCalculation = (e) => {
    e.preventDefault();
    const number = parseInt(inputValue, 10);
    if (!isNaN(number)) {
      const squaredNumber = Math.pow(number, 2);
      const midHash = midSquareHash(squaredNumber);
      setSquared(squaredNumber);
      setHashValue(midHash);
    }
  };

  const midSquareHash = (number) => {
    const squaredStr = number.toString();
    const middleIndex = Math.floor(squaredStr.length / 2);
    return squaredStr.slice(middleIndex - 1, middleIndex + 1); // Extract middle digits
  };

  return (
    <div className="mid-square-hashing">
      <h1>Mid-Square Hashing Visualization</h1>
      <form onSubmit={handleHashCalculation}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
        />
        <button className="submit" type="submit">Hash</button>
      </form>

      {hashValue !== null && (
        <div className="animation-container">
          <div className="step">
            <p>Input: {inputValue}</p>
          </div>
          <div className="step square">
            <p>Squared: {squared}</p>
          </div>
          <div className="step middle-digits">
            <p>Extract Middle: {hashValue}</p>
          </div>
          <div className="step result">
            <p>Hash Value: {hashValue}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MidSquareHashing;
