import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import Product from './Product';

const ProductsList: React.FC = () => {
  const { authentication, shop, userInterface } = useSelector(
    (state: RootState) => state
  );

  const { currentPage, productsPerPage } = userInterface;

  const handleFilteringProductsByUser = () => {
    return shop.products.filter(
      (product) => product.data.employee === authentication.username
    );
  };

  return (
    <ul className='ProductsList'>
      {handleFilteringProductsByUser()
        .slice(
          (currentPage - 1) * productsPerPage,
          currentPage * productsPerPage
        )
        .map((product, index) => (
          <Product key={product.id} index={index} {...product} />
        ))}
    </ul>
  );
};

export default ProductsList;
