import React from 'react'
import { useState, useEffect } from "react";
import navLogo from '../Assets/logo-white.png';
import esmtLogo from '../Assets/esmt.svg'
import hamburger from '../Assets/Group-2.png'
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
    return (
      <>

      <div className='nav-fixed'>
          <div className='left'>
            <img src={navLogo}/>
          </div>

          <div className='right'>
            <img src={hamburger}/>
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
