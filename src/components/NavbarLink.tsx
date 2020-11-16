import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export interface NavbarLinkProps {
  path: string;
  name: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ path, name }) => {
  return (
    <NavLink to={path} exact activeClassName='active' className='NavbarLink'>
      <Button variant='outlined'>{name}</Button>
    </NavLink>
  );
};

export default NavbarLink;
