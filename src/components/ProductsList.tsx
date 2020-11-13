import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import Product from './Product';

const ProductsList: React.FC = () => {
  const { products } = useSelector((state: RootState) => state.shop);

  return (
    <ul className='ProductsList'>
      {products.map((product, index) => (
        <Product key={product.id} index={index} {...product} />
      ))}
    </ul>
  );
};

export default ProductsList;
