import React, { useState } from 'react';

const Departments = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const employees = [
    { name: "Asanda Ngwenya", department: "Full Stack Developer" },
    { name: "Atlehang Semela", department: "Backend Developer" },
    { name: "Palesa Mashabela", department: "IT Specialist" },
    { name: "Rolivhuwa Muzila", department: "Frontend Developer" },
    { name: "Xolani Vilakazi", department: "Networking" },
    // Add more employees here if needed
  ];

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Departments List</h1>
      <div style={styles.departmentList}>
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
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Department:</strong> {employee.department}</p>
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
  departmentList: {
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
};

export default Departments;
