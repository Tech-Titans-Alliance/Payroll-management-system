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
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.main}>
        <Header title="🚀 Payroll Dashboard" />
        <p style={styles.welcome}>Welcome back, Shawty! Let’s manage that 💼 payroll like a boss.</p>

        <div style={styles.dashboardCards}>
          <Link to="/employees" style={styles.cardLink}>
            <div style={{ ...styles.card, background: 'linear-gradient(to right, #e0f7fa, #b2ebf2)' }}>
              <h3 style={styles.heading}>👥 Total Employees</h3>
              <p style={styles.value}>{dashboardData.totalEmployees}</p>
              <p style={styles.subText}>View & manage all employees</p>
            </div>
          </Link>

          <Link to="/monthly-pay" style={styles.cardLink}>
            <div style={{ ...styles.card, background: 'linear-gradient(to right, #fff3e0, #ffe0b2)' }}>
              <h3 style={styles.heading}>💰 Monthly Pay</h3>
              <p style={styles.value}>R{dashboardData.monthlyPay.toLocaleString()}</p>
              <p style={styles.subText}>Total disbursed this month</p>
            </div>
          </Link>

          <Link to="/overview" style={styles.cardLink}>
            <div style={{ ...styles.card, background: 'linear-gradient(to right, #ede7f6, #d1c4e9)' }}>
              <h3 style={styles.heading}>📊 System Overview</h3>
              <p style={styles.value}>📈 Real-time insights</p>
              <p style={styles.subText}>Track performance metrics</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
    padding: '40px',
  },
  welcome: {
    fontSize: '18px',
    color: '#444',
    marginBottom: '30px',
  },
  dashboardCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  card: {
    padding: '25px',
    borderRadius: '14px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.07)',
    color: '#333',
    textAlign: 'center',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
  },
  cardLink: {
    textDecoration: 'none',
  },
  heading: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#212121',
  },
  value: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  subText: {
    fontSize: '14px',
    color: '#666',
    marginTop: '5px',
  },
};

export default Dashboard;
