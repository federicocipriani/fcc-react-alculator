import React from 'react';

const Multiply = ({ multiply, clicked }) => {
    return (
        <button
            className={
                clicked ? 'keypad operation clicked' : 'keypad operation'
            }
            id='multiply'
            onClick={multiply}>
            x
        </button>
    );
};

export default Multiply;
