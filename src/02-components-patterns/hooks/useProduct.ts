import {useState} from "react";




export const useProduct = (initialValue = 0) => {


    const [counter, setCounter] = useState(initialValue);

    const increaseBy = (value: number) => {
        setCounter((previousState) => Math.max(previousState + value, 0))
    }


    return{
        counter,
        increaseBy
    }
}
