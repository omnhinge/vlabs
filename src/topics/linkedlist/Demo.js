import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Node = ({ value, isMiddle, xPos, yPos, nextXPos, nextYPos }) => {
  const style = useSpring({
    transform: isMiddle ? 'scale(1.4)' : 'scale(1)',
    backgroundColor: isMiddle ? '#ffb347' : '#007bff',
    config: { tension: 250, friction: 30 },
  });

  return (
    <>
      {/* Line connecting nodes */}
      {nextXPos !== undefined && nextYPos !== undefined && (
        <div
          style={{
            position: 'absolute',
            top: yPos + 40, // Adjusting the starting point of the line
            left: xPos + 60, // Adjusting the starting point of the line
            width: nextXPos - xPos - 60, // Line length
            height: nextYPos - yPos - 60, // Line height
            borderTop: '2px solid #007bff',
            transformOrigin: 'top left',
            transform: `rotate(${Math.atan2(nextYPos - yPos, nextXPos - xPos)}rad)`,
            zIndex: -1,
          }}
        />
      )}

      <animated.div style={{ ...nodeStyles, ...style, left: xPos, top: yPos }}>
        {value}
      </animated.div>
    </>
  );
};

const LinkedList = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [middle, setMiddle] = useState(null);

  const addFront = () => {
    if (inputValue) {
      setList([{ value: Number(inputValue), id: Date.now() }, ...list]);
      setInputValue('');
      setMiddle(null);
    }
  };

  const addBack = () => {
    if (inputValue) {
      setList([...list, { value: Number(inputValue), id: Date.now() }]);
      setInputValue('');
      setMiddle(null);
    }
  };

  const deleteFront = () => {
    setList(list.slice(1));
    setMiddle(null);
  };

  const deleteEnd = () => {
    setList(list.slice(0, -1));
    setMiddle(null);
  };

  const findMiddle = () => {
    if (list.length === 0) return;
    let slow = 0;
    let fast = 0;
    while (fast < list.length - 1) {
      slow += 1;
      fast += 2;
    }
    setMiddle(list[slow].id); // Mark middle by id for styling
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Linked List Animation</h2>
      <div style={inputContainerStyle}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
          style={inputStyle}
        />
        <button onClick={addFront} style={buttonStyle}>Add Front</button>
        <button onClick={addBack} style={buttonStyle}>Add Back</button>
        <button onClick={deleteFront} style={buttonStyle}>Delete Front</button>
        <button onClick={deleteEnd} style={buttonStyle}>Delete End</button>
        <button onClick={findMiddle} style={buttonStyle}>Find Middle</button>
      </div>
      <div style={listContainerStyle}>
        {list.map((node, index) => {
          const xPos = index * 180 + 40; // Adjusting node positions
          const yPos = 100;
          const nextXPos = list[index + 1] ? (index + 1) * 180 + 40 : undefined;
          const nextYPos = nextXPos !== undefined ? 100 : undefined;
          return (
            <Node
              key={node.id}
              value={node.value}
              isMiddle={middle === node.id}
              xPos={xPos}
              yPos={yPos}
              nextXPos={nextXPos}
              nextYPos={nextYPos}
            />
          );
        })}
      </div>
      <div style={countStyle}>
        Number of elements: {list.length}
      </div>
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Arial, sans-serif',
  height: '100vh',
  justifyContent: 'center',
};

const headerStyle = {
  fontSize: '28px',
  color: 'black',
  marginBottom: '20px',
};

const inputContainerStyle = {
  display: 'flex',
  gap: '15px',
  marginBottom: '20px',
};

const inputStyle = {
  padding: '15px',
  fontSize: '18px',
  borderRadius: '10px',
  border: '2px solid #ccc',
  outline: 'none',
  width: '200px',
};

const buttonStyle = {
  padding: '15px 20px',
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const listContainerStyle = {
  position: 'relative',
  display: 'flex',
  marginTop: '20px',
  flexWrap: 'wrap',
};

const nodeStyles = {
  position: 'absolute',
  padding: '25px 35px',
  fontSize: '22px',
  color: '#fff',
  borderRadius: '15px',
  textAlign: 'center',
  width: '100px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
};

const countStyle = {
  fontSize: '22px',
  color: 'black',
  marginTop: '20px',
};

export default LinkedList;
