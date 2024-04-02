import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import AdminNavBar from './AdminNavBar';

const AllTutList = () => {

    const [tutors, setTutors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/adminhome/tutors')
            .then(response => setTutors(response.data))
            .catch(error => console.error('Error fetching tutors:', error));

    }, []);

    return (
        <div>
            <AdminNavBar />
            <section id="tutors">
                <h2>Tutors</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Language</th>
                            <th>Proficiency Level</th>
                            <th>Photo</th>
                            <th>Certificate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tutors.map(tutor => (
                            <tr key={tutor.tutorId}>
                                <td>{tutor.tutorId}</td>
                                <td>{tutor.fullname}</td>
                                <td>{tutor.email}</td>
                                <td>{tutor.language}</td>
                                <td>{tutor.proficiencyLevel}</td>
                                <td><img src={`data:image/jpeg;base64,${tutor.profilePic}`} alt={tutor.fullname} fluid style={{ width: '150px', zIndex: '1' }}/></td>
                                <td><a href={tutor.pdf} target="_blank" rel="noopener noreferrer">Download Certificate</a></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </section>
        </div>
    );
}

export default AllTutList;
