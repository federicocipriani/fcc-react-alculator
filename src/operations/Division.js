import React from 'react';

const Division = ({ divide }) => {
    return (
        <div className='keypad' id='divide' onClick={divide}>
            /
        </div>
    );
};

export default Division;
