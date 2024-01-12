// App.js
import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Register from './pages/Register';
import WelcomePage from './pages/WelcomePage';
import LeaderBoard from './pages/LeaderBoard';
import Game_mode from './pages/Gamemode';






const App = () => {
  
  return (
    <BrowserRouter>
   
      
      <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/LeaderBoard" element={<LeaderBoard/>} />
          <Route path="/Gamemode" element={<Game_mode/>} />
    
          </Routes>
   
    </BrowserRouter>
  );
};

export default App;

