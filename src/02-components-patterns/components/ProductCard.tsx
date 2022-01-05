import {useProduct} from "../hooks/useProduct";
import {createContext, ReactElement, CSSProperties} from "react";
import {OnChangeArgs, Product, ProductContextProps} from "../interfaces/interfaces";

import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext;


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number
}

export const ProductCard = ({children, product, className, style, onChange, value}: Props) => {

    // useProduct es el que esta manejando el estado
    const {counter, increaseBy} = useProduct({
        onChange,
        product,
        value
    });

    return (
        <Provider value={{
            product,
            counter,
            increaseBy,
        }}>
            <div className={`${styles.productCard} ${className}`}
                 style={style}
            >
                {children}
            </div>
        </Provider>

    )
}

