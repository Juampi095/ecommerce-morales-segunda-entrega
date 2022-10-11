import { React, useState } from 'react'

export default function App() {

    const [counter, setCounter] = useState(0);

    //sumar contador
    const sumar = () => {
        setCounter(count => count + 1);
    };

    //restar cntador
    const restar = () => {
        setCounter(count => count - 1);
    };

    //resetear counter 
    const reset = () => {
        setCounter(0)
    }

    return (
        <div className="counter">

            <span className="counter__output">{counter}</span>
            <div className="btn__container">
                <button className="control__btn" onClick={sumar}>+</button>
                <button className="control__btn" onClick={restar}>-</button>
                <button className="reset" onClick={reset}>Reset</button>
            </div>
            <h5>Agregar al carrito</h5>
        </div>
    );
};
