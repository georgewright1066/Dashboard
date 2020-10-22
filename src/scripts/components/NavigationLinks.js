import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/images/lumen-logo.svg';
import MenuButton from './MenuButton';

// <li className="lu-aside__menu-item"><Link onClick={onFilterClick} to="#" className="lu-aside__menu-anchor ">Filter</Link><Link onClick={onFilterButtonClick} to="#" className="lu-aside__menu-image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></Link></li>
const userType = parseInt(localStorage.getItem('userType'));
const dashboard = userType === 1 ? 'my_studies' : 'my_batches';
const dashboardText = userType === 1 ? 'My Studies' : 'My Batches';
const NavigationLinks = ({ handleClick, active, onFilterClick, onFilterButtonClick, stimsUrl, currentUrl }) => (
  <div className="lu-aside__navigation">
    <div className="lu-aside__control">
      <MenuButton accessibleText="Toggle Menu" className="lu-aside__toggle-menu" handleClick={handleClick} isActive={active} />
    </div>
    <div className="lu-aside__menu-image-container">
      <img src={logo} alt="logo" />
    </div>
    <ul className="lu-aside__menu">
      {(currentUrl === '/') && <li className="lu-aside__menu-item lu-aside__menu-active"><Link to="/" className="lu-aside__menu-anchor">Home</Link><Link to="/" className="lu-aside__menu-image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></Link></li>}
      {(currentUrl !== '/') && <li className="lu-aside__menu-item"><Link to="/" className="lu-aside__menu-anchor">Home</Link><Link to="/" className="lu-aside__menu-image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></Link></li>}
      {(currentUrl.includes(`/${dashboard}`))
          ? <li className="lu-aside__menu-item lu-aside__menu-active"><Link to={`/${dashboard}`} className="lu-aside__menu-anchor">{dashboardText}</Link><Link to={`/${dashboard}`} className="lu-aside__menu-image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg></Link></li>
          : <li className="lu-aside__menu-item"><Link to={`/${dashboard}`} className="lu-aside__menu-anchor">{dashboardText}</Link><Link to={`/${dashboard}`} className="lu-aside__menu-image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg></Link></li>}
      {(currentUrl.includes('stims'))
          ? <li className="lu-aside__menu-item lu-aside__menu-active"><Link to={stimsUrl} className="lu-aside__menu-anchor ">My Stimuli</Link><Link to={stimsUrl} className="lu-aside__menu-image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></Link></li>
          : <li className="lu-aside__menu-item"><Link to={stimsUrl} className="lu-aside__menu-anchor ">My Stimuli</Link><Link to={stimsUrl} className="lu-aside__menu-image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></Link></li>}
      {(currentUrl === '/my_reports') && <li className="lu-aside__menu-item lu-aside__menu-active"><Link to="/my_reports" className="lu-aside__menu-anchor">My Reports</Link><Link to="/my_reports" className="lu-aside__menu-image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></Link></li>}
      {(currentUrl !== '/my_reports') && <li className="lu-aside__menu-item"><Link to="/my_reports" className="lu-aside__menu-anchor">My Reports</Link><Link to="/my_reports" className="lu-aside__menu-image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></Link></li>}
      {(currentUrl === '/contact_us') && <li className="lu-aside__menu-item lu-aside__menu-active"><Link to="/contact_us" className="lu-aside__menu-anchor ">Contact Us</Link><Link to="/contact_us" className="lu-aside__menu-image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></Link></li>}
      {(currentUrl !== '/contact_us') && <li className="lu-aside__menu-item "><Link to="/contact_us" className="lu-aside__menu-anchor ">Contact Us</Link><Link to="/contact_us" className="lu-aside__menu-image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></Link></li>}
      {(currentUrl === '/my_details') && <li className="lu-aside__menu-item lu-aside__menu-active"><Link to="/my_details" className="lu-aside__menu-anchor ">My Details</Link><Link to="/my_details" className="lu-aside__menu-image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></Link></li>}
      {(currentUrl !== '/my_details') && <li className="lu-aside__menu-item"><Link to="/my_details" className="lu-aside__menu-anchor ">My Details</Link><Link to="/my_details" className="lu-aside__menu-image"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></Link></li>}
    </ul>
  </div>
);

export default NavigationLinks;

NavigationLinks.propTypes = {
  onClick: PropTypes.func,
  onFilterClick: PropTypes.func,
};
