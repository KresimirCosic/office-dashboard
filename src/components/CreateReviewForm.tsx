import React, { FormEvent, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';

import { IReviewsProps } from './Reviews';
import { createReview } from '../redux/slices/shop';

const CreateReviewForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [score, setScore] = useState(1);
  const { id } = useParams<IReviewsProps>();
  const dispatch = useDispatch();

  const handleReviewCreation = (e: FormEvent) => {
    e.preventDefault();

    const reviewID = uuid();

    dispatch(
      createReview({
        reviewID,
        productID: id,
        title,
        description,
        score,
      })
    );

    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setScore(1);
  };

  return (
    <form className='CreateReviewForm' onSubmit={handleReviewCreation}>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        id='review-title'
        label='Title'
        variant='outlined'
      />
      <TextField
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        id='review-description'
        label='Description'
        variant='outlined'
      />
      <TextField
        onChange={(e) => setScore(parseInt(e.target.value))}
        value={score}
        id='review-description'
        label='Score'
        variant='outlined'
        type='number'
        InputProps={{ inputProps: { min: 1, max: 10 } }}
      />

      <Button
        type='submit'
        variant='outlined'
        disabled={!title || !description || !score ? true : false}
      >
        Submit Review
      </Button>
    </form>
  );
};

export default CreateReviewForm;
