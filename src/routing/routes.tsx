import React from 'react';

import Home from '../pages/home';
import Stats from '../pages/stats';
import Overview from '../pages/overview';

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
    path: '/stats',
    name: 'Stats',
    displayInNavbar: true,
    pageComponent: <Stats />,
  },
  {
    path: '/product/:id',
    name: 'Product',
    displayInNavbar: false,
    pageComponent: <Overview />,
  },
];

export default routes;
