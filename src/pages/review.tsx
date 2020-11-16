import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v1 as uuid } from 'uuid';

import { productsService } from '../services/ProductsService';
import {
  setReviewingProduct,
  removeReviewingProduct,
} from '../redux/slices/shop';
import {
  createNotification,
  deleteNotification,
} from '../redux/slices/userInterface';
import { RootState } from '../redux/store';

interface IReviewURLParameters {
  id: string;
}

const Review: React.FC = () => {
  const { id } = useParams<IReviewURLParameters>();
  const dispatch = useDispatch();
  const { reviewingProduct } = useSelector((state: RootState) => state.shop);

  useEffect(() => {
    productsService
      .getProduct(id)
      .then((response) => {
        const { title, category, price, employee, description } = response.data;

        dispatch(
          setReviewingProduct({
            title,
            category,
            price,
            employee,
            description,
          })
        );
      })
      .catch((error) => {
        const notificationID = uuid();

        dispatch(
          createNotification({
            id: notificationID,
            message: 'Failed to fetch the product.',
          })
        );

        setTimeout(() => {
          dispatch(deleteNotification(notificationID));
        }, 5000);
      });

    return () => {
      dispatch(removeReviewingProduct());
    };
  }, []);

  return (
    <div className='Review'>
      <h3 className='Review-title'>{reviewingProduct.title}</h3>
      <p className='Review-description'>{reviewingProduct.description}</p>
      <h5 className='Review-price'>{reviewingProduct.price}</h5>
      <h3 className='Review-category'>{reviewingProduct.category}</h3>
    </div>
  );
};

export default Review;
