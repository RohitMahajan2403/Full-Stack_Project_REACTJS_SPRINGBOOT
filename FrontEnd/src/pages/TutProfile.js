import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

const TutProfile = () => {

    const [tutorData, setTutorData] = useState(null);

    const userId=sessionStorage.getItem('userId');
    
    const fetchTutorData = async () => {
        try {
            const userId = sessionStorage.getItem('userId');
    
            if (userId) {
                const response = await axios.get(`http://localhost:8080/tutor/details/${userId}`);
                setTutorData(response.data);
            } else {
                console.error('User ID not found in sessionStorage');
            }
        } catch (error) {
            console.error('Error fetching tutor data:', error);
        }
    };
    
    fetchTutorData();

    return (
        <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol lg="9" xl="7">
                    <MDBCard>
                       <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#F3B95F', height: '200px' }}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                    
                                    {tutorData && <MDBCardImage src={`data:image/jpeg;base64,${tutorData.profilePic}`} alt="Profile Picture" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />}
                                    <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                                        Edit
                                    </MDBBtn>
                                </div>
                           
                        <div className="ms-3" style={{ marginTop: '130px' }}>
                        <MDBTypography tag="h5">{tutorData ? tutorData.fullname : 'Name'}</MDBTypography>
                        </div>
                    </div>
                    <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                        <div className="d-flex justify-content-end text-center py-1">
                        <div>
                            <MDBCardText className="mb-1 h5">253</MDBCardText>
                            <MDBCardText className="small text-muted mb-0">No. of Active Students</MDBCardText>
                        </div>
                        <div className="px-3">
                            <MDBCardText className="mb-1 h5">French</MDBCardText>
                            <MDBCardText className="small text-muted mb-0">Language Tutor</MDBCardText>
                        </div>
                        </div>
                    </div>
                    <MDBCardBody className="text-black p-4">
                        <div className="mb-5">
                        <p className="lead fw-normal mb-1">About</p>
                        <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                            <MDBCardText className="font-italic mb-1">Email: {tutorData ? tutorData.email : 'Email'}</MDBCardText>
                            <MDBCardText className="font-italic mb-0">Language: {tutorData ? tutorData.language : 'Language'}</MDBCardText>
                            <MDBCardText className='font-italic mb-0'>Proficiency Level: {tutorData ? tutorData.proficiencyLevel : 'Proficiency Level'}</MDBCardText>
                            <MDBCardText className="font-italic mb-0"> Tutor Id:  {userId}</MDBCardText>
                            
                        </div>
                        </div>
                       

                        <MDBCardText className="lead fw-normal mb-0">Live Session</MDBCardText>
                        <p><strong>Link </strong> - Live Session Link</p>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
    )
}

export default TutProfile
