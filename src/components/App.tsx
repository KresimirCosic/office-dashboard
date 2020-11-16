import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';

import { storeID } from '../constants/api';
import { storeService } from '../services/StoreService';
import { productsService } from '../services/ProductsService';
import { categoriesService } from '../services/CategoriesService';
import {
  setStoreData,
  setProductsData,
  setCategoriesData,
} from '../redux/slices/shop';
import {
  createNotification,
  deleteNotification,
} from '../redux/slices/userInterface';
import routes from '../routing/routes';
import Page from './Page';
import Navbar from './Navbar';
import Container from './Container';
import NotificationsList from './NotificationsList';

const App: React.FC = () => {
  const dispatch = useDispatch();

  // Used to trigger first transition upon loading the application for the first time
  useEffect(() => {
    const PageElement = document.getElementById('Page');

    if (PageElement) {
      PageElement.classList.add('Page-enter-done');
    }

    // Fetching and setting data in Redux store upon opening the application for the first time
    storeService
      .getData()
      .then(({ data }) => {
        dispatch(setStoreData({ id: storeID, data }));
      })
      .catch((error) => {
        const notificationID = uuid();

        dispatch(
          createNotification({
            id: notificationID,
            message: 'Failed to fetch store data.',
          })
        );

        setTimeout(() => {
          dispatch(deleteNotification(notificationID));
        }, 5000);
      });

    productsService
      .getData()
      .then(({ data }) => {
        dispatch(setProductsData([...data]));
      })
      .catch((error) => {
        const notificationID = uuid();

        dispatch(
          createNotification({
            id: notificationID,
            message: 'Failed to fetch products data.',
          })
        );

        setTimeout(() => {
          dispatch(deleteNotification(notificationID));
        }, 5000);
      });

    categoriesService
      .getData()
      .then(({ data }) => {
        dispatch(setCategoriesData([...data]));
      })
      .catch((error) => {
        const notificationID = uuid();

        dispatch(
          createNotification({
            id: notificationID,
            message: 'Failed to fetch categories data.',
          })
        );

        setTimeout(() => {
          dispatch(deleteNotification(notificationID));
        }, 5000);
      });
  });

  return (
    <div className='App'>
      <NotificationsList />
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
