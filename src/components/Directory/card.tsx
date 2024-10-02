import React from 'react';
import './styles/cardstyle.css'; // Import the CSS file

interface CardProps {
  imgSrc: string;
  name: string;
  description: string;
  phone: string;
  email: string;
  linkedin: string;
  batch: string;
  programme: string;
}

const Card: React.FC<CardProps> = ({
  imgSrc,
  name,
  description,
  phone,
  email,
  linkedin,
  batch,
  programme,
}) => {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={name} className="profile-image" />
      <div className="card-content">
        <p className="programme">{programme}</p>
        <h3 className="name">{name}</h3>
        <h3 className="batch">Batch of {batch}</h3>
        <p className="description">{description}</p>
        <div className="contact-icons">
          <a href={`tel:${phone}`} className="icon-link">
            <img src="/Phone.png" alt="Phone Icon" width="24" height="24" />
          </a>
          <a href={`mailto:${email}`} className="icon-link">
            <img src="/mail.png" alt="Email Icon" width="24" height="24" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="icon-link">
            <img src="/linked.png" alt="LinkedIn Icon" width="24" height="24" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
