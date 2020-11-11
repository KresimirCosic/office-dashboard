import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Nav from './Nav';
import Logo from './Logo';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />

        <Switch>
          <Route path='/contact' exact component={Contact} />
          <Route path='/about' exact component={About} />
          <Route path='/' exact component={Home} />
        </Switch>

        <Logo />
      </BrowserRouter>
    </div>
  );
}

export default App;
