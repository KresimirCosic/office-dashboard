import React from 'react';

import ProductsListControls from '../components/ProductsListControls';
import Forms from '../components/Forms';
import ProductsList from '../components/ProductsList';

const Home: React.FC = () => {
  return (
    <div className='Home'>
      <Forms />
      <ProductsListControls />
      <ProductsList />
    </div>
  );
};

export default Home;
