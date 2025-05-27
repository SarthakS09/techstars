import React, { useEffect } from 'react';
import sampleImage from '../Assets/Team/ecell.jpeg';
import member1Image from '../Assets/Team/member1.jpg'; // Add actual image paths
import member2Image from '../Assets/Team/member2.jpg';
import member3Image from '../Assets/Team/ecell.jpeg';
import member4Image from '../Assets/Team/member4.jpg';
import member5Image from '../Assets/Team/ecell.jpeg';
import '../Styles/Team.scss'; // Update the stylesheet if necessary

// Utility function for writing DRY code
function renderCard(image, name, designation, description) {
  return (
    <div className="card" data-aos="fade-up">
      <div>
        <img src={image} alt={name} />
        <h4 className='name'>{name}</h4>
        <h4 className='designation flexible'>{designation}</h4>
        <h4 className='description'>{description}</h4>
      </div>
    </div>
  );
}

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Array of team members
  const convenorsAndMentors = [
    { image: sampleImage, name: 'Mentor 1', designation: 'Designation 1', description: '“A line that describes them briefly, written by them”' },
    { image: sampleImage, name: 'Mentor 2', designation: 'Designation 2', description: '“A line that describes them briefly, written by them”' },
    { image: sampleImage, name: 'Mentor 3', designation: 'Designation 3', description: '“A line that describes them briefly, written by them”' },
  ];

  const organizingCommittee = [
    { image: member1Image, name: 'Krishna Mittal', designation: 'President', description: '“Description of Member One”' },
    { image: member2Image, name: 'Abhay K. Dwivedi', designation: 'Vice-President', description: '“Description of Member Two”' },
    { image: member3Image, name: 'Sajal Gupta', designation: 'Vice-President', description: '“Description of Member Three”' },
    { image: member4Image, name: 'Rishi Gupta', designation: 'Vice-President', description: '“Description of Member Four”' },
    { image: member5Image, name: 'Harsh Kushwaha', designation: 'Webmaster', description: '“Description of Member Five”' },
  ];

  const organizingTeam = [
    { image: sampleImage, name: 'Team Member One', designation: 'Role', description: '“Description of Team Member One”' },
    { image: sampleImage, name: 'Team Member Two', designation: 'Role', description: '“Description of Team Member Two”' },
    { image: sampleImage, name: 'Team Member Three', designation: 'Role', description: '“Description of Team Member Three”' },
  ];

  return (
    <>
      <div className="about-header">
        <h2>Behind every successful <span className="mark"><span className="offsetMark">man</span></span> event, there is an incredible <span className="mark"><span className="offsetMark">woman</span></span> organizing team.</h2>
        <p>In all seriousness, here's the team that worked day and night to bring the vision of organizing one of the biggest events in the institute to reality.</p>
      </div>

      <section className="yellow">
        <h2>Convenors and Mentors</h2>
        <div className="cards-section">
          {convenorsAndMentors.map(member => renderCard(member.image, member.name, member.designation, member.description))}
        </div>
      </section>

      <section className="purple">
        <h2>Organizing Committee</h2>
        <div className="cards-section">
          {organizingCommittee.map(member => renderCard(member.image, member.name, member.designation, member.description))}
        </div>
      </section>

      <section className="green">
        <h2>Organizing Team</h2>
        <div className="cards-section">
          {organizingTeam.map(member => renderCard(member.image, member.name, member.designation, member.description))}
        </div>
      </section>
    </>
  );
}

