import React from 'react';

const Equal = ({ equal }) => {
    return (
        <div className='keypad' id='equals' onClick={equal}>
            =
        </div>
    );
};

export default Equal;
