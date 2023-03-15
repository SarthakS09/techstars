import React from 'react'
import { Link } from 'react-router-dom';
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
            <img src={navLogo}/>
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
          <a className='glow-on-hover' href="#">Schedule</a>
        </div>
      </div>

      <nav className={(sidebar ? 'nav-bar active animate__animated animate__slideInUp animate__faster' : (x==0 ? 'hidden' : 'nav-bar animate__animated animate__slideOutDown animate__faster'))}>
        <ul className='nav-menu-items'>
          <li className='active'>
            <Link to='/' onClick={showSidebar}>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link to='/events' onClick={showSidebar}>
              <span>Events</span>
            </Link>
          </li>

          <li>
            <Link to='/speakers' onClick={showSidebar}>
              <span>Speakers</span>
            </Link>
          </li>

          <li>
            <Link to='/schedule' onClick={showSidebar}>
              <span>Schedule</span>
            </Link>
          </li>

          <li>
            <Link to='/about' onClick={showSidebar}>
              <span>About Us</span>
            </Link>
          </li>
        </ul>
      </nav>

      </>
    )
}
