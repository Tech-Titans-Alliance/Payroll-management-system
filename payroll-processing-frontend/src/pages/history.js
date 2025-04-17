// src/pages/history.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const History = () => {
  const { state } = useLocation();
  const employee = state?.employee;
  const [selectedDate, setSelectedDate] = useState(null);

  const payslipHistory = Array.from({ length: 10 }).map((_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    return {
      date: date.toISOString().split('T')[0],
      salary: employee?.salary,
      deductions: "R2,000",
      netPay: "R23,000",
    };
  });

  const selectedPayslip = payslipHistory.find(p => p.date === selectedDate);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📘 {employee?.name}'s Employment History</h2>
        <p><strong>🏠 Address:</strong> {employee?.address}</p>
        <p><strong>📞 Contact:</strong> {employee?.contact}</p>
        <p><strong>📅 Start Date:</strong> {employee?.startDate}</p>
        <p><strong>💼 Salary:</strong> {employee?.salary}</p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.subtitle}>🧾 Payslip History</h3>
        <ul style={styles.payslipList}>
          {payslipHistory.map((slip, index) => (
            <li
              key={index}
              onClick={() => setSelectedDate(slip.date)}
              style={{
                ...styles.payslipItem,
                backgroundColor: slip.date === selectedDate ? '#fce4ec' : '#f7f7f7',
              }}
            >
              📅 {slip.date}
            </li>
          ))}
        </ul>
      </div>

      {selectedPayslip && (
        <div style={styles.payslipCard}>
          <h4 style={styles.subtitle}>🧾 Payslip for {selectedPayslip.date}</h4>
          <p><strong>💰 Salary:</strong> {selectedPayslip.salary}</p>
          <p><strong>➖ Deductions:</strong> {selectedPayslip.deductions}</p>
          <p><strong>✅ Net Pay:</strong> {selectedPayslip.netPay}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '20px',
    marginBottom: '30px',
  },
  title: {
    color: '#333',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#c2185b',
    marginBottom: '15px',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '20px',
    marginBottom: '30px',
  },
  payslipList: {
    listStyleType: 'none',
    padding: 0,
  },
  payslipItem: {
    padding: '10px 15px',
    borderRadius: '8px',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    border: '1px solid #e0e0e0',
  },
  payslipCard: {
    backgroundColor: '#fff3f6',
    borderRadius: '12px',
    border: '1px solid #f8bbd0',
    padding: '20px',
  },
};

export default History;
