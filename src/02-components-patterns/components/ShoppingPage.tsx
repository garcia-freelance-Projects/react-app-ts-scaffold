import React from 'react';
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from './index';
import '../styles/custom-styles.css'
import {products} from "../data/products";


const product = products[0]


const ShoppingPage = () => {


    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr/>
            <ProductCard product={product}
                         key={product.id}
                         className="bg-dark text-white"
                         initialValues={{
                             count: 3,
                             maxCount: 20,
                         }}
            >
                {/*count:counter,*/}
                {/*isMaxCountReached,*/}
                {/*maxCount: initialValues?.maxCount,*/}
                {/*product: product,*/}

                {/*increaseBy,*/}
                {/*reset,*/}
                {
                    ({
                         count,
                         isMaxCountReached,
                         maxCount,
                         increaseBy,
                         reset
                     }) => (
                        <>
                            <ProductImage className="custom-image" style={{
                                boxShadow: " 10px 10px 10px rgba(0,0,0,0.2)"
                            }}/>
                            <ProductTitle className=" text-bold"/>
                            <ProductButtons className="custom-buttons"/>
                            <button onClick={reset}>Reset</button>
                            <button onClick={()=> increaseBy(-2)}>-2</button>
                            <button disabled={isMaxCountReached} onClick={()=>increaseBy(2)}>+2</button>
                            <span>{count} - Max Allowed: {maxCount}</span>
                        </>
                    )
                }


            </ProductCard>

        </div>
    );
};

export default ShoppingPage;
