import React from 'react';

const MonthlyPay = () => {
  const employees = [
    {
      name: "Asanda Ngwenya",
      totalPay: 220000,
      breakdown: {
        basicSalary: 180000,
        bonuses: 25000,
        overtime: 17000,
      },
    },
    {
      name: "Atlehang Semela",
      totalPay: 240000,
      breakdown: {
        basicSalary: 200000,
        bonuses: 30000,
        overtime: 10000,
      },
    },
    {
      name: "Palesa Mashabela",
      totalPay: 210000,
      breakdown: {
        basicSalary: 170000,
        bonuses: 20000,
        overtime: 20000,
      },
    },
    {
      name: "Rolivhuwa Muzila",
      totalPay: 250000,
      breakdown: {
        basicSalary: 200000,
        bonuses: 30000,
        overtime: 20000,
      },
    },
    {
      name: "Xolani Vilakazi",
      totalPay: 230000,
      breakdown: {
        basicSalary: 190000,
        bonuses: 25000,
        overtime: 15000,
      },
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Monthly Pay Details</h1>
      {employees.map((employee, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.employeeName}>
            {index + 1}. {employee.name}
          </h3>
          <p style={styles.totalPay}>
            <strong>Total Monthly Pay:</strong> R{employee.totalPay.toLocaleString()}
          </p>
          <h4 style={styles.breakdownTitle}>Breakdown:</h4>
          <ul style={styles.breakdownList}>
            <li><strong>Basic Salary:</strong> R{employee.breakdown.basicSalary.toLocaleString()}</li>
            <li><strong>Bonuses:</strong> R{employee.breakdown.bonuses.toLocaleString()}</li>
            <li><strong>Overtime:</strong> R{employee.breakdown.overtime.toLocaleString()}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

// Styles to improve the design
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: 'crimson',
    marginBottom: '40px',
  },
  card: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  employeeName: {
    color: '#333',
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  totalPay: {
    fontSize: '1.1em',
    color: '#555',
  },
  breakdownTitle: {
    color: 'crimson',
    marginTop: '10px',
  },
  breakdownList: {
    paddingLeft: '20px',
    color: '#444',
  },
};

export default MonthlyPay;

