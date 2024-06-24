import React from "react";

function Button({ value, handleClick }) {
    return value === "=" ? (
        <button className="button equal-btn" onClick={() => handleClick(value)}>
            {value}
        </button>
    ) : (
        <button className="button" onClick={() => handleClick(value)}>
            {value}
        </button>
    );
}

export default Button;
