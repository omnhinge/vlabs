import React from "react";

const Introduction = () => {
  return (
    <div className="para">
      <h2>Introduction to Stack and Queue</h2>

      <h3>Stack</h3>
      <p>
        A  Stack  is a fundamental data structure that follows the  Last In, First Out (LIFO)  principle. This means that the last element added to the stack will be the first one to be removed. Stacks are commonly used in scenarios such as:
        <ul>
          <li>Function call management (call stack)</li>
          <li>Undo/redo operations in applications</li>
          <li>Backtracking algorithms (e.g., in puzzles or navigation)</li>
        </ul>
        In a Stack, operations such as  push  (add element) and  pop  (remove element) are performed on the top of the stack, which makes it efficient for managing data in a restricted manner. A stack is especially useful when you need to maintain a "last added, first removed" sequence of operations.
      </p>

      <h3>Queue</h3>
      <p>
        A  Queue , on the other hand, follows the  First In, First Out (FIFO)  principle. This means that the first element added to the queue will be the first one to be removed. Queues are commonly used in scenarios like:
        <ul>
          <li>Task scheduling and job management</li>
          <li>Print job management</li>
          <li>Event-driven programming and message queues</li>
        </ul>
        In a Queue, elements are added to the rear (enqueue) and removed from the front (dequeue). This ensures that the order of elements is preserved and processed in the sequence they were added, making queues ideal for handling requests or tasks in a fair and ordered manner.
      </p>
    </div>
  );
};

export default Introduction;