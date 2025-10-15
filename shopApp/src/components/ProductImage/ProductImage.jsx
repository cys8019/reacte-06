// ./src/components/ProductImage.jsx
import React from 'react';
import './productImage.css'

function ProductImage({thumbnailImg, productName}) {
    const imgUrl = 'http://localhost:5173/' + thumbnailImg
    return (
        <img src={imgUrl} alt={productName} />
    );
}

export default ProductImage