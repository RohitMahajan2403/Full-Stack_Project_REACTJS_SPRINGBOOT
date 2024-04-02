import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import AdminNavBar from './AdminNavBar';

const AllFeedBackList = () => {

    const [feedback, setFeedback] = useState([]);
    
    useEffect(() => {
        fetchFeedback();  
    }, []);

    const fetchFeedback = async () => {
        try {
          const response = await axios.get('http://localhost:8080/adminhome/feedback');
          setFeedback(response.data);
        } catch (error) {
          console.error('Error fetching feedback:', error);
        }
      };
    return (
        <div>
        <AdminNavBar/>
            <section id="feedbacks">
        <h2>Feedback</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User</th>
              <th>Rating</th>
              <th>Feedback</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map(feedbackItem => (
              <tr key={feedbackItem.id}>
                <td>{feedbackItem.name}</td>
                <td>{feedbackItem.rating}</td>
                <td>{feedbackItem.message}</td>
                <td>{feedbackItem.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>

        </div>
    )
}

export default AllFeedBackList
