import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import AdminNavBar from './AdminNavBar'

const AdminHome = () => {
    const [languages, setStudents] = useState([]);


    useEffect(() => {
        // Fetch language
        axios.get('http://localhost:8080/adminhome/language')
          .then(response => setStudents(response.data))
          .catch(error => console.error('Error fetching languages:', error));

    }, []);

        
      
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get('name');

        const newLanguage = {
            name: name
        };

        axios.post('http://localhost:8080/api/languages', newLanguage)
            .then(response => {
                console.log('Language saved successfully:', response.data);
              

                event.target.reset(); // Reset the form after successful submission
            })
            .catch(error => {
                console.error('Error saving language:', error);
            });
    };

    return (
        <div>
            <AdminNavBar/>
            <br/>

            <form onSubmit={handleSubmit}>
                <h2 style={{ fontStyle: 'bold' }}>Add Language:</h2>
                <div>
                    <input type='text' id='name' name='name'  style={{ width: '500px' }} />
                </div>
                <button type="submit">ADD Language</button>
            </form>

            <section id="students">
                <h1>Languages</h1>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Language Name</th>
                    </tr>
                </thead>
                <tbody>
                    {languages.map(language => (
                    <tr key={language.languageId}>
                        <td>{language.languageId}</td>
                        <td>{language.name}</td>
                    </tr>
                    ))}
                </tbody>
                </Table>
            </section>



        </div>
    )
}

export default AdminHome
