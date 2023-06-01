import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import navLogo from '../Assets/logo-white.png';
import esmtLogo from '../Assets/esmt.svg'
import { Twirl as Hamburger } from 'hamburger-react'
import '../Styles/Navbar.css'


export default function Navbar() {
    // 'x' denotes the number of times the hamburger button has been clicked
    // Useful for UI analytics and hiding easter eggs
    const [x, setX] = useState(0);

    // 'sidebar' denotes the current state of the navbar menu (expanded/collapsed)
    const [sidebar, setSidebar] = useState(false);

    // showSidebar toggles the sidebar and increments 'x' by 1
    const showSidebar = () => {
      setX(x+1);
      setSidebar(!sidebar);
    }

    return (
      <>
      <div className='nav-fixed'>
          <div className='left'> {/* All elements in this div are fixed at the top-left of the browser viewport */}
          <NavLink to='/'><img src={navLogo} className='esmt-icon'/></NavLink>
          </div>
          <div className='right'> {/* All elements in this div are fixed at the top-right of the browser viewport */}
            <div className='hamburger-wrapper'>
              <Hamburger toggled={sidebar} className='hb' size={22} color='black' onToggle={showSidebar}/>
            </div>
          </div>
      </div>

      <div className='nav'>
        <div className='left'> {/* All elements in this div are positioned absolutely at the top-left of the page */}
            <NavLink to='/'><img src={esmtLogo} className='esmt-logo'/></NavLink>
        </div>
        <div className='right'> {/* All elements in this div are positioned absolutely at the top-right of the page */}
          <Link to='https://forms.gle/qKoRhxmMKkL4XvES6' className='glow-on-hover' target='_blank'>Register Now</Link>
        </div>
      </div>

      {/* Navigation bar with class toggling logic */}
      <nav className={(sidebar ? 'nav-bar active animate__animated animate__slideInUp animate__faster' : (x===0 ? 'hidden' : 'nav-bar animate__animated animate__slideOutDown animate__faster'))}>
        
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
            {/* This links to the registration form. To open the link in the same tag, remove the 'target' attribute */}
            <NavLink to='https://forms.gle/qKoRhxmMKkL4XvES6' target='_blank' onClick={showSidebar}>
              <span>Register</span>
            </NavLink>
          </li>
          <li>
            <span className="nav-attr">emerge. evolve. exceed.</span>
          </li>
        </ul>
      </nav>
      </>
    )
}
