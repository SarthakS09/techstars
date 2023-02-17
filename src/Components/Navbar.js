import React from 'react'
import { useState, useEffect } from "react";
import navLogo from '../Assets/logo-white.png';
import hamburger from '../Assets/Group-2.png'
import '../Styles/Navbar.css'

const mountedStyle = { animation: "inAnimation 250ms ease-in", transition: "0.2s" };
const unmountedStyle = {
  display: "none",
  animation: "outAnimation 270ms ease-out",
  animationFillMode: "forwards", transition: "0.2s"
};

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
            <a className='glow-on-hover' href="#" style={unmountedStyle}>Schedule</a>
            <img src={hamburger}/>
          </div>

      </div>
      </>
    )
  }
}
