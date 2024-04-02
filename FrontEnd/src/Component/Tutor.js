import React from 'react'
import TutSidebar from './TutSidebar'
import {
    Routes,
    Route,
} from "react-router-dom";
import TutProfile from '../pages/TutProfile';
import TutUploads from '../pages/TutUploads';
import OurTeam from '../pages/OurTeam';
import FooterComp from './FooterComp';
import TutSchedule from '../pages/TutSchedule';
import ContactUs from '../pages/ContactUs';
import TutSettings from '../pages/TutSettings';
import AddCourseForm from '../pages/AddCourse';


const Tutor = () => {
    return (
        <div>
            <TutSidebar />

                <Routes>

                    <Route 
                        path="/"
                        element={<TutProfile/>}
                    />

                    <Route 
                        path="/profile"
                        element={<TutProfile/>}
                    />

                    <Route 
                        path="/tutschedule"
                        element={<TutSchedule />}
                    />

                    <Route 
                        path="/tutuploads"
                        element={<TutUploads />}
                    />

                    <Route
                        path="/about-us/team"
                        element={<OurTeam />}
                    />

                    <Route
                        path="/about-us/vision"
                        element={<OurTeam />}
                    />
                
                    <Route
                        path="/contact"
                        element={<ContactUs/>}
                    />
                    
                    <Route
                        path="/setting"
                        element={<TutSettings/>}
                    />
                    <Route
                        path="/addcourse"
                        element={<AddCourseForm />}
                    />    
                    
                </Routes>

            <FooterComp />

        </div>
    )
}

export default Tutor
