import React from 'react';

import Home from '../pages/home';
import Category from '../pages/category';

export interface Route {
  name: string;
  path: string;
  component: React.ReactNode;
}

const routes: Route[] = [
  { path: '/', name: 'Home', component: <Home /> },
  { path: '/category', name: 'Category', component: <Category /> },
];

export default routes;
