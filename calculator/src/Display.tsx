import React from "react";

function Display({ currentInput, calculatedResult }) {
    return (
        <div className="display">
            {calculatedResult ? (
                <h1>{calculatedResult}</h1>
            ) : (
                <h1>{currentInput}</h1>
            )}
        </div>
    );
}

export default Display;
