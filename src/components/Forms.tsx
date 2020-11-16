import React from 'react';

import LoginForm from './LoginForm';
import CreateProductForm from './CreateProductForm';

const Forms: React.FC = () => {
  return (
    <div className='Forms'>
      <LoginForm />
      <CreateProductForm />
    </div>
  );
};

export default Forms;
