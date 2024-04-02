import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const vision = styled.div`
.vision-card {
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
}

.vision-card-content {
    text-align: center;
}

.vision-card-title {
    color: #333;
    font-family: Arial, sans-serif;
    margin-bottom: 20px;
}

.vision-card-text {
    font-size: 16px;
    line-height: 1.6;
    color: #666;
    font-family: Helvetica, sans-serif;
    text-align: justify;
}
`;

function OurVision() {
    return (
     <vision>
            <div className="vision-card">
                <div className="vision-card-content">
                    <h2 className="vision-card-title">Our Vision</h2>
                    <p className="vision-card-text">Our vision is to empower individuals worldwide to unlock their full linguistic potential, fostering a connected and culturally enriched global community. Through our innovative language learning platform, we aspire to break down barriers to communication, promoting understanding, collaboration, and mutual respect across diverse cultures and languages. We envision a world where language learning is not just a skill but a gateway to limitless opportunities for personal growth, professional advancement, and meaningful connections with others. With our platform, learners will embark on a journey of discovery, fluency, and confidence, enabling them to thrive in an increasingly interconnected world.</p>
                </div>
            </div>
    </vision>


    )
}

export default OurVision
