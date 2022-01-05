import {useEffect, useRef, useState} from "react";
import {OnChangeArgs, Product} from "../interfaces/interfaces";



interface UseProductArgs{
    product:Product,
    onChange?: (args: OnChangeArgs) => void,
    value?:number
}

export const useProduct = ({product,onChange, value=0}:UseProductArgs) => {

    const [counter, setCounter] = useState(value);

    // !! -> evalua si es true el onChange
    const isControlled  = useRef( !!onChange);

    const increaseBy = (value: number) => {

        if(isControlled.current){
            return onChange!({count:value, product: product})
        }

        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)

        onChange && onChange({count:newValue, product: product});
    }

    useEffect(() => {
        setCounter(value)
    }, [value]);



    return{
        counter,
        increaseBy
    }
}
