import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div>
      <p>Marketing</p>
    </div>
    <div>
      <NavLink to="/" activeClassName="is-active" exact={true}>Marketing</NavLink>
      <NavLink to="/features" activeClassName="is-active">Features Page</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
  </div>
);

export default Header;
