import React, { useState } from "react";
import "./App.css"; // Import your CSS file for styling
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";

function App() {
    const [currentInput, setCurrentInput] = useState("");
    const [calculatedResult, setCalculatedResult] = useState("");

    const handleNumber = (value) => {
        setCurrentInput(currentInput + value);
    };

    const handleOperator = (operator) => {
        setCurrentInput(currentInput + operator);
    };

    const handleClear = () => {
        setCurrentInput("");
        setCalculatedResult("");
    };

    const handleEquals = () => {
        try {
            const result = eval(currentInput); // Consider using mathjs for safer evaluation
            setCalculatedResult(result);
        } catch (error) {
            setCalculatedResult("Error");
        } finally {
            setCurrentInput("");
        }
    };

    return (
        <div className="calculator">
            <Display
                currentInput={currentInput}
                calculatedResult={calculatedResult}
            />
            <ButtonGrid
                handleNumber={handleNumber}
                handleOperator={handleOperator}
                handleClear={handleClear}
                handleEquals={handleEquals}
            />
        </div>
    );
}

export default App;
