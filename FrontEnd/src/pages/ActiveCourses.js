import React, { useState } from 'react';

function ActiveCourses() {
    const [userId, setUserId] = useState('');
    const [activeCourses, setActiveCourses] = useState([]);
    const [error, setError] = useState(null);

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    const getActiveCourses = () => {
        fetch(`/courses/active?userId=${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setActiveCourses(data);
                setError(null);
            })
            .catch(error => {
                setError('There was a problem with the fetch operation: ' + error.message);
            });
    };

    return (
        <div>
            <h1>Active Courses for User</h1>
            <label htmlFor="userId">User ID:</label>
            <input type="text" id="userId" value={userId} onChange={handleUserIdChange} />
            <button onClick={getActiveCourses}>Get Active Courses</button>
            {error && <p>{error}</p>}
            {activeCourses.length > 0 ?
                <ul>
                    {activeCourses.map(course => (
                        <li key={course.id}>{course.name}</li>
                    ))}
                </ul>
                :
                <p>No active courses found for this user.</p>
            }
        </div>
    );
}

export default ActiveCourses;
