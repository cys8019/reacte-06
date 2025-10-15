// ./src/pages/HomePage/HomePage.jsx
import React from 'react';
import './homePage.css'
import {data} from '../../database/data'
import ProductCard from '../../components/ProductCard/ProductCard';

function HomePage() {
    return (
        <main className='product'>
            <ul className='product-list'>
                { data.map(item =>
                    <ProductCard
                        key={item.id}
                        productName={item.productName}
                        price={item.price}
                        thumbnailImg={item.thumbnailImg}
                    />
                )}
            </ul>
            <a className='link-btn cart-link' href="#"></a>
        </main>
    );
}

export default HomePage