import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import { RootState } from '../redux/store';
import Product from './Product';

const ProductsList: React.FC = () => {
  const { products } = useSelector((state: RootState) => state.shop);
  const [gridView, setGridView] = useState(false);

  const handleViewChange = () => {
    const products = document.querySelectorAll('.Product');
    products.forEach((product) => {
      if (product.className.split(' ').indexOf('flex-item') > -1)
        product.classList.remove('flex-item');
      else product.classList.add('flex-item');
    });
  };

  return (
    <>
      <ButtonGroup variant='outlined' className='ProductsList-controls'>
        <Button
          onClick={() => {
            setGridView(false);
            handleViewChange();
          }}
          disabled={!gridView}
        >
          <ViewStreamIcon />
        </Button>
        <Button
          onClick={() => {
            setGridView(true);
            handleViewChange();
          }}
          disabled={gridView}
        >
          <ViewModuleIcon />
        </Button>
      </ButtonGroup>
      <ul className={`ProductsList${gridView ? ' flex-layout' : ''}`}>
        {products.map((product, index) => (
          <Product key={product.id} index={index} {...product} />
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
