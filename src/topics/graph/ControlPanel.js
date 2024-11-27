// src/components/ControlPanel.js
import React, { useState } from 'react';

function ControlPanel({ onNext, onReset, onAddNode, onAddEdge, onSetStartNode }) {
  const [nodeName, setNodeName] = useState('');
  const [edgeSource, setEdgeSource] = useState('');
  const [edgeTarget, setEdgeTarget] = useState('');
  const [edgeWeight, setEdgeWeight] = useState('');
  const [startNodeInput, setStartNodeInput] = useState('');

  const handleAddNode = () => {
    onAddNode(nodeName);
    setNodeName('');
  };

  const handleAddEdge = () => {
    const weight = parseInt(edgeWeight, 10);
    if (!isNaN(weight)) {
      onAddEdge(edgeSource, edgeTarget, weight);
      setEdgeSource('');
      setEdgeTarget('');
      setEdgeWeight('');
    }
  };

  const handleSetStartNode = () => {
    onSetStartNode(startNodeInput);
    setStartNodeInput('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
  <div style={{ marginBottom: '20px' }}>
        <h4>Add Node</h4>
        <input
          type="text"
          placeholder="Node Name"
          value={nodeName}
          onChange={(e) => setNodeName(e.target.value)}
        />
        <button onClick={handleAddNode}>Add Node</button>
      </div>

      <div>
        <h4>Add Edge</h4>
        <input
          type="text"
          placeholder="Source"
          value={edgeSource}
          onChange={(e) => setEdgeSource(e.target.value)}
        />
        <input
          type="text"
          placeholder="Target"
          value={edgeTarget}
          onChange={(e) => setEdgeTarget(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight"
          value={edgeWeight}
          onChange={(e) => setEdgeWeight(e.target.value)}
        />
        <button onClick={handleAddEdge}>Add Edge</button>
      </div>

      <div>
        <h4>Set Start Node</h4>
        <input
          type="text"
          placeholder="Start Node"
          value={startNodeInput}
          onChange={(e) => setStartNodeInput(e.target.value)}
        />
        <button onClick={handleSetStartNode}>Set Start Node</button>
        <button onClick={onNext}>Next Step</button>
      <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}

export default ControlPanel;
