import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import NavbarLink from './NavbarLink';
import routes, { PageRoute } from '../routing/routes';

const Navbar: React.FC = () => {
  const { authenticated } = useSelector(
    (state: RootState) => state.authentication
  );

  const determineNavbarLinkRender = (route: PageRoute) => {
    // Returns a boolean depending on the state of the Redux store and the type of Route itself
    return (
      route.displayInNavbar &&
      ((route.privateRoute && authenticated) ||
        (!route.privateRoute && !authenticated))
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
