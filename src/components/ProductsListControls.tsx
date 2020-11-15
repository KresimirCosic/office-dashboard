import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProductsListViewControls from './ProductsListViewControls';
import ProductsListPageControls from './ProductsListPageControls';
import { resetInterfaceData } from '../redux/slices/userInterface';

const ProductsListControls: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetInterfaceData());
    };
  });

  return (
    <div className='ProductsListControls'>
      <ProductsListViewControls />
      <ProductsListPageControls />
    </div>
  );
};

export default ProductsListControls;
