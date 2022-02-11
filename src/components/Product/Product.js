import React from 'react';

const Product = ({ product }) => {
  return (
    <div>
      <p>{product.id}</p>
      <p>{product.img}</p>
      <p>{product.price}</p>
      <p>{product.name}</p>
      <p>{product.category}</p>
    </div>
  );
};

export default Product;
