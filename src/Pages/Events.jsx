import { useEffect } from "react"
import React from 'react'
import Card from "../Components/Card"
import zeroToOne from '../Assets/zero-to-one.png'
import pitchCafe from '../Assets/pitch-cafe.png'
import startupFair from '../Assets/startup-fair.png'
import sharkTank from '../Assets/shark-tank-panel.png'
import socialIdeathon from '../Assets/social-ideathon.png'
import godfather from '../Assets/godfather.png'
import raaz from '../Assets/raaz.png'
import adMad from '../Assets/ad-mad.png'

export default function Events({toggleBookmark, hasOpted}) {
  
  // This ensures that all pages open with the scrollbar at the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <h2 data-aos="fade-up">
          events that you'll never forget.
        </h2>
        <p className='center' data-aos="fade-up">
          We've planned incredibly fun events, where you can get your hands dirty and play the serial entrepreneur you've always wanted to be.
        </p>
        
        <div className="container">
          <Card
            img={zeroToOne}
            link='https://docs.google.com/forms/d/e/1FAIpQLScJNydNjVT6jTqrM--_0Re7qhwKI20eATplWn0dkJJzvzS_aQ/viewform?usp=header'
            id={'zeroToOne'}
            toggleBookmark={toggleBookmark}
            hasOpted={hasOpted} />
          <Card
            img={startupFair}
            link='https://docs.google.com/forms/d/e/1FAIpQLScJNydNjVT6jTqrM--_0Re7qhwKI20eATplWn0dkJJzvzS_aQ/viewform?usp=header'
            id={'startupFair'}
            toggleBookmark={toggleBookmark}
            hasOpted={hasOpted} />
          <Card
            img={pitchCafe}
            link='https://docs.google.com/forms/d/e/1FAIpQLScJNydNjVT6jTqrM--_0Re7qhwKI20eATplWn0dkJJzvzS_aQ/viewform?usp=header'
            id='pitchCafe'
            toggleBookmark={toggleBookmark}
            hasOpted={hasOpted} />
          <Card
            img={raaz}
            link='https://docs.google.com/forms/d/e/1FAIpQLScJNydNjVT6jTqrM--_0Re7qhwKI20eATplWn0dkJJzvzS_aQ/viewform?usp=header'
            id='raaz'
            toggleBookmark={toggleBookmark}
            hasOpted={hasOpted} />
          <Card
            img={adMad}
            link='https://docs.google.com/forms/d/e/1FAIpQLScJNydNjVT6jTqrM--_0Re7qhwKI20eATplWn0dkJJzvzS_aQ/viewform?usp=header'
            id='adMad'
            toggleBookmark={toggleBookmark}
            hasOpted={hasOpted} />
          <Card
            img={sharkTank}
            id='sharkTank'
            toggleBookmark={toggleBookmark}
            hasOpted={hasOpted} />
          <Card
            img={godfather}
            link='https://docs.google.com/forms/d/e/1FAIpQLScJNydNjVT6jTqrM--_0Re7qhwKI20eATplWn0dkJJzvzS_aQ/viewform?usp=header'
            id='godfather'
            toggleBookmark={toggleBookmark}
            hasOpted={hasOpted} />
          <Card
            img={socialIdeathon}
            id='socialIdeathon'
            toggleBookmark={toggleBookmark}
            hasOpted={hasOpted} />
          <br />
      </div>
    </>
  )
}
