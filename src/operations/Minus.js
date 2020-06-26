import React from 'react';

const Minus = ({ subtract }) => {
    return (
        <div className='keypad' id='subtract' onClick={subtract}>
            -
        </div>
    );
};

export default Minus;
