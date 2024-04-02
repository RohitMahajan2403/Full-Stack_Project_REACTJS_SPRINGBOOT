import React, { useState } from 'react';
import './AdminLoginPage.css'; 
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         throw new Error('Invalid username or password');
//       }

//       // If login successful, redirect or perform any other action
//       alert('Login successful!');
//     } catch (error) {
//       setErrorMessage(error.message);
//     }
//   };

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can implement logic for authentication
    if (username === 'admin' && password === 'adminpassword') {
      // Successful login, redirect or perform any other action
      alert('Welcome ADMIN');
      sessionStorage.setItem('isLoggedIn', true);
      navigate("/admin/adminhome/alllanguage")
    } else {
      setErrorMessage('YOU ARE NOT A ADMIN');
    }
  };

  return (
    <div className="admin-login-page">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-admin">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-admin">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" id='adminlogin'>Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AdminLoginPage;
