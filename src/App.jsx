import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Project from './Components/Project';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Newsletter from './Components/Newsletter';
import ProjectDetails from './Components/ProjectDetails';

const App = () => {
  return (
    <Router>
      <Nav />
      <div className="pt-20">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newsletter' element={<Newsletter />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
