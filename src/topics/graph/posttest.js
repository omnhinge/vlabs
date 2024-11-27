import React, { useState } from 'react';
import '../linkedlist/Posttest.css';

const questions = [
  {
    id: 1,
    question: "What happens if there are two paths with the same total weight in Dijkstra's Algorithm?",
    options: [
      { id: 'a', text: 'It picks one arbitrarily', correct: true },
      { id: 'b', text: 'It processes both paths', correct: false },
      { id: 'c', text: 'It raises an error', correct: false },
      { id: 'd', text: 'It terminates the process', correct: false },
    ],
  },
  {
    id: 2,
    question: "How does Dijkstra's Algorithm update the distance of adjacent nodes?",
    options: [
      { id: 'a', text: 'Adds a fixed value to the current distance', correct: false },
      { id: 'b', text: 'Takes the minimum of the current distance and the new computed distance', correct: true },
      { id: 'c', text: 'Multiplies the weights of the edges', correct: false },
      { id: 'd', text: 'Does not update distances', correct: false },
    ],
  },
  {
    id: 3,
    question: "Which data structure is most commonly used with Dijkstra's Algorithm?",
    options: [
      { id: 'a', text: 'Stack', correct: false },
      { id: 'b', text: 'Queue', correct: false },
      { id: 'c', text: 'Priority Queue', correct: true },
      { id: 'd', text: 'Linked List', correct: false },
    ],
  },
  {
    id: 4,
    question: "Why does Dijkstra's Algorithm fail with negative edge weights?",
    options: [
      { id: 'a', text: 'It cannot handle graphs with cycles', correct: false },
      { id: 'b', text: 'The algorithm does not properly update distances', correct: true },
      { id: 'c', text: 'It is unable to use a priority queue', correct: false },
      { id: 'd', text: 'It requires an unweighted graph', correct: false },
    ],
  },
  {
    id: 5,
    question: "When implemented with a Fibonacci Heap, what is the time complexity of Dijkstra's Algorithm?",
    options: [
      { id: 'a', text: 'O(V^2)', correct: false },
      { id: 'b', text: 'O(V + E log V)', correct: false },
      { id: 'c', text: 'O(E + V log V)', correct: true },
      { id: 'd', text: 'O(V log V)', correct: false },
    ],
  },
    ];
    

function Posttest() {
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

export default Posttest;
