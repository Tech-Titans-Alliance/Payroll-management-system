import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {
  const dashboardData = {
    totalEmployees: 5,
    monthlyPay: 250000,
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Header title="Payroll Dashboard" />
        <p>Welcome to the Payroll Processing System.</p>

        {/* Dashboard Cards Container */}
        <div style={styles.dashboardCards}>
          {/* Left Column */}
          <div style={styles.leftColumn}>
            <Link to="/employees" style={styles.cardLink}>
              <div style={styles.card}>
                <h3 style={styles.heading}>👥 Total Employees</h3>
                <p>{dashboardData.totalEmployees}</p>
              </div>
            </Link>
          </div>

          {/* Right Column */}
          <div style={styles.rightColumn}>
            <Link to="/monthly-pay" style={styles.cardLink}>
              <div style={styles.card}>
                <h3 style={styles.heading}>💰 Monthly Pay</h3>
                <p>R{dashboardData.monthlyPay.toLocaleString()}</p>
              </div>
            </Link>
          </div>

          {/* Centered Overview Card */}
          <div style={styles.centeredCard}>
            <Link to="/overview" style={styles.cardLink}>
              <div style={styles.card}>
                <h3 style={styles.heading}>📊 Overview</h3>
                <p>View overall system performance and details.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  dashboardCards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '20px',
    flexWrap: 'wrap',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    width: '30%',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    width: '30%',
  },
  centeredCard: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    minHeight: '170px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  cardLink: {
    textDecoration: 'none',
  },
  heading: {
    color: 'crimson',
  },
};

export default Dashboard;
