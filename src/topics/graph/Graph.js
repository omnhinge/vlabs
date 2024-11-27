// src/components/Graph.js
import React, { useState, useEffect } from 'react';

function Graph({ nodes, edges, startNode, step }) {
  const [distances, setDistances] = useState({});
  const [visited, setVisited] = useState({});
  const [unvisitedNodes, setUnvisitedNodes] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const [paths, setPaths] = useState({});

  useEffect(() => {
    // Initialize distances and unvisited nodes when the start node or nodes list changes
    const initDistances = nodes.reduce((acc, node) => {
      acc[node.id] = Infinity;
      return acc;
    }, {});
    initDistances[startNode] = 0;

    const initPaths = nodes.reduce((acc, node) => {
      acc[node.id] = node.id === startNode ? [startNode] : [];
      return acc;
    }, {});

    setDistances(initDistances);
    setPaths(initPaths);
    setVisited({});
    setUnvisitedNodes(nodes.map((node) => node.id));
    setCurrentNode(startNode);
  }, [startNode, nodes]);

  useEffect(() => {
    if (step > 0) {
      dijkstraStep();
    }
  }, [step]);

  const dijkstraStep = () => {
    if (!currentNode || unvisitedNodes.length === 0) return;

    // Mark the current node as visited
    setVisited((prev) => ({ ...prev, [currentNode]: true }));
    setUnvisitedNodes((prev) => prev.filter((node) => node !== currentNode));

    // Find neighbors of the current node and update distances
    edges.forEach((edge) => {
      const isNeighbor = (edge.source === currentNode && !visited[edge.target]) ||
                         (edge.target === currentNode && !visited[edge.source]);
      
      if (isNeighbor) {
        const neighbor = edge.source === currentNode ? edge.target : edge.source;
        const newDist = distances[currentNode] + edge.weight;
        if (newDist < distances[neighbor]) {
          setDistances((prevDistances) => ({
            ...prevDistances,
            [neighbor]: newDist,
          }));
          setPaths((prevPaths) => ({
            ...prevPaths,
            [neighbor]: [...prevPaths[currentNode], neighbor], // Update path
          }));
        }
      }
    });

    // Select the next current node with the smallest distance among unvisited nodes
    const nextNode = unvisitedNodes
      .filter((node) => !visited[node] && distances[node] < Infinity)
      .reduce(
        (closest, node) =>
          distances[node] < distances[closest] ? node : closest,
        unvisitedNodes[0]
      );

    setCurrentNode(distances[nextNode] < Infinity ? nextNode : null);
  };

  return (
    <div>
      <svg width={500} height={500} style={{ border: '2px solid brown' , borderRadius: '20px'}}>
        {edges.map((edge, i) => (
          <line
            key={i}
            x1={nodes.find((node) => node.id === edge.source).x}
            y1={nodes.find((node) => node.id === edge.source).y}
            x2={nodes.find((node) => node.id === edge.target).x}
            y2={nodes.find((node) => node.id === edge.target).y}
            stroke="gray"
            strokeWidth={2}
          />
        ))}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={15}
              fill={
                visited[node.id]
                  ? "lightgreen"
                  : distances[node.id] === Infinity
                  ? "white"
                  : "lightblue"
              }
              stroke="black"
            />
            <text x={node.x} y={node.y} textAnchor="middle" dy=".3em">
              {node.id} ({distances[node.id] === Infinity ? "∞" : distances[node.id]})
            </text>
          </g>
        ))}
      </svg>

      {/* Display shortest paths */}
      <div>
        <h3>Shortest Paths from {startNode}</h3>
        <ul>
          {Object.keys(distances).map((nodeId) => {
            const path = paths[nodeId] || [];  // Ensure the path is initialized to an empty array if undefined
            return (
              <li key={nodeId}>
                <strong>To {nodeId}:</strong> Path: {path.length > 0 ? path.join(" -> ") : "None"}, 
                Distance: {distances[nodeId] === Infinity ? "∞" : distances[nodeId]}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Graph;
