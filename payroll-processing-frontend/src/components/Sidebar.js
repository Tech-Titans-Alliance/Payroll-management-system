import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaSignOutAlt,
  FaTachometerAlt,
  FaFileInvoice,
  FaClipboard,
  FaChartBar,
} from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth tokens or session info
    localStorage.removeItem('authToken');
    sessionStorage.clear();

    // Redirect to login page ("/" based on your App.js)
    navigate('/');
  };

  return (
    <div className="sidebar">
      {/* Menu at the top */}
      <div className="menu">
        <h2>Menu</h2>
      </div>

      {/* Sidebar Links */}
      <div className="sidebar-links">
        <Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link>
        <Link to="/salary-form"><FaClipboard /> Salary Form</Link>
        <Link to="/payslip"><FaFileInvoice /> Payslip</Link>
        <Link to="/overview"><FaChartBar /> Overview</Link>
      </div>

      {/* Logout */}
      <div className="sidebar-footer">
        <button
          onClick={handleLogout}
          className="logout-link"
          style={{
            background: 'none',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
