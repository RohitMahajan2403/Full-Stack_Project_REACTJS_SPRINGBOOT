import React ,{ useEffect } from 'react';
import Layout from './Layout';
import Sliderbar from './Sliderbar';
import CardLanguages from './CardLanguages';
import axios from 'axios';
import styled from 'styled-components';
import { useState } from 'react';


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

const HomePage = () => {
  const [courseInfoList, setCourseInfoList] = useState([]);

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



  return (
    <Layout>
      <Sliderbar />
      <CardLanguages />

      <br></br>
      <br></br>
      <br></br>

      <div>
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
              <a href='./login'>
                <button style={{ marginRight: '10px' }}>Book</button>
              </a>

            </CourseCard>
          ))}
        </CourseCardContainer>
      </div>







    </Layout>
  );
}

export default HomePage;