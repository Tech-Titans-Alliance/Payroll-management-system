import React, { useState } from 'react';

const Payslips = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const payslips = [
    { name: "Asanda Ngwenya", payslipIssued: "April 2025" },
    { name: "Atlehang Semela", payslipIssued: "April 2025" },
    { name: "Palesa Mashabela", payslipIssued: "April 2025" },
    { name: "Rolivhuwa Muzila", payslipIssued: "April 2025" },
    { name: "Xolani Vilakazi", payslipIssued: "April 2025" },
    // Add more payslips as needed
  ];

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Payslips Issued</h1>
      <div style={styles.payslipsList}>
        {payslips.map((payslip, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(hoveredIndex === index ? styles.cardHover : {}),
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <p><strong>Name:</strong> {payslip.name}</p>
            <p><strong>Payslip Issued:</strong> {payslip.payslipIssued}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles to make it unique and engaging
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
    fontSize: '2.5em',
    textTransform: 'uppercase',
  },
  payslipsList: {
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
    textDecoration: 'none',
  },
  cardHover: {
    transform: 'scale(1.05)', // Slightly enlarges the card on hover
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
  },
};

export default Payslips;

