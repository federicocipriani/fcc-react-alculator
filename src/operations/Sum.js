import React from 'react';

const Sum = ({ sum }) => {
    return (
        <div className='keypad' id='plus' onClick={sum}>
            +
        </div>
    );
};

export default Sum;
