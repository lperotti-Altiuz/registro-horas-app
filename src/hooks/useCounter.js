import { useState } from "react";

export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState);

    const increment = () =>{
        if (counter < 13) {
            setCounter(counter + 1);
        }
        
    }

    const decrement = () =>{
        if (counter > 0) {
            setCounter(counter - 1);
        }
        
    }

    const reset = () =>{
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}