import React from 'react';
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
        <div className='pad'>
            {Object.entries(numbers).map((item) => (
                <Button
                    key={item[1]}
                    id={item[0]}
                    number={item[1]}
                    digits={digits}
                />
            ))}
        </div>
    );
};

export default Pad;
