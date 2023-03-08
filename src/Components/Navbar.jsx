import React from 'react'
import { useState, useEffect } from "react";
import navLogo from '../Assets/logo-white.png';
import esmtLogo from '../Assets/esmt.svg'
import hamburger from '../Assets/Group-2.png'
import { Twirl as Hamburger } from 'hamburger-react'
import '../Styles/Navbar.css'


export default function Navbar({ isMobile }) {
  // const [offset, setOffset] = useState(0);
  // useEffect(() => {
  //     const onScroll = () => setOffset(window.pageYOffset);
  //     window.removeEventListener('scroll', onScroll);
  //     window.addEventListener('scroll', onScroll, { passive: true });
  //     return () => window.removeEventListener('scroll', onScroll);
  // }, []);
  // // console.log(offset);
    return (
      <>
      <div className='nav-fixed'>
          <div className='left'>
            <img src={navLogo}/>
          </div>
          <div className='right'>
            <div className='hamburger-wrapper'>
              <Hamburger size={isMobile ? 18 : 22} color='black'/>
            </div>
            {/* <nav className={sidebar ? 'nav-bar active' : 'nav-bar'}>
              <ul className='nav-menu-items'>
              </ul>
            </nav> */}
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

      </>
    )
}
