// src/pages/history.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const History = () => {
  const { state } = useLocation();
  const employee = state?.employee;
  const [selectedDate, setSelectedDate] = useState(null);

  // Dummy payslip data
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
    <div style={{ padding: '20px' }}>
      <h2>{employee?.name}'s Employment History</h2>
      <p><strong>Address:</strong> {employee?.address}</p>
      <p><strong>Contact:</strong> {employee?.contact}</p>
      <p><strong>Start Date:</strong> {employee?.startDate}</p>
      <p><strong>Salary:</strong> {employee?.salary}</p>

      <hr />

      <h3>Payslip History</h3>
      <ul>
        {payslipHistory.map((slip, index) => (
          <li
            key={index}
            onClick={() => setSelectedDate(slip.date)}
            style={{ cursor: 'pointer', marginBottom: '5px', color: 'blue' }}
          >
            {slip.date}
          </li>
        ))}
      </ul>

      {selectedPayslip && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <h4>Payslip for {selectedPayslip.date}</h4>
          <p><strong>Salary:</strong> {selectedPayslip.salary}</p>
          <p><strong>Deductions:</strong> {selectedPayslip.deductions}</p>
          <p><strong>Net Pay:</strong> {selectedPayslip.netPay}</p>
        </div>
      )}
    </div>
  );
};

export default History;
