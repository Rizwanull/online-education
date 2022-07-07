import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from './components/header/Head'
import Home from './components/home/Home';
import About from './components/about/About';
import AllCourses from './components/allcourses/AllCourses';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <>

      <BrowserRouter>
        <Head />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/course" exact element={<AllCourses />} />
          <Route path="/ourteam" exact element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App