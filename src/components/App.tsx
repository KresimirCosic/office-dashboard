import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { storeID } from '../constants/api';
import { storeService } from '../services/StoreService';
import { productsService } from '../services/ProductsService';
import { categoriesService } from '../services/CategoriesService';
import {
  setStoreData,
  setProductsData,
  setCategoriesData,
} from '../redux/slices/shop';
import routes from '../routing/routes';
import Page from './Page';
import Navbar from './Navbar';
import Container from './Container';

const App: React.FC = () => {
  const dispatch = useDispatch();

  // Used to trigger first transition upon loading the application for the first time
  useEffect(() => {
    const PageElement = document.getElementById('Page');

    if (PageElement) {
      PageElement.classList.add('Page-enter-done');
    }

    // Fetching and setting data in Redux store upon opening the application for the first time
    storeService.getData().then(({ data }) => {
      dispatch(setStoreData({ id: storeID, data }));
    });

    productsService.getData().then(({ data }) => {
      dispatch(setProductsData([...data]));
    });

    categoriesService.getData().then(({ data }) => {
      dispatch(setCategoriesData([...data]));
    });
  });

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
