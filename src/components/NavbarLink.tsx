import React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavbarLinkProps {
  path: string;
  name: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ path, name }) => {
  return (
    <li className='NavbarLink'>
      <NavLink to={path} exact activeClassName='active'>
        {name}
      </NavLink>
    </li>
  );
};

export default NavbarLink;
