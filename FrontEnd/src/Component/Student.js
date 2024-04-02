// Student.js
import React from 'react';
import StudHome from './StudHome';
import StudProfile from '../pages/StudProfile';
import StudSchedule from '../pages/StudSchedule';
import StudLang from '../pages/StudLang';

import ContactUs from '../pages/ContactUs';
import Support from '../pages/Support';
import Settings  from '../pages/Settings';
import Sidebar from './Sidebar';
import FooterComp from './FooterComp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurTeam from '../pages/OurTeam';
import '../Style/Student.css'
import OurVision from '../pages/OurVision';

function Student() {
  return (
    
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<StudHome />} />
          <Route path="/home" element={<StudHome />} />
          <Route path="/profile" element={<StudProfile   />} />
          <Route path="/studschedule" element={<StudSchedule />} />
          <Route path="/studlanguages" element={<StudLang />} /> 
          <Route path="/about-us/team" element={<OurTeam/>} />
          <Route path="/about-us/vision" element={<OurVision/>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/setting" element={<Settings />} />
        </Routes>
        <FooterComp />
      </div>
    
  );
}

export default Student;
