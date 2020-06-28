import React from 'react';

const Sum = ({ add, clicked }) => {
    return (
        <button
            className={
                clicked ? 'keypad operation clicked' : 'keypad operation'
            }
            id='add'
            onClick={add}>
            +
        </button>
    );
};

export default Sum;
