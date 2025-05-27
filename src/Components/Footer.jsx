import React from 'react'
import seeYou from '../Assets/see-you.svg';
import '../Styles/Footer.scss'

export default function Footer() {
  return (
    <>
        <div className='ftr-section'>
            <div className='see-you'>
                <img src={seeYou} className='see-you-img'/>
            </div>
            <div id='ftr-links' className='ftr-links'>
                
                {/* Social media links */}
                <a href='https://www.instagram.com/ecellglau/' target='_blank'>instagram →</a>
                <a href='https://www.linkedin.com/company/ecellglau' target='_blank'>linkedin →</a>
                <a href='https://www.facebook.com/ecellglau/' target='_blank'>facebook →</a>

            </div>
        </div>
        <div className='attr'>
            {/* Attribution Text */}
            <div className="attr-text">
            <p className='left'>TECH STARS - E-CELL GLAU</p>
            <p className='right'><a href='https://www.instagram.com/_sarthak._.singh_/' target='_blank'>DEVELOPED BY <u className='ag-name'>SARTHAK SINGH</u></a></p>
            </div>
        </div>
    </>
  )
}
