import React from 'react';

const Minus = ({ subtract, clicked }) => {
    return (
        <button
            className={
                clicked ? 'keypad operation clicked' : 'keypad operation'
            }
            id='subtract'
            onClick={subtract}>
            -
        </button>
    );
};

export default Minus;
