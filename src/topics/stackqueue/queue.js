import React, { useState } from 'react';
import './Queue.css';

const Queue = () => {
  const [queue, setQueue] = useState([]);
  const [size, setSize] = useState(0);

  const enqueue = () => {
    const newValue = Math.floor(Math.random() * 10) + 1;
    setQueue((prevQueue) => [...prevQueue, newValue]);
    setSize(size + 1);
  };

  const dequeue = () => {
    if (size > 0) {
      const newQueue = [...queue];
      newQueue.shift();  // Remove from the front (FIFO)
      setQueue(newQueue);
      setSize(size - 1);
    }
  };

  const peek = () => {
    if (size > 0) {
      alert(`Front Element: ${queue[0]}`);
    } else {
      alert("Queue is empty.");
    }
  };

  const isEmpty = () => {
    alert(size === 0 ? "Queue is empty." : "Queue is not empty.");
  };

  const showSize = () => {
    alert(`Size: ${size}`);
  };

  return (
    <div>
      <div className="queue-wrapper">
        <div className="queue-container">
          <div className="queue">
            {queue.map((item, index) => (
              <div key={index} className="queue-item">
                {item}
              </div>
            ))}
          </div>
          <div className="queue-info">Size: {size}</div>
          <div className="buttons">
            <button className="ope" onClick={enqueue}>Enqueue()</button>
            <button className="ope" onClick={dequeue}>Dequeue()</button>
            <button className="ope" onClick={peek}>Peek()</button>
            <button className="ope" onClick={isEmpty}>isEmpty()</button>
            <button className="ope" onClick={showSize}>Size()</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queue;
