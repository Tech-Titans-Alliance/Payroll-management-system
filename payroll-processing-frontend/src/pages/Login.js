import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        width: '700px',
        height: '400px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: '#fff'
      }}>
        {/* Left Side - Sign In */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '30px'
        }}>
          <h2>Sign In</h2>
          <input type="text" placeholder="Username" style={styles.input} />
          <input type="password" placeholder="Password" style={{ ...styles.input, marginTop: '10px' }} />
          <button onClick={handleLogin} style={{ ...styles.button, marginTop: '20px' }}>
            Sign In
          </button>
          <div style={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '250px',
            fontSize: '14px'
          }}>
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>
        </div>

        {/* Right Side - Welcome */}
        <div style={{
          flex: 1,
          backgroundColor: '#f06273',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h2>Welcome to login</h2>
          <p>Don't have an account?</p>
          <button style={styles.signUpButton}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  input: {
    width: '250px',
    padding: '10px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    outline: 'none'
  },
  button: {
    width: '250px',
    padding: '10px',
    backgroundColor: '#f06273',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  signUpButton: {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    border: '2px solid #fff',
    borderRadius: '20px',
    color: '#fff',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default Login;
