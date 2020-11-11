import React from 'react';

import Home from '../pages/home';
import Category from '../pages/category';
import Login from '../pages/login';

export interface NavbarRoute {
  name: string;
  path: string;
  basicRoute: boolean;
  requiresAuthentication: boolean;
  component: React.ReactNode;
}

const routes: NavbarRoute[] = [
  {
    path: '/',
    name: 'Home',
    basicRoute: true,
    requiresAuthentication: true,
    component: <Home />,
  },
  {
    path: '/login',
    name: 'Login',
    basicRoute: true,
    requiresAuthentication: false,
    component: <Login />,
  },
  {
    path: '/category/:id',
    name: 'Category',
    basicRoute: false,
    requiresAuthentication: true,
    component: <Category />,
  },
];

export default routes;
