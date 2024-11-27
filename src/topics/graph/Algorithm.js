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
  list: {
    fontSize: 'x-large',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    paddingLeft: '25px',
  },
};

const Algorithm =() =>{
    return(
        <div className="algorithm-container">
      <h1 className="ques">Dijkstra's Algorithm</h1>
      
      <h2 className="para">Overview</h2>
      <p className="para">
        Dijkstra's Algorithm is a graph algorithm that finds the shortest path from a source vertex to all other vertices in a weighted graph.
      </p>

      <h2>Steps</h2>
      <ol style={styles.list}>
        <li>Set the distance to the source to 0 and the distance to the remaining vertices to infinity.</li>
        <li>Set the current vertex to the source.</li>
        <li>Flag the current vertex as visited.</li>
        <li>
          For all vertices adjacent to the current vertex, set the distance from the source to the adjacent vertex 
          equal to the minimum of its present distance and the sum of the weight of the edge from the current vertex 
          to the adjacent vertex and the distance from the source to the current vertex.
        </li>
        <li>
          From the set of unvisited vertices, set one as the new current vertex that has the minimum weight edge 
          from a visited vertex. The new current vertex must be unvisited and have a minimum weight edge connecting it 
          to a visited vertex.
        </li>
        <li>Repeat steps 3-5 until all vertices are flagged as visited.</li>
      </ol>

      <h2>Pseudocode</h2>
      <pre style={{fontSize:25}}>
        {`
function Dijkstra(Graph, source):
    dist[source] ← 0                 // Initialization
    create vertex set Q
    for each vertex v in Graph:
        if v ≠ source
            dist[v] ← INFINITY        // Unknown distance from source to v
            prev[v] ← UNDEFINED       // Predecessor of v
        Q.add_with_priority(v, dist[v])

    while Q is not empty:             // The main loop
        u ← Q.extract_min()           // Remove and return best vertex
        for each neighbor v of u:     // Only v that are still in Q
            alt ← dist[u] + length(u, v)
            if alt < dist[v]
                dist[v] ← alt
                prev[v] ← u
                Q.decrease_priority(v, alt)
    return dist, prev
        `}
      </pre>
    </div>
    );
}

export default Algorithm;