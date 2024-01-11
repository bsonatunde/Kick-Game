// App.js
import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Register from './pages/Register';
import WelcomePage from './pages/WelcomePage';
import LeaderBoard from './pages/LeaderBoard';
import Game_mode from './pages/Game_mode';






const App = () => {
  
  return (
    <BrowserRouter>
   
      
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/WelcomePage" element={<WelcomePage/>} />
          <Route path="/LeaderBoard" element={<LeaderBoard/>} />
          <Route path="/Game_mode" element={<Game_mode/>} />
    
          </Routes>
   
    </BrowserRouter>
  );
};

export default App;

