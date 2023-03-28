import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
        exact path='/'
        element={<Projects />}>
        </Route>
        <Route
        path='/resume'
        element={<Resume />}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
