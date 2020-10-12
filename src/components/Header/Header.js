import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Header = () => (
  <header className="page-header">
    <div className="page-header__container">
      <img src={logo} className="page-header__logo" alt="logo" />
      <nav className="page-header__nav">
        <ul className="page-header__nav-list">
          <li className="page-header__nav-item">
            <NavLink to="/calendar-app/home" className="page-header__nav-link">Home</NavLink>
          </li>

          <li className="page-header__nav-item">
            <NavLink to="/calendar-app/about-us" className="page-header__nav-link">About Us</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
