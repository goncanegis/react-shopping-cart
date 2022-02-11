import React from 'react';
import Product from './Product';

const products = [
  {
    id: 1,
    price: 25,
    img: 'garlic',
    name: 'Garlic',
    category: 'vegetable',
  },
  {
    id: 2,
    price: 20,
    img: 'lemon',
    name: 'Lemon',
    category: 'fruit',
  },
];

const Products = () => {
  return (
    <div>
      Products
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default Products;
