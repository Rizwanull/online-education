import React from 'react'
import './home.css';
import About_Services from '../about/About_Services';
import Wrraper from '../about/Wrraper';
import Hero from './Hero';
import PopularCourses from './PopularCourses';
import OurSuccessfulStudent from '../students/OurSuccessfulStudent';
const Home = () => {
    return (
        <>
            <Hero />
            <About_Services />
            <Wrraper />
            <PopularCourses />
            <OurSuccessfulStudent />
        </>
    )
}

export default Home