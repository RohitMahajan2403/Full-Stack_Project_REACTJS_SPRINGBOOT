import React, { useState } from 'react';
import './TutorRegistration.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import img from '../Shared/Images/background2.jpg'; 


export default function TutorRegistration() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        language: '',
        proficiencyLevel: '',
        password: '',
        profilePic: null,
        certificate: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (event) => {
        const { name, files } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files[0]
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('profilePic', formData.profilePic);
        formDataToSend.append('certificate', formData.certificate);
        formDataToSend.append('fullname', formData.fullname);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('language', formData.language);
        formDataToSend.append('proficiencyLevel', formData.proficiencyLevel);
        formDataToSend.append('password', formData.password);

        try {
            const response = await axios.post('http://localhost:8080/tutor/tutors', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Response:', response);

            if (response.status === 201) {
                console.log('User registered successfully:', response.data);
                alert("Registration successful!!!");
                // Reset form after successful registration
                setFormData({
                    fullname: '',
                    email: '',
                    language: '',
                    proficiencyLevel: '',
                    password: '',
                    profilePic: null,
                    certificate: null,
                });
            } else {
                console.error('Unexpected response:', response);
                alert("Registration Failed !!!");
            }
        } catch (error) {
            console.error('Error registering user:', error);
            console.log('Error response:', error.response); // Log error response for troubleshooting
        }
    };

    return (
        <div className="box1">
            <div className="box">
            <h1><strong>Fluent Fusion</strong></h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="profilePic" className="form-label"><b>Upload Profile Picture</b></label>
                        <input type="file" className="form-control" id="profilePic" name="profilePic" accept=".png, .jpg, .jpeg" onChange={handleFileChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="certificate" className="form-label"><b>Upload Certificate</b></label>
                        <input type="file" className="form-control" id="certificate" name="certificate" accept=".pdf" onChange={handleFileChange} />
                    </div>
                    <input type="text" className="form-control" id="fullname" name="fullname" placeholder="Please Enter Your Full Name" onChange={handleInputChange} value={formData.fullname} required />
                    <input type="email" className="form-control" id="email" name="email" placeholder="Please Enter Your Email" onChange={handleInputChange} value={formData.email} required />

                    <input type="text" className="form-control" id="language" name="language" placeholder="Please Enter Language You Know" onChange={handleInputChange} value={formData.language} />
                    <input type="text" className="form-control" id="proficiencyLevel" name="proficiencyLevel" placeholder="Please Enter Your Proficiency Level" onChange={handleInputChange} value={formData.proficiencyLevel} />
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password" onChange={handleInputChange} value={formData.password} required />
                    <button type="submit" className="btn btn-primary">Register</button>
                    <br />
                    Already on Fluent Fusion?<Link to='/login' className='backtologin'> {/* Use Link instead of anchor tag */}
                Login
              </Link>
                </form>
            </div>
        </div>
    );
}
