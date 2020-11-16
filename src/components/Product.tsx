import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v1 as uuid } from 'uuid';

import { ProductData } from '../redux/slices/shop';
import { productsService } from '../services/ProductsService';
import { deleteProduct } from '../redux/slices/shop';
import {
  createNotification,
  deleteNotification,
} from '../redux/slices/userInterface';

const Product: React.FC<ProductData & { index: number }> = ({
  index,
  id,
  data,
}) => {
  const nodeRef = useRef(null);
  const dispatch = useDispatch();

  const handleDeleteProduct = (id: string) => {
    productsService
      .deleteProduct(id)
      .then((response) => {
        dispatch(deleteProduct(id));
      })
      .catch((error) => {
        const notificationID = uuid();

        dispatch(
          createNotification({
            id: notificationID,
            message: 'Failed to delete product.',
          })
        );

        setTimeout(() => {
          dispatch(deleteNotification(notificationID));
        }, 5000);
      });
  };

  return (
    <CSSTransition
      in
      timeout={100 * (index + 1)}
      classNames='Product'
      unmountOnExit
      mountOnEnter
      enter
      appear
      nodeRef={nodeRef}
    >
      <li ref={nodeRef} className='Product'>
        <h2 className='Product-title'>{data.title}</h2>
        <div className='Product-details'>
          <div className='Product-left'>
            <p className='Product-description'>
              {data.description.length > 50
                ? `${data.description.substring(0, 50)}...`
                : data.description}
            </p>
            <h5 className='Product-category'>
              <i>{data.category}</i>
            </h5>
          </div>

          <div className='Product-right'>
            <h2 className='Product-price'>${data.price}</h2>
          </div>
        </div>
        <div className='Product-controls'>
          <Button
            onClick={() => handleDeleteProduct(id)}
            variant='outlined'
            className='Product-delete'
          >
            DELETE
          </Button>
          <Link to={`/product/${id}`}>
            <Button variant='outlined' className='Product-overview'>
              OVERVIEW
            </Button>
          </Link>
        </div>
      </li>
    </CSSTransition>
  );
};

export default Product;
