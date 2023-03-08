import React from 'react'
import { Link } from 'react-scroll'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import scrollDown from '../Assets/scroll.svg'
import sampleSpeakers from '../Assets/sample-speakers.png'
import sampleCollabs from '../Assets/sample-collabs.png'
import '../Styles/Home.css'

export default function Home() {
  return (
  <>
      <div className="landing">
        <h1 className='t1 animate__animated animate__bounceInRight'>🚀 your biggest </h1>
        <h1 className='t2 animate__animated animate__bounceInLeft'>networking 👨🏻‍💻</h1>
        <h1 className='t3 animate__animated animate__bounceInRight'>💸 opportunity.</h1>
        <Link style={{ width: "100%", display: 'flex', justifyContent: 'center' }} to="events-start" smooth={true} offset={-75} duration={1500}>
        <img src={scrollDown} className='animate__animated animate__bounceInUp scroller'/>
        </Link>
      </div>

      <h2 id='events-start'>mind-blowing events 🤯</h2>
      <p className='center'>Sample text demonstrating how cool and diverse our events line-up is</p>
      <div className='events'>
          <div className='shark-tank-box'>
            <h3>Shark Tank</h3>
          </div>
          <div className='productathon-box'>
            <h3>Productathon</h3>
          </div>
      </div>
      <div className="viewEvents">
        <h4><a>view all events →</a></h4>
      </div>

      <div className='speakers-card'>
          <h2>the best speakers 👌</h2>
          <p>Sample text demonstrating how cool and diverse our speaker line-up is</p>
          <h4>view all speakers →</h4>
          <img src={sampleSpeakers}/>
      </div>

      <div className='collaborations'>
          <h2>industry collaborations 🤝</h2>
          <p className='center'>Sample text demonstrating how cool and diverse our sponsorship line-up is</p>
          <img src={sampleCollabs} className='sample-collabs'/>
      </div>
  </>
  )
}
