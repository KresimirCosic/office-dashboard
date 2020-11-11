import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <ul className='Nav'>
      <li>
        <NavLink className='Nav-link' activeClassName='active' to='/' exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className='Nav-link'
          activeClassName='active'
          to='/about'
          exact
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className='Nav-link'
          activeClassName='active'
          to='/contact'
          exact
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
