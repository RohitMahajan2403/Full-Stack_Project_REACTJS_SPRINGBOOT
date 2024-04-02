import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SettingStyle.css'


const TutSettings = () => {
    // const [darkMode, setDarkMode] = useState(false);
    // const [notifications, setNotifications] = useState(true);
    // const [showAccountSwitch, setShowAccountSwitch] = useState(false);
    // const [selectedAccount, setSelectedAccount] = useState(null);
    const [showPasswordChange, setShowPasswordChange] = useState(false);
    const [showEmailOptions, setShowEmailOptions] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [passwordChangeMessage, setPasswordChangeMessage] = useState('');
    
  
    const togglePasswordChange = () => {
      setShowPasswordChange(!showPasswordChange);
      
      setShowEmailOptions(false);
    };
  
    const toggleEmailOptions = () => {
      setShowEmailOptions(!showEmailOptions);
     
      setShowPasswordChange(false);
    };
  
    const handlePasswordChange = () => {
      if (newPassword !== confirmNewPassword) {
        setPasswordChangeMessage("Passwords don't match");
      } else {
        // Perform password change logic here
        // For example, you can send an API request to update the password
        setPasswordChangeMessage('Password changed successfully');
        // Reset the input fields after successful password change
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
      }
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear any user authentication data, such as tokens or session information
        // For example, you can clear localStorage
        localStorage.removeItem('token');
        // Redirect the user to the login page
        navigate('/');
      };
  
    return (
      <div className='set'>
        <h2>Settings</h2>

        <div className='setacc'>
            <div>
              <label>Change Account Password :</label>
              <button onClick={togglePasswordChange}>Password Change</button>
              {showPasswordChange && (
                  <div>
                      <input
                          type="password"
                          placeholder="Current Password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                      <input
                          type="password"
                          placeholder="New Password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <input
                          type="password"
                          placeholder="Confirm New Password"
                          value={confirmNewPassword}
                          onChange={(e) => setConfirmNewPassword(e.target.value)}
                      />
                      <button onClick={handlePasswordChange}>Change Password</button>
                        {passwordChangeMessage && <p>{passwordChangeMessage}</p>}
                  </div>
              )}
            </div>

            <div className='setemail'>
                <label>Change Email :</label>
                <button onClick={toggleEmailOptions}>Change</button>
                {showEmailOptions && <div>Email Options go here</div>}
            </div>

            <div className='logout'>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
      </div>
    );
}

export default TutSettings
