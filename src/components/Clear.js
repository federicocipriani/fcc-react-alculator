import React from 'react';

const Clear = ({ clearState }) => {
    return (
        <button id='clear' onClick={clearState}>
            AC
        </button>
    );
};

export default Clear;
