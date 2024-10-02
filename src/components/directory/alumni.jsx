import React, { useState } from 'react';
import Card from './AlumniCard'; // Assuming you have a Card component to display alumni data

const Alumnipage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [batchFilter, setBatchFilter] = useState('');
  const [programFilter, setProgramFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 12; // Adjust the number of results per page as needed

  // Example alumni data (replace with your actual data)
  const alumniData = [
    { name: 'Aditya Jindal', batch: '2016', program: 'B.Tech', ...otherFields },
    { name: 'Sumeet Ahire', batch: '2016', program: 'Ph.D', ...otherFields },
    // Add more alumni data here
  ];

  // Filter alumni based on search and filters
  const filteredAlumni = alumniData.filter((alum) => {
    return (
      alum.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!batchFilter || alum.batch === batchFilter) &&
      (!programFilter || alum.program === programFilter)
    );
  });

  // Calculate total pages and paginated results
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = filteredAlumni.slice(indexOfFirstResult, indexOfLastResult);
  const totalResults = filteredAlumni.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  // Function to handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={batchFilter} onChange={(e) => setBatchFilter(e.target.value)}>
          <option value="">Select Batch</option>
          <option value="2016">2016</option>
          <option value="2026">2026</option>
          {/* Add more batch options here */}
        </select>
        <select value={programFilter} onChange={(e) => setProgramFilter(e.target.value)}>
          <option value="">Select Program</option>
          <option value="B.Tech">B.Tech</option>
          <option value="Ph.D">Ph.D</option>
          {/* Add more program options here */}
        </select>
      </div>

      {/* Search Results Number */}
      <div className="search-results-number">
        <p>Search Results ({totalResults})</p>
      </div>

      {/* Display alumni cards for the current page */}
      <div className="alumni-cards">
        {currentResults.map((alum, index) => (
          <Card
            key={index}
            name={alum.name}
            batch={alum.batch}
            program={alum.program}
            {...alum} // Pass other fields as props
          />
        ))}
      </div>

      {/* Pagination */}
      <nav className="pagination">
        <ul className="pagination-list">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`pagination-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)}>{index + 1}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AlumniDirectory;
