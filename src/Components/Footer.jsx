import React from 'react'
import seeYou from '../Assets/see-you.svg';
import '../Styles/Footer.css'

export default function Footer() {
  return (
    <>
        <div className='ftr-section'>
            <div className='see-you'>
                <img src={seeYou} className='see-you-img'/>
            </div>
            <div id='ftr-links' className='ftr-links'>
                <a>instagram →</a>
                <a>linkedin →</a>
                <a>twitter →</a>
            </div>
        </div>
        <div className='attr'>
            <div className="attr-text">
            <p className='left'>ESUMMIT'23 - IIIT DELHI'S FLAGSHIP ENTREPRENEURIAL SUMMIT</p>
            <p className='right'>DESIGNED AND DEVELOPED BY ADITYA GIRDHAR</p>
            </div>
        </div>
    </>
  )
}
