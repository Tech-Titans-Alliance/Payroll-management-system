import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import html2pdf from 'html2pdf.js';

const Payslip = () => {
  const location = useLocation();
  const payslip = location.state || {};
  const payslipRef = useRef();

  const handleDownload = () => {
    const element = payslipRef.current;
    html2pdf().from(element).save('Payslip.pdf');
  };

  const sectionStyle = {
    border: '1px solid #999',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px',
    backgroundColor: '#fdfdfd',
  };

  const labelStyle = {
    fontWeight: 'bold',
    width: '200px',
    display: 'inline-block',
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Header title="Payslip" />

        <div 
          ref={payslipRef}
          style={{
            padding: '30px',
            border: '2px solid #444',
            borderRadius: '10px',
            backgroundColor: '#fff',
            maxWidth: '800px',
            margin: '30px auto'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2 style={{ margin: 0 }}>Tech Titans</h2>
            <p style={{ margin: 0 }}>19 Ameshoff, Braamfontein</p>
            <hr style={{ marginTop: '15px' }} />
          </div>

          <div style={sectionStyle}>
            <h3>Employee Information</h3>
            <p><span style={labelStyle}>Name:</span> {payslip.employeeDetails}</p>
            <p><span style={labelStyle}>Employee Type:</span> {payslip.employeeType}</p>
            <p><span style={labelStyle}>Address:</span> {payslip.address}</p>
            <p><span style={labelStyle}>Contact:</span> {payslip.contact}</p>
          </div>

          <div style={sectionStyle}>
            <h3>Salary Details</h3>
            <p><span style={labelStyle}>Overtime Hours:</span> {payslip.overtime}</p>
            <p><span style={labelStyle}>Overtime Pay:</span> R{payslip.overtimePay}</p>
            <p><span style={labelStyle}>Bonus:</span> R{payslip.bonus}</p>
            <p><span style={labelStyle}>Allowance:</span> R{payslip.allowance}</p>
            <p><span style={labelStyle}>Gross Salary:</span> R{payslip.grossSalary}</p>
          </div>

          <div style={sectionStyle}>
            <h3>Deductions</h3>
            <p><span style={labelStyle}>Loan:</span> R{payslip.loan}</p>
            <p><span style={labelStyle}>Total Deductions:</span> R{payslip.totalDeductions}</p>
          </div>

          <div style={{ ...sectionStyle, backgroundColor: '#f9f9f9' }}>
            <h3 style={{ color: '#333' }}>Net Salary</h3>
            <p><span style={labelStyle}>Net Pay:</span> <strong>R{payslip.netSalary}</strong></p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
            <div>
              <p><strong>Employer Signature</strong></p>
              <p>________________________</p>
            </div>
            <div>
              <p><strong>Employee Signature</strong></p>
              <p>________________________</p>
            </div>
          </div>

          <p style={{ fontStyle: 'italic', marginTop: '30px', textAlign: 'center' }}>
            @TechTitans 2025. All rights reserved.
          </p>
        </div>

        {/* ✅ Download Button */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <button 
            onClick={handleDownload} 
            style={{
              padding: '10px 20px',
              backgroundColor: 'crimson',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Download Payslip as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payslip;
