import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { RootState } from '../redux/store';
import { setCurrentPage } from '../redux/slices/userInterface';

const ProductsListPageControls: React.FC = () => {
  const nodeRef = useRef(null);
  const { authentication, userInterface, shop } = useSelector(
    (state: RootState) => state
  );
  const dispatch = useDispatch();

  const handleFilteringProductsByUser = () => {
    return shop.products.filter(
      (product) => product.data.employee === authentication.username
    );
  };

  const handlePageNumbersGeneration = () => {
    const pageNumbers = [];
    for (
      let i = 1;
      i <=
      Math.ceil(
        handleFilteringProductsByUser().length / userInterface.productsPerPage
      );
      i++
    ) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handlePageNumbersRender = () => {
    return (
      <ButtonGroup variant='outlined'>
        {handlePageNumbersGeneration().map((pageNumber) => (
          <Button
            key={pageNumber}
            disabled={pageNumber === userInterface.currentPage}
            onClick={() => dispatch(setCurrentPage(pageNumber))}
          >
            {pageNumber}
          </Button>
        ))}
      </ButtonGroup>
    );
  };

  return (
    <CSSTransition
      in={authentication.authenticated}
      timeout={100}
      classNames='ProductsListPageControls'
      unmountOnExit
      mountOnEnter
      enter
      appear
      nodeRef={nodeRef}
    >
      <div className='ProductsListPageControls'>
        {handlePageNumbersRender()}
      </div>
    </CSSTransition>
  );
};

export default ProductsListPageControls;
