import React, { useState } from 'react';
import './Stack.css';
import Queue from './queue';

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [size, setSize] = useState(0);

  const push = () => {
    const newValue = Math.floor(Math.random() * 10) + 1;
    // Push new value to the top of the stack (end of the array)
    setStack([...stack, newValue]);
    setSize(size + 1);
  };

  const pop = () => {
    if (size > 0) {
      // Remove the top element (last element of the array)
      setStack(stack.slice(0, stack.length - 1));
      setSize(size - 1);
    }
  };

  const peek = () => {
    if (size > 0) {
      alert(`Top Element: ${stack[stack.length - 1]}`);
    } else {
      alert("Stack is empty.");
    }
  };

  const isEmpty = () => {
    alert(size === 0 ? "Stack is empty." : "Stack is not empty.");
  };

  const showSize = () => {
    alert(`Size: ${size}`);
  };

  return (
    <div><>
      <h1>stack visualizer</h1>
      <div className="stack-wrapper">
        <div className="stack-container">
          <div className="stack">
            {stack.map((item, index) => (
              <div key={index} className="stack-item">
                {item}
              </div>
            ))}
          </div>
          <div className="stack-info">Size: {size}</div>
          <div className="buttons">
            <button className="ope" onClick={push}>push()</button>
            <button className="ope" onClick={pop}>pop()</button>
            <button className="ope" onClick={peek}>peek()</button>
            <button className="ope" onClick={isEmpty}>isEmpty()</button>
            <button className="ope" onClick={showSize}>size()</button>
          </div>
        </div>
      </div>
      <h1>queue visualizer</h1>
      <Queue/>
      </>
    </div>
  );
};

export default Stack;
