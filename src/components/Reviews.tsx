import React from 'react';
import { useSelector } from 'react-redux';

import Review from './Review';
import { RootState } from '../redux/store';

export interface IReviewsProps {
  id: string;
}

const Reviews: React.FC<IReviewsProps> = ({ id }) => {
  const { reviews } = useSelector((state: RootState) => state.shop);

  return (
    <div className='Reviews'>
      {reviews
        .filter((review) => review.productID === id)
        .map((review) => (
          <Review key={review.reviewID} {...review} />
        ))}
    </div>
  );
};

export default Reviews;
