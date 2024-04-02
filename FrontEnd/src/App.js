import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import MyRoute from './Component/MyRoute';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <MyRoute />
       </BrowserRouter>
     
    </div>
  );
}

export default App;
