import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import Product from './Product';

const ProductsList: React.FC = () => {
  const { authentication, shop } = useSelector((state: RootState) => state);

  return (
    <ul className='ProductsList'>
      {shop.products
        .filter((product) => product.data.employee === authentication.username)
        .map((product, index) => (
          <Product key={product.id} index={index} {...product} />
        ))}
    </ul>
  );
};

export default ProductsList;
