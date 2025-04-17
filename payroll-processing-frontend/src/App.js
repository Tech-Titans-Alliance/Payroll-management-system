import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SalaryForm from './pages/SalaryForm';
import Payslip from './pages/Payslip';
import Overview from './pages/Overview';
import Employees from './pages/Employees';
import Departments from './pages/Departments';
import Payroll from './pages/Payroll';
import Payslips from './pages/Payslips';
import MonthlyPay from './pages/MonthlyPay';
import History from './pages/history'; // 🔥 Import new History page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/salary-form" element={<SalaryForm />} />
        <Route path="/payslip" element={<Payslip />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/payslips" element={<Payslips />} />
        <Route path="/monthly-pay" element={<MonthlyPay />} />
        <Route path="/history" element={<History />} /> {/* 👈 New route for employee history */}
      </Routes>
    </Router>
  );
}

export default App;



