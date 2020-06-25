import React, { Fragment } from 'react';
import Button from './Button';

const Pad = ({ digits }) => {
    const numbers = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };
    return (
        <Fragment>
            {Object.entries(numbers).map((item) => (
                <Button
                    key={item[1]}
                    id={item[0]}
                    number={item[1]}
                    digits={digits}
                />
            ))}
        </Fragment>
    );
};

export default Pad;
