import React from 'react';

const Decimal = ({ decimal }) => {
    return (
        <div className='keypad' id='decimal' onClick={decimal}>
            .
        </div>
    );
};

export default Decimal;
