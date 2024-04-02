import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Settings = () => {
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [student, setStudent] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordChange = () => {
    setShowPasswordChange(!showPasswordChange);
  };



  const handleChangePassword = () => {
    const { newPassword, confirmPassword } = student;
  
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
  
    if (!newPassword || !confirmPassword) {
      setMessage('Please enter both a new password and a confirmation password.');
      return;
    }

    if(newPassword.length < 8) {
      setMessage('Password must be at least 8 characters long.');
      return;
    }
   
  
    axios.put(`http://localhost:8080/Student/changepassword/${userId}`, {userId, newPassword })
      .then(response => {
        setMessage(response.data);
        setStudent({
          newPassword: '',
          confirmPassword: ''
        });
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.message) {
          setMessage('Error: ' + error.response.data.message);
        } else if (error.request) {
          setMessage('Error: No response received from the server.');
        } else {
          setMessage('Error: An unexpected error occurred.');
        }
      });
  };
  

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login', { replace: true });
  };

  useEffect(() => {
    // Fetch user ID from session
    const userIdFromSession = sessionStorage.getItem('Studentid');
    setUserId(userIdFromSession);
  }, []);

  return (
    <div className='set'>
      <h2>Settings</h2>
      <div>
        <label>Change Account Password :</label>
        <button onClick={togglePasswordChange}>Password Change</button>
        {showPasswordChange && (
          <div>
            <input
              type="password"
              placeholder="New Password"
              value={student.newPassword}
              onChange={(e) => setStudent({ ...student, newPassword: e.target.value })}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={student.confirmPassword}
              onChange={(e) => setStudent({ ...student, confirmPassword: e.target.value })}
            />
            <button onClick={handleChangePassword}>Change Password</button>
            {message && <p>{message}</p>}
          </div>
        )}
      </div>
      <div className='logout'>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Settings;
