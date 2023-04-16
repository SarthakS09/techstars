import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import navLogo from '../Assets/logo-white.png';
import esmtLogo from '../Assets/esmt.svg'
import { Twirl as Hamburger } from 'hamburger-react'
import '../Styles/Navbar.css'


export default function Navbar() {
  
  // const [offset, setOffset] = useState(0);
  // useEffect(() => {
    //     const onScroll = () => setOffset(window.pageYOffset);
    //     window.removeEventListener('scroll', onScroll);
    //     window.addEventListener('scroll', onScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', onScroll);
    // }, []);
    // // console.log(offset);
    const [x, setX] = useState(0);
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
      setX(x+1);
      setSidebar(!sidebar);
    }

    return (
      <>
      <div className='nav-fixed'>
          <div className='left'>
            <img src={navLogo} className='esmt-icon'/>
          </div>
          <div className='right'>
            <div className='hamburger-wrapper'>
              <Hamburger toggled={sidebar} className='hb' size={22} color='black' onToggle={showSidebar}/>
            </div>
          </div>
      </div>

      <div className='nav'>
        <div className='left'>
            <img src={esmtLogo} className='esmt-logo'/>
        </div>

        <div className='right'>
          <Link to='https://forms.gle/qKoRhxmMKkL4XvES6' className='glow-on-hover'>Register Now</Link>
        </div>
      </div>

      <nav className={(sidebar ? 'nav-bar active animate__animated animate__slideInUp animate__faster' : (x==0 ? 'hidden' : 'nav-bar animate__animated animate__slideOutDown animate__faster'))}>
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
            <NavLink to='https://forms.gle/qKoRhxmMKkL4XvES6'>
              <span>Register</span>
            </NavLink>
          </li>

          {/* <li>
            <NavLink to='/about' onClick={showSidebar}>
              <span>The Team</span>
            </NavLink>
          </li> */}

          <li>
            {/* <span className="nav-attr">IIIT Delhi's Esummit'23.</span> */}
            <span className="nav-attr">emerge. evolve. exceed.</span>
          </li>
        </ul>
      </nav>

      </>
    )
}
