import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div>
      <p>Marketing</p>
    </div>
    <div>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/features" activeClassName="is-active">Features Page</NavLink>
      <NavLink to="/cart" activeClassName="is-active">Cart</NavLink>

    </div>
  </div>
);

export default Header;
