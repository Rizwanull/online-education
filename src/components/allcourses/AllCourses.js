import React from 'react';
import BackTitles from '../common/BackTitles';
import './allcourses.css';
import { coursesDetail } from '../../DummyData';
import OurOnlineCourses from './OurOnlineCourses';
const AllCourses = () => {
    return (
        <>

            <section className='allcourses_section'>
                <BackTitles title="Explore our Tutorials" />

            </section>
            <div className='marginn'></div>
            <section className='courses_detail'>
                <div className='container grid2'>
                    {
                        coursesDetail.map((course) => {
                            return (
                                <div className='items'>
                                    <div className='content flex'>
                                        <div className='left'>
                                            <div className='img'>
                                                <img src={course.cover} />
                                            </div>
                                        </div>
                                        <div className='text'>
                                            <h1>{course.coursesName}</h1>
                                            <div className='rate'>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <label htmlFor=''>(5.0)</label>
                                            </div>
                                            <div className='details'>
                                                {course.courTeacher.map((detail) => {
                                                    return (
                                                        <div className='box'>
                                                            <div className='dimg'>
                                                                <img src={detail.dcover} />
                                                            </div>
                                                            <div className='para'>
                                                                <h4>{detail.name}</h4>
                                                                <h4>{detail.totalTime}</h4>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='price'>
                                        <h3>{course.priceAll}/{course.pricePer}</h3>
                                    </div>
                                    <button className='outline-btn'>Click Here ENROLL Now!</button>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
            <OurOnlineCourses />
        </>
    )
}

export default AllCourses