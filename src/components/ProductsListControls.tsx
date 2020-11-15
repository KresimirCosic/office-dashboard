import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import { RootState } from '../redux/store';

const ProductsListControls: React.FC = () => {
  const [gridView, setGridView] = useState(false);
  const { authenticated } = useSelector(
    (state: RootState) => state.authentication
  );
  const nodeRef = useRef(null);

  const handleViewChange = () => {
    const productsList = document.querySelectorAll('.ProductsList')[0];
    const products = document.querySelectorAll('.Product');

    if (productsList.className.split(' ').indexOf('flex-layout') > -1)
      productsList.classList.remove('flex-layout');
    else productsList.classList.add('flex-layout');

    products.forEach((product) => {
      if (product.className.split(' ').indexOf('flex-item') > -1)
        product.classList.remove('flex-item');
      else product.classList.add('flex-item');
    });
  };

  return (
    <CSSTransition
      in={authenticated}
      timeout={100}
      classNames='ProductsListControls'
      unmountOnExit
      mountOnEnter
      enter
      appear
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className='ProductsListControls'>
        <ButtonGroup variant='outlined' className='controls'>
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
      </div>
    </CSSTransition>
  );
};

export default ProductsListControls;
