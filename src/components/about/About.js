import React from 'react'
import './about.css';
import Wrraper from './Wrraper';
import About_Services from './About_Services';
import BackTitles from '../common/BackTitles';

const About = () => {

    return (
        <>
            <section className='about-section'>
                <BackTitles title="Read Our Info" />
            </section>
            <About_Services />
            <Wrraper />
        </>
    )
}

export default About