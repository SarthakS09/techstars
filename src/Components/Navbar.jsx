import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import navLogo from '../Assets/logo-white.png';
import esmtLogo from '../Assets/esmt.svg';
import { Twirl as Hamburger } from 'hamburger-react';
import '../Styles/Navbar.scss';

export default function Navbar() {
  const [x, setX] = useState(0);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setX(x + 1);
    setSidebar(!sidebar);
  };

  return (
    <>
      {/* Fixed top navbar visible only when sidebar is closed */}
      {!sidebar && (
        <div className='nav-fixed'>
          <div className='left'>
            <NavLink to='/'><img src={navLogo} className='esmt-icon' alt='Logo' /></NavLink>
          </div>
          <div className='right'>
            <div className='hamburger-wrapper'>
              <Hamburger toggled={sidebar} className='hb' size={22} color='black' onToggle={showSidebar} />
            </div>
          </div>
        </div>
      )}

      {/* Normal navbar (absolute) */}
      <div className='nav'>
        <div className='left'>
          <NavLink to='/'><img src={esmtLogo} className='esmt-logo' alt='ESMT Logo' /></NavLink>
        </div>
        <div className='right'>
          <Link to='https://docs.google.com/forms/d/e/1FAIpQLScJNydNjVT6jTqrM--_0Re7qhwKI20eATplWn0dkJJzvzS_aQ/viewform?usp=header'
            className='glow-on-hover' target='_blank' rel='noopener noreferrer'>
            Register Now
          </Link>
        </div>
      </div>

      {/* Sidebar navigation menu */}
      <nav className={
        sidebar
          ? 'nav-bar active animate__animated animate__slideInUp animate__faster'
          : (x === 0 ? 'hidden' : 'nav-bar animate__animated animate__slideOutDown animate__faster')
      }>
        <ul className='nav-menu-items'>
          <li>
            <NavLink to='/' onClick={showSidebar}>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/events' onClick={showSidebar}>
              <span>Events</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/speakers' onClick={showSidebar}>
              <span>Speakers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/schedule' onClick={showSidebar}>
              <span>Schedule</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='https://docs.google.com/forms/d/e/1FAIpQLScJNydNjVT6jTqrM--_0Re7qhwKI20eATplWn0dkJJzvzS_aQ/viewform?usp=header'
              target='_blank' rel='noopener noreferrer' onClick={showSidebar}>
              <span>Register</span>
            </NavLink>
          </li>
          <li>
            <span className="nav-attr">emerge. evolve. exceed.</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
