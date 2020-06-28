import React from 'react';

const Equal = ({ equal }) => {
    return (
        <button className='keypad operation' id='equals' onClick={equal}>
            =
        </button>
    );
};

export default Equal;
