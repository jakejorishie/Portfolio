import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
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
        <Route
        path='/projects'
        element={<Projects />}>
        </Route>
        <Route
        path='/resume'
        element={<Resume />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
