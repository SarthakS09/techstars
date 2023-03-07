import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import scrollDown from '../Assets/scroll-down.svg'
import '../Styles/Home.css'

export default function Home() {
  return (
  <>
      <div className="landing">
        <h1 className='t1 animate__animated animate__bounceInRight'>🚀 your biggest </h1>
        <h1 className='t2 animate__animated animate__bounceInLeft'>networking 👨🏻‍💻</h1>
        <h1 className='t3 animate__animated animate__bounceInRight'>💸 opportunity.</h1>
      </div>

      <h2>the coolest events 🤩</h2>
      <div className='events'>
          <div className='shark-tank-box'>
            <h3>Shark Tank</h3>
          </div>
          <div className='productathon-box'>
            <h3>Productathon</h3>
          </div>
      </div>
      <div className="viewEvents">
        <h4>view all events →</h4>
      </div>

      <div className='speakers-card'>
          <h2>the best speakers 🤯</h2>
          <p>Sample text demonstrating how cool and diverse our speaker line-up is</p>
      </div>

      <div className='collaborations'>
          <h2>actually useful collaborations 🤝</h2>
      </div>
  </>
  )
}
