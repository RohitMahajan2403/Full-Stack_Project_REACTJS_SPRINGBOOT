import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AllStudList from './AllStudList';
import AllTutList from './AllTutList';
import AllFeedBackList from './AllFeedBackList';

const AdminRouting = () => {
    return (
        <div>
        <h1>Welcome to the Admin Home Page</h1>
        <Routes>
          <Route path='/admin/adminhomepage/allstudents' element={<AllStudList/>}/>
          <Route path='/admin/adminhomepage/alltutors' element={<AllTutList/>}/>
          <Route path='/admin/adminhomepage/allfeedbacks' element={<AllFeedBackList/>}/>
        </Routes>
        </div>
    )
}

export default AdminRouting
