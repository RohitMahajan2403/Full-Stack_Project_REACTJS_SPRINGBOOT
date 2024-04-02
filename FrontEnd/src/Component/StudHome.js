import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CourseCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CourseCard = styled.div`
  width: calc(30% - 10px);
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const TutorImage = styled.img`
  width: 100%;
  height: auto;
`;

const BookingButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const StudHome = () => {
  const [language, setLanguage] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [country, setCountry] = useState('');
  const [courseInfoList, setCourseInfoList] = useState([]);

  // Function to handle filter changes
  const handleFilterChange = (filterName, value) => {
    switch (filterName) {
      case 'language':
        setLanguage(value);
        break;
      case 'priceRange':
        setPriceRange(value);
        break;
      case 'country':
        setCountry(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    fetchCourseInfo();
  }, []);

  const fetchCourseInfo = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/course-info/all');
      setCourseInfoList(response.data);
    } catch (error) {
      console.error('Error fetching course info:', error);
    }
  };

  // Function to handle filter button click
  const handleFilterClick = () => {
    // Add your logic here to fetch and display learning resources based on the selected filters
    console.log('Filter button clicked');
    console.log('Selected Language:', language);
    console.log('Selected Price Range:', priceRange);
    console.log('Selected Country:', country);
  };

  return (
    <div className="homepage">
      <div className="filters">
        <div className="language-form-container">
          <div>
            <label htmlFor="language">Select Language to Learn:</label>
            <select id="language" onChange={(e) => handleFilterChange('language', e.target.value)}>
              <option value="">Language</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              {/* Add more languages as needed */}
            </select>
          </div>
          <div>
            <label htmlFor="priceRange">Select Price Range:</label>
            <input
              type="range"
              id="priceRange"
              name="priceRange"
              min="500"
              max="2500"
              onChange={(e) => console.log('Selected price:', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="country">Select Country Tutor:</label>
            <select id="country" onChange={(e) => handleFilterChange('country', e.target.value)}>
              <option value="">Select Country</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="canada">Canada</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <button onClick={handleFilterClick}>Filter</button>
        </div>
      </div>
      <CourseCardContainer>
        {courseInfoList.map((courseInfo) => (
          <CourseCard key={courseInfo.id}>
            <h3>{courseInfo.courseName}</h3>
            <TutorImage src={`data:image/jpeg;base64,${courseInfo.image}`} alt={courseInfo.tutorName} />
            <p>Tutor: {courseInfo.tutorName}</p>
            <p>Language: {courseInfo.name}</p>
            <p>Level: {courseInfo.level}</p>
            <p>Duration: {courseInfo.months} months</p>
            <p>Price: {courseInfo.coursePrice}</p>
            <BookingButton>Book Now</BookingButton>
          
          </CourseCard>
        ))}
      </CourseCardContainer>
    </div>
  );
};

export default StudHome;
