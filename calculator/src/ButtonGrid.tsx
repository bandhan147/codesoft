import React from "react";
import Button from "./Button";

function ButtonGrid({
    handleNumber,
    handleOperator,
    handleClear,
    handleEquals,
}) {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
    const operators = ["/", "*", "-", "+"];

    return (
        <div className="button-grid">
            <Button value="C" handleClick={handleClear} />
            {numbers.map((number) => (
                <Button
                    key={number}
                    value={number}
                    handleClick={handleNumber}
                />
            ))}
            {operators.map((operator) => (
                <Button
                    key={operator}
                    value={operator}
                    handleClick={handleOperator}
                />
            ))}
            <Button value="=" handleClick={handleEquals} />
        </div>
    );
}

export default ButtonGrid;
