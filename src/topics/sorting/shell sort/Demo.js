import React, { useState, useEffect } from 'react';

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [compareIndices, setCompareIndices] = useState([-1, -1]);
    const [isSorted, setIsSorted] = useState(false);
    const [steps, setSteps] = useState([]);

    // Function to generate a random array
    const generateRandomArray = () => {
        const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
        setArray(randomArray);
        setCurrentStep(0);
        setCompareIndices([-1, -1]);
        setIsSorted(false);
        setSteps([]);
    };

    // Generate a random array when the component mounts
    useEffect(() => {
        generateRandomArray();
    }, []);

    // Function to generate steps for Shell Sort
    const generateShellSortSteps = () => {
        let stepsArr = [];
        let n = array.length;
        let arrCopy = [...array];
        
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = arrCopy[i];
                let j;
                for (j = i; j >= gap && arrCopy[j - gap] > temp; j -= gap) {
                    stepsArr.push({ arr: [...arrCopy], compare: [j, j - gap] });
                    arrCopy[j] = arrCopy[j - gap];
                }
                arrCopy[j] = temp;
                stepsArr.push({ arr: [...arrCopy], compare: [i, j] });
            }
        }
        setSteps(stepsArr);
        setIsSorted(true);
    };

    // Function to move to the next step
    const nextStep = () => {
        if (currentStep < steps.length) {
            const { arr, compare } = steps[currentStep];
            setArray(arr);
            setCompareIndices(compare);
            setCurrentStep(currentStep + 1);
        }
    };

    // Function to start the Shell Sort process and generate steps
    const startShellSort = () => {
        setCurrentStep(0);
        setCompareIndices([-1, -1]);
        setIsSorted(false);
        generateShellSortSteps();
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Sorting Visualizer</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '10px', height: '300px' }}>
                {array.map((value, index) => (
                    <div
                        key={index}
                        style={{
                            width: '40px',
                            height: `${value * 3}px`, // Adjust height factor for better visuals
                            backgroundColor: compareIndices.includes(index) ? 'red' : 'teal',
                            color: 'white',
                            textAlign: 'center',
                            transition: 'height 0.5s ease, background-color 0.3s ease',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            fontSize: '1rem',
                            borderRadius: '5px',
                        }}
                    >
                        {value}
                    </div>
                ))}
            </div>
            <button onClick={generateRandomArray} style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>
                Generate New Array
            </button>
            <button onClick={startShellSort} disabled={isSorted} style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>
                Start Shell Sort
            </button>
            <button onClick={nextStep} disabled={currentStep >= steps.length} style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>
                Next
            </button>
        </div>
    );
};

export default SortingVisualizer;
