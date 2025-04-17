// src/pages/Payslip.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Payslip = () => {
  const location = useLocation();
  const payslip = location.state || {};

  return (
    <div className="container" style={{ display: 'flex', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      <Sidebar />
      <div className="main" style={{ flex: 1, padding: '40px' }}>
        <Header title="Payslip 🧾" />
        <div style={styles.card}>
          <h2 style={styles.heading}>{payslip.companyName || '💼 Company Name'}</h2>
          <p style={styles.subText}>{payslip.companyAddress || '📍 Company Address'}</p>

          <div style={styles.section}>
            <h3 style={styles.sectionHeading}>👤 Employee Information</h3>
            <div style={styles.grid}>
              <div><strong>Name:</strong> {payslip.employeeDetails}</div>
              <div><strong>Type:</strong> {payslip.employeeType}</div>
              <div><strong>Address:</strong> {payslip.address}</div>
              <div><strong>Contact:</strong> {payslip.contact}</div>
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionHeading}>💵 Earnings</h3>
            <div style={styles.grid}>
              <div><strong>Overtime Hours:</strong> {payslip.overtime}</div>
              <div><strong>Overtime Pay:</strong> R{payslip.overtimePay?.toFixed(2)}</div>
              <div><strong>Bonus:</strong> R{parseFloat(payslip.bonus || 0).toFixed(2)}</div>
              <div><strong>Allowance:</strong> R{parseFloat(payslip.allowance || 0).toFixed(2)}</div>
              <div><strong>Gross Salary:</strong> R{payslip.grossSalary?.toFixed(2)}</div>
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionHeading}>📉 Deductions</h3>
            <div style={styles.grid}>
              <div><strong>Loan:</strong> R{parseFloat(payslip.loan || 0).toFixed(2)}</div>
              <div><strong>Total Deductions:</strong> R{payslip.totalDeductions?.toFixed(2)}</div>
            </div>
          </div>

          <div style={styles.netPayBox}>
            <h3 style={{ color: '#2e7d32' }}>💰 Net Salary: R{payslip.netSalary?.toFixed(2)}</h3>
          </div>

          <div style={styles.signatureSection}>
            <div>
              <p><strong>📝 Employer Signature</strong></p>
              <p>(Signature)</p>
            </div>
            <div>
              <p><strong>🧾 Employee Signature</strong></p>
              <p>(Signature)</p>
            </div>
          </div>

          <p style={styles.footnote}>📌 This is a system-generated payslip. Please print or save a copy for your records.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: '900px',
    margin: 'auto',
    background: 'linear-gradient(to right, #ffffff, #fafafa)',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)'
  },
  heading: {
    fontSize: '26px',
    color: '#c62828',
    marginBottom: '5px'
  },
  subText: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '20px'
  },
  section: {
    marginTop: '25px'
  },
  sectionHeading: {
    fontSize: '18px',
    color: '#6a1b9a',
    borderBottom: '2px solid #eee',
    paddingBottom: '5px',
    marginBottom: '15px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '15px'
  },
  netPayBox: {
    backgroundColor: '#e8f5e9',
    border: '1px solid #c8e6c9',
    padding: '15px',
    marginTop: '30px',
    borderRadius: '10px',
    textAlign: 'center'
  },
  signatureSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '40px',
    paddingTop: '10px',
    borderTop: '1px dashed #ccc'
  },
  footnote: {
    fontStyle: 'italic',
    fontSize: '13px',
    color: '#888',
    textAlign: 'center',
    marginTop: '20px'
  }
};

export default Payslip;
