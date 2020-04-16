import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

function NavBar(props) {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__nav-list">
        <li className="nav-bar__nav-list__list-item">
          <NavLink className="nav-bar__nav-list__link" to="/" exact>Home</NavLink>
        </li>
        <li className="nav-bar__nav-list__list-item">
          <NavLink className="nav-bar__nav-list__link" to="/students">Students</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
