import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBRadio,
  MDBValidationItem,
  MDBValidation,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,

} from 'mdb-react-ui-kit';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select, Checkbox, OutlinedInput, Grid, ListItemText, Button, TextField } from '@mui/material';
import axios from 'axios';
import { text } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpFromWaterPump } from '@fortawesome/free-solid-svg-icons';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;


function Login() {
  const [isRegistering, setIsRegistering] = useState(false);


  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className='bground'>
      <MDBContainer className="my-5 gradient-form">
        <MDBRow className="row justify-content-center">
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column align-items-center">
              <div className="form-container transparent-bg">
                <LoginForm handleToggleForm={handleToggleForm} isRegistering={isRegistering} />
                <RegisterForm handleToggleForm={handleToggleForm} isRegistering={isRegistering} />
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

//Login Form for student and tutor
function LoginForm({ handleToggleForm, isRegistering }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', password: '', role: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      role: value
    }));
  };


  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', formData);
      console.log(response.data);

      // Check for various response status codes
      if (response.status === 200) {
        const { role, id } = response.data;
        if (role === 'student') {
          sessionStorage.setItem('Studentid', id);
          alert("You are logged in as a Student");
          navigate('/student');
        } else if (role === 'tutor') {
          sessionStorage.setItem('userId', id);
          alert("You are logged in as a Tutor");
          navigate('/tutor');
        } else {

          throw new Error('Invalid role received from the server');
        }
      } else {

        throw new Error('Invalid response received from the server');
      }
    } catch (error) {

      console.error('Error during login:', error);

      alert('An error occurred during login. Please try again later.');
    }

  };

  return (
    <MDBValidation isValidated>
      <div className={`login-form ${isRegistering ? 'fade-out' : 'fade-in'}`}>
        <div className="text-center mb-3">
          <p>Sign in</p>
        </div>
        <MDBInput
          wrapperClass="mb-4"
          label="Name"
          id="name"
          name='name'
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="password"
          name='password'
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        <MDBRadio
          label='Student'
          required
          id='Student'
          name='role'
          value='student'
          checked={formData.role === 'student'}
          onChange={handleRadioChange}
        />

        <MDBRadio
          label='Tutor'
          required
          id='Tutor'
          name='role'
          value='tutor'
          checked={formData.role === 'tutor'}
          onChange={handleRadioChange}
        />

        <div className="text-center pt-1 mb-5 pb-1">
          <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleSignIn}>Sign in</MDBBtn>
          <a className="text-muted" href="#!"><strong style={{ color: 'black', fontWeight: 'bold' }}>
            Forgot password?
          </strong>
          </a>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
          <MDBBtn onClick={handleToggleForm} outline color="danger">
            Register
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
}





// RegisterForm for Student

