import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Navbar/Home';
import About from './components/Navbar/About';
import Experience from './components/Navbar/Experience';
import Projects from './components/Navbar/Projects';
import Skills from './components/Navbar/Skills';
import Contact from './components/Navbar/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();

  const isHome = location.pathname === '/' || location.pathname === '/portfolio' || location.pathname === '/home';

  return (
   
    <>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/experience' element={<Experience/>} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>

      {isHome && <Footer />}
      
    </>
   
  );
}

export default App;
