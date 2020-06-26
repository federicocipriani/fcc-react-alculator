import React from 'react';

const Sum = ({ add }) => {
    return (
        <div className='keypad' id='add' onClick={add}>
            +
        </div>
    );
};

export default Sum;