function RegisterForm({ handleToggleForm, isRegistering }) {
  const [showModal, setShowModal] = useState(false);
  const [toggleModal, setToggleModal] = useState(true);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    contact: '',
    role: '',
    password: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend
      const response = await axios.post('http://localhost:8080/Student', formData);
      console.log('User registered successfully:', response.data);
      alert("Registration Successful!!!");
      // Reset form after successful registration
      setFormData({
        fullname: '',
        email: '',
        contact: '',
        role: '',
        password: '',
      });
    } catch (error) {
      console.error('Error registering user:', error);
      alert("Registration Failed!!!");
    }
  };

  return (
    <div>
      <div className={`register-form ${isRegistering ? 'fade-in' : 'fade-out'}`}>
        <h4>FluentFusion</h4>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="fullname">Full Name</InputLabel>
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" type="text" name="fullname" inputProps={{name:"fullname"}} value={formData.fullname} onChange={handleFormChange} required  /> */}
                <OutlinedInput id="fullname" type="text" name="fullname" inputProps={{ name: "fullname" }} value={formData.fullname} onChange={handleFormChange} required />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput id="email" type="email" name="email" inputProps={{ name: "email" }} value={formData.email} onChange={handleFormChange} required />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="contact">Contact</InputLabel>
                <OutlinedInput id="contact" type="text" name="contact" inputProps={{ name: "contact" }} value={formData.contact} onChange={handleFormChange} pattern="[0-9]+" maxLength="11" />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="role">Role</InputLabel>
                <OutlinedInput id="role" type="text" name="role" inputProps={{ name: "role" }} value={formData.role} onChange={handleFormChange} placeholder="Student,Tutor" required />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth className="mb-3">
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput id="password" type="password" name="password" inputProps={{ name: "password" }} value={formData.password} onChange={handleFormChange} required />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <MDBBtn type="submit" variant="contained" className="mb-4 w-100 gradient-custom-2">Agree and Sign up</MDBBtn>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <MDBBtn onClick={handleToggleForm} variant="outlined" color="danger">Back to Login</MDBBtn>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
      <MDBModal open={showModal} setOpen={setShowModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Terms and Conditions</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleModal}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div>
                <h1>FluentFusion</h1>
              </div>
              <h1>Terms and Conditions</h1>
              <p>
                Welcome to our language learning platform! Before you begin using our
                services, please read these Terms and Conditions carefully. By
                accessing or using our platform, you agree to be bound by these Terms
                and Conditions.
              </p>
              <ol>
                <li>
                  <strong>Acceptance of Terms:</strong> By accessing or using our
                  platform, you agree to comply with and be bound by these Terms and
                  Conditions, which govern your access to and use of the platform. If
                  you do not agree with any part of these Terms and Conditions, you
                  must not access or use our platform.
                </li>
                <li>
                  <strong>User Accounts:</strong> In order to access certain features
                  of our platform, you may need to create a user account. You are
                  responsible for maintaining the confidentiality of your account
                  credentials and for all activities that occur under your account.
                  You must immediately notify us of any unauthorized use of your
                  account or any other breach of security.
                </li>
                <li>
                  <strong>Payment and Subscriptions:</strong> Some features of our
                  platform may require payment or subscription. By subscribing to our
                  services, you agree to pay all fees and charges associated with your
                  subscription in accordance with the pricing and payment terms
                  disclosed to you at the time of subscription.
                </li>
                <li>
                  <strong>Content:</strong> Our platform may contain user-generated
                  content, including but not limited to text, images, videos, and
                  audio recordings. By posting or submitting content to our platform,
                  you grant us a non-exclusive, royalty-free, worldwide, perpetual,
                  and irrevocable license to use, reproduce, modify, adapt, publish,
                  translate, distribute, and display such content.
                </li>
                <li>
                  <strong>Code of Conduct:</strong> You agree to use our platform in a
                  manner consistent with all applicable laws and regulations and in
                  accordance with these Terms and Conditions. You may not use our
                  platform to engage in any illegal or unauthorized activity,
                  including but not limited to copyright infringement, defamation, or
                  harassment.
                </li>
                <li>
                  <strong>Intellectual Property:</strong> All content and materials
                  available on our platform, including but not limited to text,
                  graphics, logos, icons, images, audio clips, and software, are the
                  property of our company or our licensors and are protected by
                  copyright, trademark, and other intellectual property laws.
                </li>
                <li>
                  <strong>Privacy:</strong> Your privacy is important to us. Please
                  review our Privacy Policy, which explains how we collect, use, and
                  disclose information about you when you access or use our platform.
                </li>
                <li>
                  <strong>Disclaimer of Warranties:</strong> Our platform is provided
                  on an "as is" and "as available" basis, without any warranties of
                  any kind, express or implied. We do not warrant that our platform
                  will be uninterrupted or error-free, or that any defects will be
                  corrected.
                </li>
                <li>
                  <strong>Limitation of Liability:</strong> To the fullest extent
                  permitted by applicable law, we shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages,
                  or any loss of profits or revenues, whether incurred directly or
                  indirectly, or any loss of data, use, goodwill, or other intangible
                  losses, arising out of or in connection with your access to or use
                  of our platform.
                </li>
                <li>
                  <strong>Governing Law and Jurisdiction:</strong> These Terms and
                  Conditions shall be governed by and construed in accordance with the
                  laws of [Your Jurisdiction], without regard to its conflict of law
                  principles. Any dispute arising out of or in connection with these
                  Terms and Conditions shall be subject to the exclusive jurisdiction
                  of the courts of [Your Jurisdiction].
                </li>
                <li>
                  <strong>Changes to Terms and Conditions:</strong> We reserve the
                  right to modify or update these Terms and Conditions at any time
                  without prior notice. Your continued use of our platform after any
                  such changes constitutes your acceptance of the new Terms and
                  Conditions.
                </li>
              </ol>
              <p>
                If you have any questions or concerns about these Terms and
                Conditions, please contact us at [Contact Information]. Thank you for
                using our language learning platform!
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleModal}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

    </div>
  );
}

export default Login;
