import React from 'react'
import { useEffect } from 'react'
import Card from '../Components/Card'
import ashneer from '../Assets/ashneer.png'
import triggeredInsaan from '../Assets/triggered-insaan.png'
import suri from '../Assets/suri.png'
import saptarshi from '../Assets/saptarshi.png'
import anshMehra from '../Assets/ansh-mehra.png'
import '../Styles/Speakers.scss'

export default function Speakers({hasOpted, toggleBookmark}) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <h2 data-aos="fade-up">remarkable speakers.</h2>
      <p className='center' data-aos="fade-up">
        What do you get when you take the brighest entrepreneurial minds of the country, put them together at one place and let them talk about their life experiences? That's right, you get IIIT-Delhi's E-Summit'23.
      </p>
      
      <div className="container">
        <Card
          img={ashneer}
          link='https://forms.gle/sdfdyeHz1NyTiP538'
          id='ashneerGrover'
          toggleBookmark={toggleBookmark}
          hasOpted={hasOpted} />
        <Card
          img={suri}
          link='https://docs.google.com/forms/d/e/1FAIpQLSecJjDEtRBMuTcufJXE5Bju3473tyFs5FQK15a-z7cG3sBPmA/viewform'
          id='nishantSuri'
          toggleBookmark={toggleBookmark}
          hasOpted={hasOpted} />
        <Card
          img={triggeredInsaan}
          link='https://forms.gle/8YTCMbWMgYoaDRT2A'
          id='triggeredInsaan'
          toggleBookmark={toggleBookmark}
          hasOpted={hasOpted} />
        <Card
          img={saptarshi}
          link='https://forms.gle/3b7tY9Pe4NFgSzoF7'
          id='saptarishi'
          toggleBookmark={toggleBookmark}
          hasOpted={hasOpted} />
        <Card
          img={anshMehra}
          link='https://forms.gle/ymQvC4XFwcTjTQCRA'
          id='anshMehra'
          toggleBookmark={toggleBookmark}
          hasOpted={hasOpted} />
      </div>
    </>
  )
}
