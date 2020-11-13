import React from 'react';

import Home from '../pages/home';
import Category from '../pages/category';

export interface PageRoute {
  name: string;
  path: string;
  displayInNavbar: boolean;
  pageComponent: React.ReactNode;
}

const routes: PageRoute[] = [
  {
    path: '/',
    name: 'Home',
    displayInNavbar: true,
    pageComponent: <Home />,
  },
  {
    path: '/category/:id',
    name: 'Category',
    displayInNavbar: true,
    pageComponent: <Category />,
  },
];

export default routes;
