import React, { useEffect } from 'react';
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

  const handlePagination = () => {
    return handleFilteringProductsByUser().slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );
  };

  useEffect(() => {
    const productsList = document.querySelectorAll('.ProductsList')[0];
    const products = document.querySelectorAll('.Product');

    if (userInterface.gridView) {
      if (productsList.className.indexOf('flex-layout') < 0)
        productsList.classList.add('flex-layout');
      products.forEach((product) => {
        if (product.className.indexOf('flex-item') < 0)
          product.classList.add('flex-item');
      });
    } else {
      if (productsList.className.indexOf('flex-layout') > -1)
        productsList.classList.remove('flex-layout');
      products.forEach((product) => {
        if (product.className.indexOf('flex-item') > -1)
          product.classList.remove('flex-item');
      });
    }
  });

  return (
    <ul className='ProductsList'>
      {handlePagination().map((product, index) => (
        <Product key={product.id} index={index} {...product} />
      ))}
    </ul>
  );
};

export default ProductsList;
