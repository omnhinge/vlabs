import React from 'react';

const Introduction = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Introduction to Dijkstra's Algorithm</h1>
      <p className='para'>
        Dijkstra's Algorithm is one of the most popular algorithms for finding the shortest path between nodes in a graph.
        It was created by Edsger W. Dijkstra in 1956 and is widely used in computer science for solving shortest path problems.
      </p>
      <h2 style={styles.subHeader}>Key Features:</h2>
      <p className='para'>
      <ul style={styles.list}>
        <li>It works with graphs that have non-negative edge weights.</li>
        <li>It finds the shortest path from a single source node to all other nodes in the graph.</li>
        <li>It uses a greedy approach by selecting the node with the smallest known distance at each step.</li>
      </ul>
      <h2 style={styles.subHeader}>Applications:</h2>
      <ul style={styles.list}>
        <li>Navigation systems (e.g., Google Maps) to find the shortest route.</li>
        <li>Network routing to determine the most efficient path.</li>
        <li>In gaming, for pathfinding in game environments.</li>
      </ul>
      </p>
      <p className='para'>
        Dijkstra's Algorithm uses a priority queue to keep track of the next node to process, ensuring efficient computation.
        Its time complexity is <code>O(V + E log V)</code> when implemented with a priority queue.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  },
  heading: {
    fontSize: '28px',
    color: '#0056b3',
  },
  subheading: {
    fontSize: '22px',
    marginTop: '20px',
    color: '#007bff',
  },
  list: {
    fontSize: 'x-large',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    paddingLeft: '25px',
  },
};



export default Introduction;
