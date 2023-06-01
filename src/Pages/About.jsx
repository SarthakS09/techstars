import React from 'react'
import { useEffect } from 'react'
import sampleImage from '../Assets/Team/girdhar.jpeg'
import '../Styles/About.css'

// Utility function for writing DRY code
function renderCard(image, name, designation, description) {
  return(
      <div className="card" data-aos="fade-up">
        <div>
        <img src={image} alt="" />
        <h4 className='name'>{name}</h4>
        <h4 className='designation flexible'>{designation}</h4>
        <h4 className='description'>{description}</h4>
        </div>
      </div>
  )
}

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="about-header">
        <h2>behind every successful <span className="mark"><span className="offsetMark">man</span></span> event, there is an incredible <span className="mark"><span className="offsetMark">woman</span></span> organising team.</h2>
        <p>In all seriousness, here's the team that worked day and night to bring the vision of organising one of the biggest events in the institute to reality.</p>
      </div>

      <section className="yellow">
        <h2>convenors and mentors</h2>

        {/* For full-width desktops, this div will have a layout of 3 cards in a row */}
        <div className="cards-section">
          {renderCard(sampleImage, 'Devanshi Goel', 'Convenor',
            '“A line that describes them briefly, written by them”')}

          {renderCard(sampleImage, 'Akshmit Dewan', 'Convenor',
            '“A line that describes them briefly, written by them”')}

          {renderCard(sampleImage, 'Hribhav Panchal', 'Mentor',
            '“A line that describes them briefly, written by them”')}

          {renderCard(sampleImage, 'Aditya Girdhar', 'Web/Tech Lead',
            '“A line that describes them briefly, written by them”')}

          {renderCard(sampleImage, 'Janesh Kapoor', 'Sponsorship Lead',
            '“A line that describes them briefly, written by them”')}

          {renderCard(sampleImage, 'Firstname lastname', 'Designation',
            '“A line that describes them briefly, written by them”')}
        </div>
      </section>

      <section className="purple">
        <h2>organising committee</h2>
      </section>

      <section className="green">
        <h2>organising team</h2>
      </section>
    </>
    
  )
}
