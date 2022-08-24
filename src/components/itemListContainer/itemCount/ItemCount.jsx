import React from 'react';
import { useState } from 'react';

const ItemCount = ({ max = 20 }) => {

    let [counter, setCounter] = useState(1)

    const handlerSumar = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    }

    const handlerRestar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <button onClick={handlerRestar}>-</button>
            <span>{counter}</span>
            <button onClick={handlerSumar}>+</button>
        </div>
    )
}

export default ItemCount