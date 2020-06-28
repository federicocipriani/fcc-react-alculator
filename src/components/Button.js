import React from 'react';

const Button = ({ id, number, digits }) => {
    return (
        <button className={`keypad digit ${id}`} id={id} onClick={digits}>
            {number}
        </button>
    );
};

export default Button;
