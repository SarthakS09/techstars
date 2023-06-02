import React from 'react'
import { useEffect } from 'react'
import schedImage from '../Assets/schedule.svg'
import '../Styles/Schedule.scss'

function renderBlock(time, lhc, rnd, lhcId, rndId, hasOpted, toggleBookmark) {
  return(
      <div className="time-section" data-aos="fade-up">
        <p className="sched-time">{time}</p>
        <div className="time-flex">
          <button onClick={() => toggleBookmark(rndId)} className={`${rnd === '' ? 'time-card-empty' : 'time-card-rnd'} ${(hasOpted(rndId) && rnd !== '') ? 'time-card-imp' : ''}`} ><h4>{rnd}</h4></button>
          <button onClick={() => toggleBookmark(lhcId)} className={hasOpted(lhcId) ? 'time-card-rnd time-card-imp' : 'time-card-rnd'}><h4>{lhc}</h4></button>
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

export default function Schedule(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const hasOpted = (id) => {
		return props.hasOpted(id)
	}

  const toggleBookmark = (id) => {
    if (id === '') {
      return
    }
		props.toggleBookmark(id);
	}

  return (
    <>
      <div className="about-header sched-header">
        <h2>here's the plan.</h2>
        <p className='sched-p'>We recommend planning your day in advance to make the most of all the exciting things we have in store for you.</p>
        <p className='sched-p'>If you have bookmarked any events/speaker talks on this website, they will be <strong>highlighted in white</strong> below. You may tap on the event cells below to bookmark them as well.</p>
      </div>
      <div className="sched-container">
        <div className="buildings" data-aos="fade-up">
          <span className='rnd'><h4>R&D building</h4></span>
          <span className="line"></span>
          <span><h4>LHC building</h4></span>
        </div>
        {renderBlock(
          '12:30pm - 1:30pm',
          'registrations',
          '',
          '', '', props.hasOpted, props.toggleBookmark)}
        {renderBlock(
          '1:30pm - 2:30pm',
          'Keynote: Ansh Mehra',
          'Zero to One',
          'anshMehra', 'zeroToOne', props.hasOpted, props.toggleBookmark)}
        {renderBlock(
          '2:30pm - 3:15pm',
          'Keynote: Saptarshi Prakash',
          'Pitch Café',
          'saptarishi', 'pitchCafe', props.hasOpted, props.toggleBookmark)}

        {renderBreak(
          '3:15pm - 3:45pm',
          'snacks and networking')}

        {renderBlock(
          '3:45pm - 5:15pm',
          'Performance: Nishant Suri', 
          'Startup Fair', 
          'nishantSuri', 'startupFair', props.hasOpted, props.toggleBookmark)}
        {renderBlock(
          '5:15pm - 5:45pm',
          'Talk: Ashneer Grover',
          'Ad Mad',
          'ashneerGrover', 'adMad', props.hasOpted, props.toggleBookmark)}
        {renderBlock(
          '5:45pm - 6:15pm',
          'Talk: Triggered Insaan',
          'Shark Tank Panel',
          'triggeredInsaan', 'sharkTank', props.hasOpted, props.toggleBookmark)}
        {renderBlock(
          '6:15pm - 7:15pm',
          'Raaz',
          'Godfather', 
          'raaz', 'godfather', props.hasOpted, props.toggleBookmark)}

        {renderBreak(
          '7:15pm - 8:00pm',
          'meal and open networking')}

        {/* <img src={schedImage} alt="schedule" className='sched-image' /> */}
        
      </div>
    </>
  )
}
