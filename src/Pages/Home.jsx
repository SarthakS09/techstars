import React from 'react'
import { useEffect } from 'react'
import { Link as NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import heroVideo from '../Assets/hero.mp4'
import biggest from '../Assets/your-biggest.svg'
import networking from '../Assets/networking.svg'
import opportunity from '../Assets/opportunity.svg'
import ashneer from '../Assets/ashneer.png'
import triggeredInsaan from '../Assets/triggered-insaan.png'
import saptarshi from '../Assets/saptarshi.png'
import anshMehra from '../Assets/ansh-mehra.png'
import sharkTank from '../Assets/shark-tank-panel.png'
import socialIdeathon from '../Assets/social-ideathon.png'
import scrollDown from '../Assets/scroll.svg'
import zeroToOne from '../Assets/zero-to-one.png'
import pitchCafe from '../Assets/pitch-cafe.png'
import startupFair from '../Assets/startup-fair.png'
import sampleSpeakers from '../Assets/sample-speakers.png'
import sampleCollabs from '../Assets/sample-collabs.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Styles/Home.css'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
  <>
    {/* <div className="spline">
    <Spline scene="https://prod.spline.design/vhZtkdWG2LvATHy7/scene.splinecode" />
    </div> */}
    {/* <div id="blob"></div>
    <div id="blur"></div> */}
    <div className="hero">
    <video className='hero-video' preload="auto" playsInline autoPlay loop muted>
      <source src={heroVideo} type="video/mp4"/>
    </video>
    </div>
    <div className="landing">
      <div className='landing-text'>
      <img className='animate__animated animate__fadeInUp t1' src={biggest}/>
      <img className='animate__animated animate__fadeInUp t2' src={networking}/>
      <img className='animate__animated animate__fadeInUp t3' src={opportunity}/>
    </div>
      {/* <h1 className='t1 animate__animated animate__bounceInRight'>🚀 your biggest </h1>
      <h1 className='t2 animate__animated animate__bounceInLeft'>networking 👨🏻‍💻</h1>
      <h1 className='t3 animate__animated animate__bounceInRight'>💸 opportunity.</h1> */}
      <div>
      <h3 className='center date'>APRIL 22<sup>nd</sup> & 23<sup>rd</sup>, 2023</h3>
      <Link style={{ width: "100%", display: 'flex', justifyContent: 'center' }} to="speakers-start" smooth={true} offset={-200} duration={1500}>
        <img src={scrollDown} className='animate__animated animate__bounceInUp animate__delay-2s scroller'/>
      </Link>
      </div>
    </div>

      <h2 id='speakers-start' className='center' data-aos="fade-up">gold-standard speakers.</h2>
      <p className='center' data-aos="fade-up">Don't miss the chance to listen to some of the most influential people in this country speak about business, technology and life. <strong>Register now!</strong></p>
    <div className="container">

      <a href="https://forms.gle/sdfdyeHz1NyTiP538" target='_blank'>
        <img src={ashneer} alt="Ashneer Grover" className="event-banner-min"/>
      </a>
      
      <a href="https://forms.gle/8YTCMbWMgYoaDRT2A" target='_blank'>
        <img src={triggeredInsaan} alt="Triggered Insaan" className="event-banner-min"/>
      </a>

      {/* <a href="https://forms.gle/3b7tY9Pe4NFgSzoF7" target='_blank'>
        <img src={saptarshi} alt="Saptarshi Prakash" className="event-banner-min"/>
      </a> */}

      {/* <a href="https://forms.gle/ymQvC4XFwcTjTQCRA" target='_blank'>
        <img src={anshMehra} alt="Ansh Mehra" className="event-banner-min"/>
      </a> */}

    </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <NavLink to='/speakers' className='btn'>view all speakers →</NavLink>
      </div>

      <h2 id='events-start' className='center' data-aos="fade-up" style={{marginTop: "40px"}}>mind-blowing events.</h2>
      <p className='center' data-aos="fade-up">IIIT-Delhi's E-Summit'23 is packed with some of the most adrenaline-inducing events. Have a glimpse of what's to come before we steal the show ;)</p>
      <p className='center' data-aos="fade-up">Registrations are open for the following events, so what are you waiting for? <strong>Register now!</strong></p>
    <div className='container'>

      <a href="https://forms.gle/TASM4aCHxcdSSE5RA" target='_blank'>
        <img src={zeroToOne} alt="Zero to One" className="event-banner-min" />
      </a>
      
      <a href="https://forms.gle/buRwqAWz7uPKswzA7" target='_blank'>
        <img src={pitchCafe} alt="Pitch Cafe" className="event-banner-min" />
      </a>  

      {/* <a href="https://forms.gle/spYit3unTSUq2o618" target='_blank'>
        <img src={startupFair} alt="Startup Fair" className="event-banner-min" />
      </a> */}
      
      <a>
        <img src={sharkTank} alt="shark tank" className="event-banner-min"/> 
      </a>

      <a>
        <img src={socialIdeathon} alt="social ideathon" className="event-banner-min"/>
      </a>

      

      {/* <div className="two-events banner">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVjZcApKfejIsxoGEc4MJPiuBkLW910rYK0F3gH88e644o8A/viewform">
        <div className="card-large" data-aos="fade-up">
          <p>24th MARCH 2023</p>
          <h3>E-Merge: The Official Pre-Event</h3>
          <div className="arrow">
            <h3>REGISTER NOW.</h3>
            <svg id="right">
              <path d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z" fill="#000"></path>
            </svg>
          </div>
        </div>
        </a>
      </div> */}
      <br />
      {/* <h3>Here's what to expect:</h3> */}
      {/* <div className='two-events'>
          <div className='card-large incubation' data-aos="fade-up">
            <img src='https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_400,h_467/https://iiitdic.in/wp-content/uploads/2020/03/66.jpg'/>
            <h3>Incubations' Meet</h3>
            <p>Connecting 10+ incubations in one room, the all Delhi Incubations meet is here for all fellow Incubators to draw their attention to ways to expand the entrepreneurial culture in society. The forum will give them a chance to discuss the hurdles, the opportunities, and the upcoming areas of economic growth with entrepreneurial possibilities.</p>
          </div>
          <div className='card-large ecell-meet' data-aos="fade-up">
            <img src='https://images.shiksha.com/mediadata/images/articles/1649421162php0eD1lx.jpeg'/>
            <h3>Confluence: E-Cells' Meet</h3>
            <p>Confluence is an all-over Delhi-NCR's ECells meet, aiming to bring together the entrepreneurship cells from across the city on one platform and forum. This meeting aims to help different ECell groups to connect, collaborate and learn from each other. We plan to keep an open forum for all ECells to develop ideas and collaboration to pitch in front of all other ECell groups.</p>
          </div>
      </div> */}
      {/* <div className="two-events">
          <div className="card-large scam-2023" data-aos="fade-up">
            <img src="https://images.indianexpress.com/2020/08/scam-1992-hanshad-mehta-teaser-1200.jpg?w=389" alt="scam-2023" />
            <h3>Scam 2023 (Mock Stock)</h3>
            <p>Get ready to teleport yourself to the hustle of the Bombay Stock Exchange of 1990s and experience the thrill of purchasing physical stocks and analyzing them to form the best portfolio in the market. We'll have news floating around the room, broker floating tips, and hustle to purchase the best stocks in the market. Are you up for the challenge?</p>
          </div>

          <div className="card-large number-painting" data-aos="fade-up">
            <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/1674C/production/_106308919_paint_by_numbers2_getty.jpg" alt="number-painting" />
            <h3>Number Painting</h3>
            <p>Roll up your sleeves and prepare to make this Changemakers Installation colorful. We present to you an enjoyable and interactive experience of number painting. Join us with your friends to discuss the prevailing social issues and paint your way through these Changemakers' lives.</p>
          </div>

          <div className="card-large social-impact" data-aos="fade-up">
            <img src="https://home.iitd.ac.in/public/storage/uploads/TIH%20MoU%202_1637147554.jpg" alt="social impact meet" />
            <h3>Social Impact Meet</h3>
            <p>All hail Reformers! Book your calendars and join the movement of Change. We present name of event, an opportunity to interact and learn with fellow pacesetters. We intend to discuss themes like xyz, uvw….and hope to connect over the challenges and aspects we face as changemakers.</p>
          </div>
      </div> */}
    </div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <NavLink to='/events' className='btn'>view all events →</NavLink>
      </div>

    {/* <div className='speakers-card' data-aos="fade-up">
        <h2>gold-standard speakers. 👌</h2>
        <p>Sample text demonstrating how cool and diverse our speaker line-up is</p>
        <h4>view all speakers →</h4>
        <img src={sampleSpeakers}/>
    </div> */}

    <div className='collaborations'>
        <h2>industry collaborations. 🤝</h2>
        <p className='center'>We're backed by organisations that take pride in the entrepreneurship culture and bold spirit of IIIT-Delhi and beyond. </p>
        <img src={sampleCollabs} className='sample-collabs'/>
    </div>

  </>
  )
}
