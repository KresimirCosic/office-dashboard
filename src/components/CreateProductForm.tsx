import React, { FormEvent, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { RootState } from '../redux/store';
import { productsService } from '../services/ProductsService';
import {
  createProduct,
  createCategoryData,
  incrementCategoryProductsData,
} from '../redux/slices/shop';

const CreateProductForm: React.FC = () => {
  const nodeRef = useRef(null);
  const { authentication, shop } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);

  const handleProductCreation = (e: FormEvent) => {
    e.preventDefault();

    productsService
      .createProduct({
        employee: authentication.username,
        title,
        description,
        price,
        category,
      })
      .then((response) => {
        dispatch(
          createProduct({
            id: response.data,
            data: {
              employee: authentication.username,
              title,
              description,
              price,
              category,
            },
          })
        );

        checkCategoryStatus(category);

        resetForm();
      });
  };

  const checkCategoryStatus = (categoryName: string) => {
    const index = shop.categories.findIndex(
      (categoryData) => categoryData.category === categoryName
    );

    dispatch(
      index > -1
        ? incrementCategoryProductsData(categoryName)
        : createCategoryData({
            category,
            numberOfProducts: 1,
          })
    );
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    setPrice(0);
  };

  return (
    <CSSTransition
      in={authentication.authenticated}
      timeout={350}
      classNames='CreateProductForm'
      unmountOnExit
      mountOnEnter
      appear
      enter
      nodeRef={nodeRef}
    >
      <form
        onSubmit={handleProductCreation}
        ref={nodeRef}
        className='CreateProductForm'
      >
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          id='product-title'
          label='Title'
          variant='outlined'
        />
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          id='product-description'
          label='Description'
          variant='outlined'
        />
        <TextField
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          id='product-category'
          label='Category'
          variant='outlined'
        />
        <TextField
          onChange={(e) => setPrice(parseInt(e.target.value))}
          value={price}
          id='product-price'
          label='Price'
          variant='outlined'
          type='number'
        />
        <Button
          variant='outlined'
          type='submit'
          disabled={
            !title || !description || !category || !price ? true : false
          }
        >
          Submit
        </Button>
      </form>
    </CSSTransition>
  );
};

export default CreateProductForm;
