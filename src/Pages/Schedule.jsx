import React from 'react'
import { useEffect } from 'react'
import '../Styles/Schedule.css'

function renderBlock(time, lhc, rnd) {
  return(
      <div className="time-section" data-aos="fade-up">
        <p className="sched-time">{time}</p>
        <div className="time-flex">
          <div className={typeof rnd === 'undefined' ? 'time-card-empty' : 'time-card-rnd'}><h4>{rnd}</h4></div>
          <div className="time-card-lhc"><h4>{lhc}</h4></div>
        </div>
      </div>
  )
}

function renderBreak(time, text) {
  return(
      <div className="time-section" data-aos="fade-up">
        <p className="sched-time">{time}</p>
        <div className="time-flex">
          <div className="time-card-break"><h4>{text}</h4></div>
        </div>
      </div>
  )
}

export default function Schedule() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="about-header sched-header">
        <h2>here's the plan.</h2>
        <p className='sched-p'>We recommend planning your day in advance to make the most of all the exciting things we have in store for you.</p>
      </div>
      <div className="sched-container">
        <div className="buildings" data-aos="fade-up">
          <span className='rnd'><h4>R&D building</h4></span>
          <span className="line"></span>
          <span><h4>LHC building</h4></span>
        </div>
        {renderBlock('12:30pm - 1:30pm', 'registrations')}
        {renderBlock('1:30pm - 2:30pm', 'enlightening session')}
        {renderBlock('2:30pm - 3:15pm', 'Scam 2023: Round 1', 'Change Utsav: movie showcase/nukad natak')}

        {renderBreak('3:15pm - 3:45pm', 'snacks and networking')}

        {renderBlock('3:45pm - 5:15pm', 'Scam 2023: Round 2', 'Change Utsav')}
        {renderBlock('5:15pm - 5:45pm', 'keynote session 1', 'Change Utsav')}
        {renderBlock('5:45pm - 6:15pm', 'keynote session 2')}
        {renderBlock('6:15pm - 7:15pm', 'confluence', 'empathy board & number painting')}

        {renderBreak('7:15pm - 8:00pm', 'meal and open networking')}
        
      </div>
    </>
  )
}
