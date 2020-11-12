import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import routes from '../routing/routes';
import Page from './Page';
import Navbar from './Navbar';
import Container from './Container';

const App: React.FC = () => {
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
            const { path, pageComponent } = route;

            return (
              <Route key={path} exact path={path}>
                {({ match }) => {
                  return <Page match={match}>{pageComponent}</Page>;
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
