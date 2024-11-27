import React, { useState } from 'react';
import '../linkedlist/Posttest.css';

const questions = [
  {
    id: 1,
    question: "What is the shortest path in a graph?",
    options: [
      { id: 'a', text: 'The path with the fewest edges', correct: false },
      { id: 'b', text: 'The path with the least total weight', correct: true },
      { id: 'c', text: 'The longest path in the graph', correct: false },
      { id: 'd', text: 'The path that forms a cycle', correct: false },
    ],
  },
  {
    id: 2,
    question: "What is a weighted graph?",
    options: [
      { id: 'a', text: 'A graph where each edge has a value associated with it', correct: true },
      { id: 'b', text: 'A graph where all nodes have equal weights', correct: false },
      { id: 'c', text: 'A graph with multiple edges between nodes', correct: false },
      { id: 'd', text: 'A graph with directed edges only', correct: false },
    ],
  },
  {
    id: 3,
    question: "What is the primary goal of a single-source shortest path algorithm?",
    options: [
      { id: 'a', text: 'To find the shortest path between all pairs of nodes', correct: false },
      { id: 'b', text: 'To find the shortest path from a given source to all other nodes', correct: true },
      { id: 'c', text: 'To detect cycles in a graph', correct: false },
      { id: 'd', text: 'To traverse all nodes in the graph', correct: false },
    ],
  },
  {
    id: 4,
    question: "What is a priority queue used for in algorithms?",
    options: [
      { id: 'a', text: 'To process elements in the order they are added', correct: false },
      { id: 'b', text: 'To process elements based on their priority or weight', correct: true },
      { id: 'c', text: 'To store sorted data', correct: false },
      { id: 'd', text: 'To reverse the order of elements', correct: false },
    ],
  },
  {
    id: 5,
    question: "What is the importance of edge weights in graph algorithms?",
    options: [
      { id: 'a', text: 'They determine the direction of the edge', correct: false },
      { id: 'b', text: 'They determine the cost or distance associated with traveling along the edge', correct: true },
      { id: 'c', text: 'They are used to detect cycles in the graph', correct: false },
      { id: 'd', text: 'They are not important for any algorithms', correct: false },
    ],
  },
];

function Pretest() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswerChange = (questionId, optionId) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const calculatedScore = questions.reduce((acc, question) => {
      return acc + (answers[question.id] === question.options.find(option => option.correct)?.id ? 1 : 0);
    }, 0);
    
    setScore(calculatedScore);
    alert(`Pretest submitted! Your score is ${calculatedScore} out of ${questions.length}.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map(question => (
        <fieldset key={question.id} className="question-fieldset">
          <legend className="question-text">{question.question}</legend>
          {question.options.map(option => (
            <div key={option.id} className="option">
              <label className="option-label">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.id}
                  checked={answers[question.id] === option.id}
                  onChange={() => handleAnswerChange(question.id, option.id)}
                />
                {option.text}
              </label>
            </div>
          ))}
        </fieldset>
      ))}
      <button type="submit" className="submit-button">Submit</button>
      {score !== null && <div className="score-display">Your score: {score}</div>}
    </form>
  );
}

export default Pretest;
