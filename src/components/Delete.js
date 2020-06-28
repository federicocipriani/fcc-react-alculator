import React from 'react';

const Delete = ({ deleteState }) => {
    return (
        <button className='keypad' id='delete' onClick={deleteState}>
            DEL
        </button>
    );
};

export default Delete;
