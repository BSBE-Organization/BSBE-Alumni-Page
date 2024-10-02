import React from 'react';
import styled from 'styled-components';
import Card from '../components/card';

const TeamPage = () => {
  const teamfound = [
    { name: 'Dhiyanesh G', description: 'Developer', img: '../../senphoto.jpg', phone: '7092695851', email: 'g.dhiyanesh@iitg.ac.in', linkedin: 'https://linkedin.com/in/dhiyanesh-g-2115432a9', batch:'2026', programme:'B.Tech' },
    { name: 'Person 2', description: 'Designer', img: '/path-to-image2.jpg', phone: '1234567890', email: 'person2@example.com', linkedin: 'https://linkedin.com/in/person2' , batch:'2026', programme:'B.Tech'},
   // Add more team members here
  ];

  const teamleaddev = [
    { name: 'Dhiyanesh G', description: 'Developer', img: '../../senphoto.jpg', phone: '7092695851', email: 'g.dhiyanesh@iitg.ac.in', linkedin: 'https://linkedin.com/in/dhiyanesh-g-2115432a9', batch:'2026', programme:'B.Tech' },
    { name: 'Person 2', description: 'Designer', img: '/path-to-image2.jpg', phone: '1234567890', email: 'person2@example.com', linkedin: 'https://linkedin.com/in/person2' , batch:'2026', programme:'B.Tech'},
    // Add more team members here
  ];

  const teamdev = [
    { name: 'Dhiyanesh G', description: 'Developer', img: '../../senphoto.jpg', phone: '7092695851', email: 'g.dhiyanesh@iitg.ac.in', linkedin: 'https://linkedin.com/in/dhiyanesh-g-2115432a9', batch:'2026', programme:'B.Tech' },
    { name: 'Person 2', description: 'Designer', img: '/path-to-image2.jpg', phone: '1234567890', email: 'person2@example.com', linkedin: 'https://linkedin.com/in/person2' , batch:'2026', programme:'B.Tech'},
    { name: 'Haya', description: 'Developer', img: '../../senphoto.jpg', phone: '1234567890', email: 'haya@example.com', linkedin: 'https://linkedin.com/in/haya' , batch:'2026', programme:'B.Tech'},
    // Add more team members here
  ];

  return (
    <Container>
      <Header>
        <h1>Our Team</h1>
      </Header>

      <SubHeading>
        <h2>Founding</h2>
      </SubHeading>
      <Section>
        <FlexGrid>
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
        </FlexGrid>
      </Section>

      <SubHeading>
        <h2>Lead Devolpers</h2>
      </SubHeading>
      <Section>
        <FlexGrid>
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
        </FlexGrid>
      </Section>

      <SubHeading>
        <h2>Developers</h2>
      </SubHeading>
      <Section>
        <FlexGrid>
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
        </FlexGrid>
      </Section>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 20px;
  font-family: Plus Jakarta Sans;
  font-color: rgba(5, 41, 25, 1);
  text-align: left;
`;

const Header = styled.div`
  text-align: center;
  padding-bottom: 20px;
  h1 {
    font-family: 'Plus Jakarta Sans', sans-serif; /* Adding font family to h1 */
    font-weight: bold; /* Optional: Make it bold */
    color: rgba(5, 41, 25, 1); /* Optional: Set a color */
  }
`;

const SubHeading = styled.div`
  text-align: center;
  h2 {
    font-family: 'Plus Jakarta Sans', sans-serif; /* Adding font family to h1 */
    font-weight: bold; /* Optional: Make it bold */
    color: rgba(5, 41, 25, 1); /* Optional: Set a color */
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

// Flexbox Grid
const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 1000px;
`;

export default TeamPage;
