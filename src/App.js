import React from 'react';
import Home from './Componentess/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Courses from './Componentess/Courses';
import Login from './Componentess/Login';
import Sign from './Componentess/Sign';
import Navbar from './Componentess/Navbar';
import Team from './Componentess/Team';
import Fetch from './Componentess/Fetch';
import BasicExample from './Componentess/BasicExample';
import Footer from './Componentess/Footer';

export default function MyComponent() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/Team' element={<Team />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Sign' element={<Sign />} />
          <Route path='/BasicExample' element={<BasicExample />} />
          <Route path='/Fetch' element={<Fetch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
