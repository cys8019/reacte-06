// ./src/components/ProductName.jsx
import React from 'react';
import './productName.css'

function ProductName({productName}) {
    return (
        <strong className="product-name sl-ellipsis">{productName}</strong>
    );
}

export default ProductName