import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const alumniData = [
    { name: 'Dhiyanesh G', description: 'Developer', img: '../../senphoto.jpg', phone: '7092695851', email: 'g.dhiyanesh@iitg.ac.in', linkedin: 'https://linkedin.com/in/dhiyanesh-g-2115432a9', batch: '2026', program: 'B.Tech', position:'SDE' },
    { name: 'Tushar', description: 'Developer', img: '../../senphoto.jpg', phone: '7092695851', email: 'g.dhiyanesh@iitg.ac.in', linkedin: 'https://linkedin.com/in/dhiyanesh-g-2115432a9', batch: '2025', program: 'B.Tech', position:'SDE' },
    { name: 'sumit', description: 'Developer', img: '../../senphoto.jpg', phone: '7092695851', email: 'g.dhiyanesh@iitg.ac.in', linkedin: 'https://linkedin.com/in/dhiyanesh-g-2115432a9', batch: '2026', program: 'B.Tech', position:'SDE' },
    { name: 'Dhiyanesh G', description: 'Developer', img: '../../senphoto.jpg', phone: '7092695851', email: 'g.dhiyanesh@iitg.ac.in', linkedin: 'https://linkedin.com/in/dhiyanesh-g-2115432a9', batch: '2026', program: 'B.Tech', position:'SDE' },
    
    // Add more alumni members here
  ];

const AlumniPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    filterAlumni(term, selectedBatch, selectedProgram);
  };

  const handleBatchFilter = (event) => {
    const batch = event.target.value;
    setSelectedBatch(batch);
    filterAlumni(searchTerm, batch, selectedProgram);
  };

  const handleProgramFilter = (event) => {
    const program = event.target.value;
    setSelectedProgram(program);
    filterAlumni(searchTerm, selectedBatch, program);
  };

  const filterAlumni = (term, batch, program) => {
    let results = alumniData.filter((alumni) =>
      alumni.name.toLowerCase().includes(term) &&
      (!batch || alumni.batch === batch) &&
      (!program || alumni.program === program)
    );
    setFilteredAlumni(results);
  };

  return (
    <Container>
      <Header>
        <h1>Alumni Directory</h1>
      </Header>

      <FiltersContainer>
        <SearchBar
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <Select onChange={handleBatchFilter}>
          <option value="">Batch</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </Select>
        <Select onChange={handleProgramFilter}>
          <option value="">Program</option>
          <option value="B.Tech">B.Tech</option>
          <option value="M.Tech">M.Tech</option>
          <option value="PhD">PhD</option>
        </Select>
        <Select>
          <option value="">More</option>
          {/* Add more filter options here if needed */}
        </Select>
      </FiltersContainer>

      <ResultsTag>
        {filteredAlumni.length} {filteredAlumni.length === 1 ? 'Result' : 'Results'} Found
      </ResultsTag>

      <Section>
        <FlexGrid>
          {filteredAlumni.map((alumni, index) => (
            <Card
              key={index}
              imgSrc={alumni.img}
              name={alumni.name}
              description={alumni.description}
              phone={alumni.phone}
              email={alumni.email}
              linkedin={alumni.linkedin}
              batch={alumni.batch}
            />
          ))}
        </FlexGrid>
      </Section>

      {/* Add pagination below */}
      

    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const Header = styled.div`
  text-align: center;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const SearchBar = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ResultsTag = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
`;

export default AlumniPage;
