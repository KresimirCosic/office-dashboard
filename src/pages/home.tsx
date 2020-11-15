import React from 'react';

import LoginForm from '../components/LoginForm';
import ProductsList from '../components/ProductsList';
import CreateProductForm from '../components/CreateProductForm';

const Home: React.FC = () => {
  return (
    <div className='Home'>
      <CreateProductForm />
      <LoginForm />
      <ProductsList />
    </div>
  );
};

export default Home;
