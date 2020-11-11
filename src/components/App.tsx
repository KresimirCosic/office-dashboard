import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Category from '../pages/category';

import Navbar from './Navbar';
import Logo from './Logo';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/category' exact component={Category} />
        </Switch>

        <Logo />
      </BrowserRouter>
    </div>
  );
}

export default App;
