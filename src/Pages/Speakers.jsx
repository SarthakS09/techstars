import React from 'react'
import { useEffect } from 'react'
import ashneer from '../Assets/ashneer.png'
import triggeredInsaan from '../Assets/triggered-insaan.png'
import saptarshi from '../Assets/saptarshi.png'
import anshMehra from '../Assets/ansh-mehra.png'
import '../Styles/Speakers.css'

export default function Speakers() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <h2 data-aos="fade-up">remarkable speakers.</h2>
        <p className='center' data-aos="fade-up">What do you get when you take the brighest entrepreneurial minds of the country, put them together at one place and let them talk about their life experiences? That's right, you get IIIT-Delhi's E-Summit'23.</p>
      <div className="container">
      <a href="https://forms.gle/sdfdyeHz1NyTiP538" target='_blank'>
        <img src={ashneer} alt="Ashneer Grover" className="event-banner-min"/>
      </a>
        <a href="https://forms.gle/8YTCMbWMgYoaDRT2A" target="_black">
          <img src={triggeredInsaan} alt="Startup Fair" className="event-banner-min"/>
        </a>
        <a href="https://forms.gle/3b7tY9Pe4NFgSzoF7" target="_black">
        <img src={saptarshi} alt="Saptarshi Prakash" className="event-banner-min"/>
      </a>

      <a href="https://forms.gle/ymQvC4XFwcTjTQCRA" target="_black">
        <img src={anshMehra} alt="Ansh Mehra" className="event-banner-min"/>
      </a>
      </div>
    </>
  )
}
