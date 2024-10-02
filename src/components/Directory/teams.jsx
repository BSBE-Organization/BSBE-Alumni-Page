import React from 'react';
import './styles/teamstyle.css'; // Import the CSS file
import Card from './card.tsx'; // Adjust the import path as necessary

const TeamPage = () => {
  const teamfound = [
    { name: 'Dhiyanesh G', description: 'Developer', img: '../../senphoto.jpg', phone: '7092695851', email: 'g.dhiyanesh@iitg.ac.in', linkedin: 'https://linkedin.com/in/dhiyanesh-g-2115432a9', batch: '2026', programme: 'B.Tech' },
    { name: 'Person 2', description: 'Designer', img: '/path-to-image2.jpg', phone: '1234567890', email: 'person2@example.com', linkedin: 'https://linkedin.com/in/person2', batch: '2026', programme: 'B.Tech' },
    // Add more team members here
  ];

  const teamleaddev = [
    { name: 'Dhiyanesh G', description: 'Developer', img: '../../senphoto.jpg', phone: '7092695851', email: 'g.dhiyanesh@iitg.ac.in', linkedin: 'https://linkedin.com/in/dhiyanesh-g-2115432a9', batch: '2026', programme: 'B.Tech' },
    { name: 'Person 2', description: 'Designer', img: '/path-to-image2.jpg', phone: '1234567890', email: 'person2@example.com', linkedin: 'https://linkedin.com/in/person2', batch: '2026', programme: 'B.Tech' },
    // Add more team members here
  ];

  const teamdev = [
    { name: 'Dhiyanesh G', description: 'Developer', img: '../../senphoto.jpg', phone: '7092695851', email: 'g.dhiyanesh@iitg.ac.in', linkedin: 'https://linkedin.com/in/dhiyanesh-g-2115432a9', batch: '2026', programme: 'B.Tech' },
    { name: 'Person 2', description: 'Designer', img: '/path-to-image2.jpg', phone: '1234567890', email: 'person2@example.com', linkedin: 'https://linkedin.com/in/person2', batch: '2026', programme: 'B.Tech' },
    { name: 'Haya', description: 'Developer', img: '../../senphoto.jpg', phone: '1234567890', email: 'haya@example.com', linkedin: 'https://linkedin.com/in/haya', batch: '2026', programme: 'B.Tech' },
    // Add more team members here
  ];

  return (
    <div className="container">
      <div className="header">
        <h1>Our Team</h1>
      </div>

      <div className="subheading">
        <h2>Founding</h2>
      </div>
      <div className="section">
        <div className="flex-grid">
          {teamfound.map((member, index) => (
            <Card 
              key={index}
              imgSrc={member.img}
              name={member.name}
              description={member.description}
              phone={member.phone}
              email={member.email}
              linkedin={member.linkedin} // Pass LinkedIn link
              batch={member.batch}
              programme={member.programme}
            />
          ))}
        </div>
      </div>

      <div className="subheading">
        <h2>Lead Developers</h2>
      </div>
      <div className="section">
        <div className="flex-grid">
          {teamleaddev.map((member, index) => (
            <Card 
              key={index}
              imgSrc={member.img}
              name={member.name}
              description={member.description}
              phone={member.phone}
              email={member.email}
              linkedin={member.linkedin} // Pass LinkedIn link
              batch={member.batch}
              programme={member.programme}
            />
          ))}
        </div>
      </div>

      <div className="subheading">
        <h2>Developers</h2>
      </div>
      <div className="section">
        <div className="flex-grid">
          {teamdev.map((member, index) => (
            <Card 
              key={index}
              imgSrc={member.img}
              name={member.name}
              description={member.description}
              phone={member.phone}
              email={member.email}
              linkedin={member.linkedin} // Pass LinkedIn link
              batch={member.batch}
              programme={member.programme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
