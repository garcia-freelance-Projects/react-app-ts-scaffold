import {useProduct} from "../hooks/useProduct";
import {createContext, CSSProperties} from "react";
import {
    InititialValues,
    OnChangeArgs,
    Product,
    ProductCardHandlers,
    ProductContextProps
} from "../interfaces/interfaces";

import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext;


export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children?: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InititialValues
}

export const ProductCard = (
    {
        children,
        product,
        className,
        style,
        onChange,
        value,
        initialValues
    }: Props) => {

    // useProduct es el que esta manejando el estado
    const {
        counter,
        increaseBy,
        maxCount,
        isMaxCountReached,
        reset
    } = useProduct({
        onChange,
        product,
        value,
        initialValues
    });

    return (
        <Provider value={{
            product,
            counter,
            increaseBy,
            maxCount,

        }}>
            <div className={`${styles.productCard} ${className}`}
                 style={style}
            >
                {children && children({
                    count:counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product: product,

                    increaseBy,
                    reset,
                })}
            </div>
        </Provider>

    )
}

