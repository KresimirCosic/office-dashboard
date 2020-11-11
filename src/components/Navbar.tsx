import React from 'react';

import NavbarLink from './NavbarLink';
import routes from '../routing/routes';

const Navbar: React.FC = () => {
  return (
    <ul className='Navbar'>
      {routes.map((route) => (
        <NavbarLink key={route.name} path={route.path} name={route.name} />
      ))}
    </ul>
  );
};

export default Navbar;
