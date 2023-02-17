import React from 'react'
import { useState, useEffect } from "react";
import navLogo from '../Assets/logo-white.png';
import hamburger from '../Assets/Group-2.png'
import '../Styles/Navbar.css'

export default function Navbar() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // console.log(offset);

  if (offset <= 60) {
    return (
      <>
      <div className='nav'>

          <div className='left'>
            <img src={navLogo}/>
          </div>

          <div className='right'>
              <a className='glow-on-hover' href="#">Schedule</a>
            <img src={hamburger}/>
          </div>

      </div>
      </>
    )
  } else {
    return (
      <>
      <div className='nav'>

          <div className='left'>
            <img src={navLogo}/>
          </div>

          <div className='right'>
            <img src={hamburger}/>
          </div>

      </div>
      </>
    )
  }
}
