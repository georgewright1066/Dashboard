import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Aside from '../containers/Aside/Aside';
import logo from '../../assets/images/lumen-logo.svg';


const Header = ({handleClick, active}) => (
  <header className="lu-header">
    <div className="lu-header__image-container">
      <img src={logo} alt="logo" />
    </div>
    <Link to="/signout" className="lu-header__menu-link">Signout</Link>
    <Aside />
  </header>
);

export default Header;
