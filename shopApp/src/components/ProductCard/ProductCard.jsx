// ./src/components/ProductCard.jsx
import React, { useRef } from 'react';
import ProductImage from '../ProductImage/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'
import './productCard.css'

function ProductCard({productName, price, thumbnailImg}) {
    const likeBtn = useRef()

    function handleLikeClick(e){
        e.currentTarget.classList.toggle('on')
    }

    return (
        <li className='product-item'>
            <div className='product-img' >
                <ProductImage thumbnailImg={thumbnailImg} />
            </div>
            <ProductName productName={productName} />
            <button ref={likeBtn} onClick={handleLikeClick} className='like-btn'></button>
            <div className="product-price">
                <ProductPrice price={price} />
            </div>
        </li>
    );
}

export default ProductCard