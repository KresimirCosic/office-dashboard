import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v1 as uuid } from 'uuid';

import { productsService } from '../services/ProductsService';
import {
  setOverviewingProduct,
  removeOverviewingProduct,
} from '../redux/slices/shop';
import {
  createNotification,
  deleteNotification,
} from '../redux/slices/userInterface';
import { RootState } from '../redux/store';
import Reviews from '../components/Reviews';
import CreateReviewForm from '../components/CreateReviewForm';

interface IOverviewURLParameters {
  id: string;
}

const Overview: React.FC = () => {
  const { id } = useParams<IOverviewURLParameters>();
  const dispatch = useDispatch();
  const { overviewingProduct, reviews } = useSelector(
    (state: RootState) => state.shop
  );

  useEffect(() => {
    productsService
      .getProduct(id)
      .then((response) => {
        const { title, category, price, employee, description } = response.data;

        dispatch(
          setOverviewingProduct({
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
      dispatch(removeOverviewingProduct());
    };
  }, []);

  const calculateAverageScore = () => {
    const filteredArray = reviews.filter((review) => review.productID === id);

    return filteredArray.length
      ? filteredArray.reduce((previous, current) => {
          return previous + current.score;
        }, 0) / filteredArray.length
      : 0;
  };

  return (
    <div className='Overview'>
      <h1>{calculateAverageScore()}</h1>
      <h3 className='Overview-title'>{overviewingProduct.title}</h3>
      <p className='Overview-description'>{overviewingProduct.description}</p>
      <h5 className='Overview-price'>{overviewingProduct.price}</h5>
      <h3 className='Overview-category'>{overviewingProduct.category}</h3>
      <Reviews id={id} />
      <CreateReviewForm />
    </div>
  );
};

export default Overview;
