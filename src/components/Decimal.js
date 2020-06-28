import React from 'react';

const Decimal = ({ decimal }) => {
    return (
        <button className='keypad digit' id='decimal' onClick={decimal}>
            .
        </button>
    );
};

export default Decimal;
