import React from 'react';

const Button = ({ id, number, digits }) => {
    return (
        <div className={'button ' + id} id={'#' + id} onClick={digits}>
            {number}
        </div>
    );
};

export default Button;
