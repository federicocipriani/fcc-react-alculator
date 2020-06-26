import React from 'react';

const Button = ({ id, number, digits }) => {
    return (
        <div className={`keypad ${id}`} id={id} onClick={digits}>
            {number}
        </div>
    );
};

export default Button;
