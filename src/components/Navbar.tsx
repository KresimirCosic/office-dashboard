import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import NavbarLink from './NavbarLink';
import routes from '../routing/routes';
import { logout } from '../redux/slices/authentication';
import { RootState } from '../redux/store';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { authentication, shop } = useSelector((state: RootState) => state);
  const { name } = shop.store.data;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className='Navbar'>
      <h1>{name ? name : 'Home'}</h1>
      <ul className='NavbarList'>
        {routes.map(
          (route) =>
            route.displayInNavbar && (
              <li className='NavbarItem'>
                <NavbarLink
                  key={route.name}
                  path={route.path}
                  name={route.name}
                />
              </li>
            )
        )}
        {authentication.authenticated ? (
          <li className='NavbarItem'>
            <Button variant='outlined' onClick={handleLogout}>
              Logout ({authentication.username})
            </Button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
