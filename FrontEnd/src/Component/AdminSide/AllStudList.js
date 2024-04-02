import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import AdminNavBar from './AdminNavBar';

const AllStudList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch students
        axios.get('http://localhost:8080/adminhome/students')
          .then(response => setStudents(response.data))
          .catch(error => console.error('Error fetching students:', error));

        }, []);

    return (
        <div>
        <AdminNavBar/>
            <section id="students">
                <h2>Students</h2>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Active Language</th>
                    <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.fullname}</td>
                        <td>{student.email}</td>
                        <td>{student.activeLanguage}</td>
                        <td>{student.contact}</td>
                    </tr>
                    ))}
                </tbody>
                </Table>
            </section>
        </div>
    )
}

export default AllStudList
