import React, { useState, useEffect } from 'react';
import Graph from './Graph';
import ControlPanel from './ControlPanel';

const generateRandomPosition = (width, height) => {
  const minDistance = 50;
  const x = Math.floor(Math.random() * (width - minDistance * 2)) + minDistance;
  const y = Math.floor(Math.random() * (height - minDistance * 2)) + minDistance;
  return { x, y };
};

const messages = [
  "Starting at node.",
  "Checking shortest path from source node.",
  "Evaluating paths.",
  "Graph traversal complete. Path found!"
];

function Demo() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [startNode, setStartNode] = useState('A');
  const [step, setStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // To store error message

  useEffect(() => {
    resetGraph();
  }, []);

  const resetGraph = () => {
    setNodes([]);
    setEdges([]);
    setStep(0);
    setIsComplete(false);
    setErrorMessage(''); // Reset error message
  };

  const handleNext = () => {
    if (step < messages.length - 1) {
      setStep((prevStep) => prevStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleReset = () => {
    resetGraph();
  };

  const handleAddNode = (nodeName) => {
    // Check if node already exists
    if (nodes.find(node => node.id === nodeName)) {
      setErrorMessage(`Node "${nodeName}" already exists!`);
    } else {
      const { x, y } = generateRandomPosition(500, 500);
      setNodes((prevNodes) => [...prevNodes, { id: nodeName, x, y }]);
      setErrorMessage(''); // Clear error message if node is added successfully
    }
  };

  const handleAddEdge = (source, target, weight) => {
    // Check if both nodes exist
    const sourceNodeExists = nodes.some(node => node.id === source);
    const targetNodeExists = nodes.some(node => node.id === target);

    if (!sourceNodeExists || !targetNodeExists) {
      setErrorMessage(`Edge cannot be added. One or both nodes do not exist!`);
    } else {
      setEdges((prevEdges) => [...prevEdges, { source, target, weight }]);
      setErrorMessage(''); // Clear error message if edge is added successfully
    }
  };

  const handleSetStartNode = (node) => {
    // Check if the node exists before setting it as the start node
    const nodeExists = nodes.some(n => n.id === node);

    if (!nodeExists) {
      setErrorMessage(`Start node "${node}" does not exist!`);
    } else {
      setStartNode(node);
      setStep(0); // Reset the steps when start node changes
      setIsComplete(false);
      setErrorMessage(''); // Clear error message if start node is valid
    }
  };

  return (
    <div>
      <h1>Dijkstra's Algorithm Visualization</h1>
      <ControlPanel
        onNext={handleNext}
        onReset={handleReset}
        onAddNode={handleAddNode}
        onAddEdge={handleAddEdge}
        onSetStartNode={handleSetStartNode}
      />

      <div className="message-box">
        <p>{messages[step]}</p>
      </div>

      <Graph nodes={nodes} edges={edges} startNode={startNode} step={step} />

      {isComplete && <p>Graph traversal successful! Path found successfully.</p>}

      {/* Display error message if any */}
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
}

export default Demo;
