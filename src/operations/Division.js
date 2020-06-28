import React from 'react';

const Division = ({ divide, clicked }) => {
    return (
        <button
            className={
                clicked ? 'keypad operation clicked' : 'keypad operation'
            }
            id='divide'
            onClick={divide}>
            ÷
        </button>
    );
};

export default Division;
