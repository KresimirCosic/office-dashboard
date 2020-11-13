import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from '@material-ui/core/Button';

import { ProductData } from '../redux/slices/shop';

const Product: React.FC<ProductData & { index: number }> = ({
  index,
  id,
  data,
}) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={true}
      timeout={100 * (index + 1)}
      classNames='Product'
      unmountOnExit
      mountOnEnter
      enter
      appear
      nodeRef={nodeRef}
    >
      <li ref={nodeRef} className='Product'>
        <h3 className='Product-title'>
          {data.title} (<i className='Product-employee'>{data.employee}</i>)
        </h3>
        <p className='Product-description'>{data.description}</p>
        <h5 className='Product-price'>{data.price}</h5>
        <Button className='Product-category'>{data.category}</Button>
      </li>
    </CSSTransition>
  );
};

export default Product;
