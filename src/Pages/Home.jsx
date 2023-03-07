import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/Home.css'

export default function Home() {
  return (
  <>
      <div className="landing">
        <h1 className='t1 animate__animated animate__bounceInRight'>🚀 your biggest </h1>
        <h1 className='t2 animate__animated animate__bounceInLeft'>networking 👨🏻‍💻</h1>
        <h1 className='t3 animate__animated animate__bounceInRight'>💸 opportunity.</h1>
      </div>

      <div className='events'>
          <h2>events</h2>
      </div>

      <div className='speakers'>
          <h2>speakers</h2>
      </div>

      <div className='collaborations'>
          <h2>collaborations</h2>
      </div>
  </>
  )
}
