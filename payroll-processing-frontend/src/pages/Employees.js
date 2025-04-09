import React, { useState } from 'react';

const Employees = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const employees = [
    "Asanda Ngwenya",
    "Atlehang Semela",
    "Palesa Mashabela",
    "Rolivhuwa Muzila",
    "Xolani Vilakazi",
    // Add other employees here
  ];

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Employees List</h1>
      <div style={styles.employeeList}>
        {employees.map((employee, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(hoveredIndex === index ? styles.cardHover : {}),
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <h3 style={styles.employeeName}>{index + 1}. {employee}</h3>
            <p style={styles.department}>Department: Full Stack Developer</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles to make it more interesting
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
    marginBottom: '40px',
    fontSize: '2em',
    textTransform: 'uppercase',
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
    transform: 'scale(1.05)', // Slightly enlarges the card
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
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
};

export default Employees;


