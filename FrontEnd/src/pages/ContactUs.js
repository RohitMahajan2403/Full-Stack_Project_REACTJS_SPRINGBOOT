import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        message: '',
        rating: 0, // Added rating state
        buttonText: 'Submit',
    });

    const { name, email, message, rating, buttonText } = info;

    const handleChange = (field) => (event) => {
        setInfo({ ...info, [field]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInfo({ ...info, buttonText: '...sending' });

        axios({
            method: 'POST',
            url: 'http://localhost:8080/feedback',
            data: { name, email, message, rating },
        })
            .then((res) => {
                if (res.data.success)
                    toast('🦄 Thanks for your feedback!', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                setInfo({
                    ...info,
                    name: '',
                    email: '',
                    message: '',
                    rating: 0,
                    buttonText: 'Submitted', // Fixed typo in buttonText
                });
            })
            .catch((err) => {
                if (err.response.data.error) toast.error('Failed, try again!');
            });
    };

    return (
        <div className='form'>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
            />
            <label>
                <h2>Feedback</h2>
            </label>
            <ToastContainer />

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={handleChange('name')}
                        type='name'
                        placeholder='Enter your name'
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={handleChange('email')}
                        type='email'
                        placeholder='Enter email'
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        as='select'
                        value={rating}
                        onChange={handleChange('rating')}
                        required
                    >
                        <option value="0">Select Rating</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        onChange={handleChange('message')}
                        as='textarea'
                        value={message}
                        rows={3}
                        required
                    />
                </Form.Group>

                <Button type='submit'>{buttonText}</Button>
            </Form>
        </div>
    );
}

export default ContactUs;
