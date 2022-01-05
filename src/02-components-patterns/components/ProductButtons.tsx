import {CSSProperties, useCallback, useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export interface Props{
    className?: string;
    style?: CSSProperties
}

export const ProductButtons = ({className, style}:Props) => {

    const {increaseBy, counter, maxCount} = useContext(ProductContext);

    // console.log({maxCount})

   const isMaxReach = useCallback(
        /*
        Si no existe maxcount  y counter igual al valor maximo regresa true
        * */
        () => !!maxCount && counter === maxCount,
        [counter, maxCount]
    );



    return (
        <div className={`${styles.buttonsContainer} ${className}`}
             style={style}
        >
            <button className={styles.buttonMinus}
                    onClick={() => increaseBy(-1)}
            >
                -
            </button>
            <div className={styles.countLabel}> {counter}</div>
            <button className={`${styles.buttonAdd} ${isMaxReach() && styles.disabled} `}
                    onClick={() => increaseBy(+1)}
                    disabled={isMaxReach()}
            >
                +
            </button>
        </div>
    )
}
