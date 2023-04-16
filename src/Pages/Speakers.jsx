import React from 'react'
import { useEffect } from 'react'
import triggeredInsaan from '../Assets/triggered-insaan.png'

export default function Speakers() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="container">
        <h2 data-aos="fade-up">remarkable speakers.</h2>
        <p className='center' data-aos="fade-up">What do you get when you take the brighest entrepreneurial minds of the country, put them together at one place and let them talk about their life experiences? That's right, you get IIIT-Delhi's E-Summit'23.</p>
        <a href="https://forms.gle/8YTCMbWMgYoaDRT2A">
          <img src={triggeredInsaan} alt="Startup Fair" className="event-banner"/>
        </a>
        <a href="https://forms.gle/8YTCMbWMgYoaDRT2A">
          <img src={triggeredInsaan} alt="Startup Fair" className="event-banner"/>
        </a>
        <a href="https://forms.gle/8YTCMbWMgYoaDRT2A">
          <img src={triggeredInsaan} alt="Startup Fair" className="event-banner"/>
        </a>
      </div>
    </>
  )
}
