import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
        path='/home'
        element={<Home />}>
        </Route>
      
      </Routes>
    </div>
  );
}

export default App;
