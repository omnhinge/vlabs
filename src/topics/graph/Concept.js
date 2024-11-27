import React from "react";

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
    paragraph: {
      marginBottom: '10px',
      fontSize: '16px',
    },
    list: {
      paddingLeft: '20px',
      fontSize: '16px',
    },
  };

const Concept =() =>{
    return(
        <div style={styles.container}>
      <h1 style={styles.heading}>Dijkstra's Algorithm Overview</h1>
      <p className="para">
        <strong>The Problem:</strong> In many applications, one wants to obtain the shortest path from a to b. 
        Depending on the context, the length of the path does not necessarily have to be measured in meters. 
        It could also represent costs—whether we have to pay for using it or if we receive some. 
        In general, we speak of <em>cost</em>. Each part of the path—also called an "edge"—is assigned a cost.
      </p>
      <p className="para">
        Dijkstra's Algorithm computes the shortest—or cheapest—paths if all costs are positive numbers. 
        However, if negative costs are allowed, the algorithm fails.
      </p>
      <h2 style={styles.subheading}>Concept</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/d0avWqgG_48?si=3Cm_kPGiiAItubiC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h2 style={styles.subheading}>Other Single-Source Shortest Path Algorithms</h2>
      <ul style={styles.list}>
        <li>
          <strong>Bellman–Ford Algorithm:</strong> Computes shortest paths from a single source vertex to all other 
          vertices in a weighted digraph. Slower than Dijkstra's Algorithm but more versatile, as it can handle graphs 
          with negative edge weights.
        </li>
        <li>
          <strong>BFS Algorithm:</strong> In unweighted graphs, this algorithm solves the problem in O(V + E) time. 
          It works even when negative weight cycles are present.
        </li>
      </ul>
      <h2 style={styles.subheading}>Applications of Dijkstra's Algorithm</h2>
      <p className="para">
        Dijkstra's Algorithm is used in scenarios where the graph has positive weights only. It is faster than the 
        Bellman–Ford algorithm and is widely used in network routing, maps, and other optimization problems.
      </p>
    </div>
    );
}

export default Concept;