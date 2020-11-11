import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes, { NavbarRoute } from '../routing/routes';
import { RootState } from '../redux/store';
import Page from './Page';
import Navbar from './Navbar';
import Container from './Container';

const App: React.FC = () => {
  const { authenticated } = useSelector(
    (state: RootState) => state.authentication
  );
  // Used to trigger first transition upon loading the application for the first time
  useEffect(() => {
    const PageElement = document.getElementById('Page');

    if (PageElement) {
      PageElement.classList.add('Page-enter-done');
    }
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />

        <Container>
          {routes.map((route) => {
            const { path, component, requiresAuthentication } = route;

            return (
              <Route key={path} exact path={path}>
                {({ match }) => {
                  return <Page match={match}>{component}</Page>;
                }}
              </Route>
            );
          })}
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
