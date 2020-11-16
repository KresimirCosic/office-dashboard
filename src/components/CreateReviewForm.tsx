import React, { FormEvent, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { IReviewsProps } from './Reviews';
import { createReview } from '../redux/slices/shop';

const CreateReviewForm: React.FC = () => {
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewDescription, setReviewDescription] = useState('');
  const [reviewScore, setReviewScore] = useState(1);
  const { id } = useParams<IReviewsProps>();
  const dispatch = useDispatch();

  const handleReviewCreation = (e: FormEvent) => {
    e.preventDefault();

    dispatch(
      createReview({
        productID: id,
        title: reviewTitle,
        description: reviewDescription,
        score: reviewScore,
      })
    );

    resetForm();
  };

  const resetForm = () => {
    setReviewTitle('');
    setReviewDescription('');
    setReviewScore(1);
  };

  return (
    <form className='CreateReviewForm' onSubmit={handleReviewCreation}>
      <TextField
        onChange={(e) => setReviewTitle(e.target.value)}
        value={reviewTitle}
        id='review-title'
        label='Title'
        variant='outlined'
      />
      <TextField
        onChange={(e) => setReviewDescription(e.target.value)}
        value={reviewDescription}
        id='review-description'
        label='Description'
        variant='outlined'
      />
      <TextField
        onChange={(e) => setReviewScore(parseInt(e.target.value))}
        value={reviewScore}
        id='review-description'
        label='Score'
        variant='outlined'
        type='number'
        InputProps={{ inputProps: { min: 1, max: 10 } }}
      />

      <Button type='submit' variant='outlined'>
        Submit Review
      </Button>
    </form>
  );
};

export default CreateReviewForm;
