import React from 'react';

const Clear = ({ clearState }) => {
    return (
        <button className='keypad' id='clear' onClick={clearState}>
            AC
        </button>
    );
};

export default Clear;
