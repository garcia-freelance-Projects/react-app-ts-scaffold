import React from 'react';
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from '../components';


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}


const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr/>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: 'wrap'
            }}>

                <ProductCard product={product}>
                    <ProductCard.Image/>
                    <ProductCard.Title title={'Hola mundo'}/>
                    <ProductCard.Buttons/>
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons/>
                </ProductCard>
            </div>
        </div>
    );
};

export default ShoppingPage;
