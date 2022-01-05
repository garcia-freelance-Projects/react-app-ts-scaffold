import {useEffect, useRef, useState} from "react";
import {InititialValues, OnChangeArgs, Product} from "../interfaces/interfaces";



interface UseProductArgs{
    product:Product,
    onChange?: (args: OnChangeArgs) => void,
    value?:number,
    initialValues?: InititialValues
}

export const useProduct = ({product,onChange, value=0, initialValues}:UseProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    /*
     mantener la referencia cuando el componente es montado
    * */
    const isMounted = useRef(false);



    const increaseBy = (value: number) => {

        let newValue = Math.max(counter + value, 0)
        if(initialValues?.maxCount){
            /*
            Math min toma el valor minimo de los dos argumentos que recibe
            * */
            newValue = Math.min(newValue,initialValues.maxCount)
        }
        setCounter(newValue)

        onChange && onChange({count:newValue, product: product});
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        /*
        si el componentne no ha sido montado
        no disparar el setCounter
         */
        if(!isMounted.current) return;
        setCounter(value)
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);


    return{
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset
    }
}
