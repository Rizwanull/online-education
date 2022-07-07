import React from 'react'
import Title from '../home/Title'
import { OnlineCourses } from '../../DummyData';
const OurOnlineCourses = () => {
    return (
        <>
            <section className='online_section'>
                <div className='container'>
                    <Title title="Click For Our Online Courses" subtitle="ONLINE COURSES" />
                    <div className='content grid3'>
                        {OnlineCourses.map((online) => {
                            return (
                                <div className='box'>
                                    <div className='img'>
                                        <img src={online.cover} alt="online" />
                                        <img src={online.hoverCover} className="show" alt="online" />
                                    </div>
                                    <h1>{online.courseName}</h1>
                                    <span>{online.course}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurOnlineCourses