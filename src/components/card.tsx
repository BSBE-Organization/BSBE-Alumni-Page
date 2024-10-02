import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Importing icons

interface CardProps {
  imgSrc: string;
  name: string;
  description: string;
  phone: string;
  email: string;
  linkedin: string;
  batch:string;
  programme:string;
  
}

const Card: React.FC<CardProps> = ({ imgSrc, name, description, phone, email, linkedin , batch, programme}) => {
  return (
    <CardContainer>
      <ProfileImage src={imgSrc} alt={name} />
      <CardContent>
        <Programme>{programme}</Programme>
        <Name>{name}</Name>
        <Batch>Batch of {batch}</Batch>
        <Description>{description}</Description>
        <ContactIcons>
          <IconLink href={`tel:${phone}`}>
            <FaPhone />
          </IconLink>
          <IconLink href={`mailto:${email}`}>
            <FaEnvelope />
          </IconLink>
          <IconLink href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </IconLink>
        </ContactIcons>
      </CardContent>
    </CardContainer>
  );
};

// Styled Components for Flexbox Layout
const CardContainer = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;
  background-color: #E4FFF2;
  padding: 30px 20px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

const CardContent = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h3`
  font-size: 18px;
  margin: 10px 0 5px;
  color: #333;
  font-family: 'Plus Jakarta Sans', sans-serif; /* Adding font family */
  font-weight: bold; /* Optional: Make it bold */
`;

const Description = styled.p`
  font-size: 16px;
  font-family: 'Plus Jakarta Sans', sans-serif; /* Adding font family */
  color: #777;
`;
const Programme = styled.p`
  font-size: 16px;
  font-family: 'Plus Jakarta Sans', sans-serif; /* Adding font family */
  color: rgba(15, 139, 78, 1);

`;
const Batch = styled.h3`
  font-size: 12px;
  margin: 10px 0 5px;
  color: #333;
  font-family: 'Plus Jakarta Sans', sans-serif; /* Adding font family *
  font-family: Plus Jakarta Sans;
  font-weight: 500;
  line-height: 20.16px;
  text-align: left;
`;

// New styled components for the contact icons
const ContactIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
  padding-right: 60px;
  padding-left: 60px;
  align-items: center;
`;

const IconLink = styled.a`
  color: #333;
  font-size: 20px;
  background-color: #ccffe3;
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b2f2d1;
  }
`;

export default Card;
