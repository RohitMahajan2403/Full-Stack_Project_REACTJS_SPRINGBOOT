import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const AdminNavBar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Implement logout functionality here
        // For example, redirect the user to the logout endpoint or clear session/local storage
        navigate("/admin");
    };
    return (
        <nav style={{ backgroundColor: '#333', padding: '10px' }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <li>
                    <Link to="/admin/adminhome/alllanguage" style={{ color: 'white', textDecoration: 'none' }}>Languages</Link>
                </li>
                <li>
                    <Link to="/admin/adminhome/allstudents" style={{ color: 'white', textDecoration: 'none' }}>Students</Link>
                </li>
                <li>
                    <Link to="/admin/adminhome/alltutors" style={{ color: 'white', textDecoration: 'none' }}>Tutors</Link>
                </li>
                <li>
                    <Link to="/admin/adminhome/allfeedbacks" style={{ color: 'white', textDecoration: 'none' }}>Feedbacks</Link>
                </li>
                <li>
                    <button onClick={handleLogout} style={{ color: 'white', background: 'red', border: 'none', cursor: 'pointer' }}>Logout</button>
                </li>
            </ul>
            <style jsx>{`
                @media (max-width: 600px) {
                    ul {
                        flex-direction: column;
                        align-items: stretch;
                    }
                    li {
                        margin-bottom: 10px;
                    }
                }
            `}</style>
        </nav>
    )
}

export default AdminNavBar
