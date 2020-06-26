import React from 'react';

const Multiply = ({ multiply }) => {
    return (
        <div className='keypad' id='multiply' onClick={multiply}>
            x
        </div>
    );
};

export default Multiply;
