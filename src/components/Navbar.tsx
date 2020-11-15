import React from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import NavbarLink from './NavbarLink';
import routes from '../routing/routes';
import { logout } from '../redux/slices/authentication';
import { RootState } from '../redux/store';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { authenticated, username } = useSelector(
    (state: RootState) => state.authentication
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ul className='Navbar'>
      {authenticated && (
        <Button variant='outlined' onClick={handleLogout}>
          Logout <small>({username})</small>
        </Button>
      )}
      {routes.map(
        (route) =>
          route.displayInNavbar && (
            <NavbarLink key={route.name} path={route.path} name={route.name} />
          )
      )}
    </ul>
  );
};

export default Navbar;
