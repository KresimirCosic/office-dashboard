import React from 'react';

import Home from '../pages/home';
import Category from '../pages/category';
import Login from '../pages/login';

export interface PageRoute {
  name: string;
  path: string;
  displayInNavbar: boolean;
  privateRoute: boolean;
  page: React.ReactNode;
}

const routes: PageRoute[] = [
  {
    path: '/',
    name: 'Home',
    displayInNavbar: true,
    privateRoute: true,
    page: <Home />,
  },
  {
    path: '/login',
    name: 'Login',
    displayInNavbar: true,
    privateRoute: false,
    page: <Login />,
  },
  {
    path: '/category/:id',
    name: 'Category',
    displayInNavbar: false,
    privateRoute: true,
    page: <Category />,
  },
];

export default routes;
