import React from 'react';

import ProductsListViewControls from './ProductsListViewControls';
import ProductsListPageControls from './ProductsListPageControls';

const ProductsListControls: React.FC = () => {
  return (
    <div className='ProductsListControls'>
      <ProductsListViewControls />
      <ProductsListPageControls />
    </div>
  );
};

export default ProductsListControls;
