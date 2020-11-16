import React from 'react';

import { ReviewData } from '../redux/slices/shop';

const Review: React.FC<ReviewData> = ({ title, description, score }) => {
  return (
    <div className='Review'>
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>{score}</h4>
    </div>
  );
};

export default Review;
