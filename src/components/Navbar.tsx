import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import NavbarLink from './NavbarLink';
import routes, { NavbarRoute } from '../routing/routes';

const Navbar: React.FC = () => {
  const { authenticated } = useSelector(
    (state: RootState) => state.authentication
  );

  const determineNavbarLinkRender = (route: NavbarRoute) => {
    // Returns a boolean depending on the state of the Redux store and the type of Route itself
    return (
      route.basicRoute &&
      ((route.requiresAuthentication && authenticated) ||
        (!route.requiresAuthentication && !authenticated))
    );
  };

  return (
    <ul className='Navbar'>
      {routes.map(
        (route) =>
          determineNavbarLinkRender(route) && (
            <NavbarLink key={route.name} path={route.path} name={route.name} />
          )
      )}
    </ul>
  );
};

export default Navbar;
