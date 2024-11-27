import React, { useState } from "react";

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value) {
    if (!node) return new TreeNode(value);
    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    }
    return node;
  }

  delete(value) {
    this.root = this._delete(this.root, value);
  }

  _delete(node, value) {
    if (!node) return null;
    if (value < node.value) {
      node.left = this._delete(node.left, value);
    } else if (value > node.value) {
      node.right = this._delete(node.right, value);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let minNode = this._findMin(node.right);
      node.value = minNode.value;
      node.right = this._delete(node.right, minNode.value);
    }
    return node;
  }

  _findMin(node) {
    while (node.left) node = node.left;
    return node;
  }

  searchPath(value) {
    const path = [];
    this._searchPath(this.root, value, path);
    return path;
  }

  _searchPath(node, value, path) {
    if (!node) return false;
    path.push(node.value);
    if (node.value === value) return true;
    if (value < node.value) {
      return this._searchPath(node.left, value, path);
    }
    return this._searchPath(node.right, value, path);
  }
}

const BinarySearchTree = () => {
  const [bst] = useState(new BST());
  const [nodes, setNodes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [highlightedPath, setHighlightedPath] = useState([]);

  const SVG_WIDTH = 800;
  const SVG_HEIGHT = 500;
  const NODE_RADIUS = 20;

  const handleInsert = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      bst.insert(value);
      updateNodes([]);
    }
  };

  const handleDelete = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      bst.delete(value);
      updateNodes([]);
    }
  };

  const handleSearch = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      const path = bst.searchPath(value);
      updateNodes(path);
    }
  };

  const updateNodes = (path) => {
    const result = [];
    const centerX = SVG_WIDTH / 2;
    const startY = NODE_RADIUS * 2;
    const horizontalSpacing = SVG_WIDTH / 4;
    const verticalSpacing = 80;

    const traverse = (node, x, y, offset) => {
      if (!node) return;
      const isHighlighted = path.includes(node.value);
      result.push({ value: node.value, x, y, highlight: isHighlighted });
      if (node.left) {
        result.push({
          fromX: x,
          fromY: y,
          toX: x - offset,
          toY: y + verticalSpacing,
          highlight: path.includes(node.left.value),
        });
        traverse(node.left, x - offset, y + verticalSpacing, offset / 2);
      }
      if (node.right) {
        result.push({
          fromX: x,
          fromY: y,
          toX: x + offset,
          toY: y + verticalSpacing,
          highlight: path.includes(node.right.value),
        });
        traverse(node.right, x + offset, y + verticalSpacing, offset / 2);
      }
    };

    traverse(bst.root, centerX, startY, horizontalSpacing);
    setNodes(result);
    setHighlightedPath(path);
  };

  return (
    <div>
      <h2 className="paraq">Binary Search Tree demo</h2>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
        />
        <button onClick={handleInsert}>Insert</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {highlightedPath.length > 0 && (
          <p>Search Path: {highlightedPath.join(" → ")}</p>
        )}
      </div>
      <svg
        width={SVG_WIDTH}
        height={SVG_HEIGHT}
        style={{ border: "1px solid black" }}
      >
        {nodes.map((node, index) =>
          node.value !== undefined ? (
            <g key={index}>
              <circle
                cx={node.x}
                cy={node.y}
                r={NODE_RADIUS}
                fill={node.highlight ? "orange" : "lightblue"}
                stroke="black"
              />
              <text
                x={node.x}
                y={node.y}
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="12"
                fill="black"
              >
                {node.value}
              </text>
            </g>
          ) : (
            <line
              key={index}
              x1={node.fromX}
              y1={node.fromY}
              x2={node.toX}
              y2={node.toY}
              stroke={node.highlight ? "orange" : "black"}
            />
          )
        )}
      </svg>
    </div>
  );
};

export default BinarySearchTree;
