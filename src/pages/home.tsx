import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import LoginForm from '../components/LoginForm';
import ProductsList from '../components/ProductsList';
import CreateProductForm from '../components/CreateProductForm';

const Home: React.FC = () => {
  const { authenticated } = useSelector(
    (state: RootState) => state.authentication
  );

  return (
    <div className='Home'>
      <CreateProductForm />
      <LoginForm />
      <ProductsList />
    </div>
  );
};

export default Home;
