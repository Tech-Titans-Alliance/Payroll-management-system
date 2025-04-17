// src/pages/Employees.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Employees = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const employees = [
    {
      name: "Asanda Ngwenya",
      address: "123 Main Street",
      contact: "071 234 5678",
      salary: "R25,000",
      startDate: "2022-01-15",
    },
    {
      name: "Atlehang Semela",
      address: "456 High Road",
      contact: "072 345 6789",
      salary: "R28,500",
      startDate: "2021-07-01",
    },
    {
      name: "Palesa Mashabela",
      address: "789 Sunset Blvd",
      contact: "073 456 7890",
      salary: "R30,000",
      startDate: "2023-03-10",
    },
    {
      name: "Rolivhuwa Muzila",
      address: "21 Victory Avenue",
      contact: "074 567 8901",
      salary: "R32,000",
      startDate: "2020-11-25",
    },
    {
      name: "Xolani Vilakazi",
      address: "10 Riverbank",
      contact: "075 678 9012",
      salary: "R29,000",
      startDate: "2019-09-30",
    },
  ];

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (employee) => {
    navigate('/history', { state: { employee } });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Employees List</h1>
      <input
        type="text"
        placeholder="Search employee by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />
      <div style={styles.employeeList}>
        {filteredEmployees.map((employee, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(hoveredIndex === index ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleCardClick(employee)}
          >
            <h3 style={styles.employeeName}>{index + 1}. {employee.name}</h3>
            <p style={styles.department}>Department: Full Stack Developer</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    color: 'crimson',
    marginBottom: '20px',
    fontSize: '2em',
    textTransform: 'uppercase',
  },
  searchInput: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto 30px',
    display: 'block',
    padding: '10px',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  employeeList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  employeeName: {
    color: '#333',
    fontSize: '1.3em',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  department: {
    fontSize: '1em',
    color: '#777',
  },
  modal: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    width: '400px',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px', right: '15px',
    fontSize: '1.5em',
    cursor: 'pointer',
  },
  dateInput: {
    padding: '8px',
    width: '100%',
    fontSize: '1em',
    marginTop: '5px',
  },
};

// Keep your styles here as you already have them...

export default Employees;

