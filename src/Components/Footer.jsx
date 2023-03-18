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
                <a href='https://www.instagram.com/esummit_iiitd/' target='_blank'>instagram →</a>
                <a href='https://www.linkedin.com/company/entrepreneurship-summit-iiit-delhi/' target='_blank'>linkedin →</a>
                <a href='https://twitter.com/ecell_iiitd' target='_blank'>twitter →</a>
            </div>
        </div>
        <div className='attr'>
            <div className="attr-text">
            <p className='left'>ESUMMIT'23 - IIIT DELHI'S FLAGSHIP ENTREPRENEURIAL SUMMIT</p>
            <p className='right'><a href='https://linktr.ee/AdityaGirdhar'>DEVELOPED BY <u className='ag-name'>ADITYA GIRDHAR</u></a></p>
            </div>
        </div>
    </>
  )
}
