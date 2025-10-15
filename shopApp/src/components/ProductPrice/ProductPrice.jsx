// ./src/components/ProductPrice.jsx
import React from 'react';
import './productPrice.css'

function ProductPrice({price}) {
    return (
        <strong className="price m-price">{price}<span>원</span></strong>
    );
}

export default ProductPrice