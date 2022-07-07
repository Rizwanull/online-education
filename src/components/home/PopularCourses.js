import React from 'react';
import { coursesDetail } from '../../DummyData';
import Title from './Title';
import OurOnlineCourses from '../allcourses/OurOnlineCourses';

const PopularCourses = () => {
    return (
        <>
            <section className='poopular_courses'>
                <div className='container'>
                    <div className='tit'>
                        <Title title="Our Courses" subtitle="Explore Our Online Popular courses" />
                    </div>
                    <div className='courses_detail'>
                        <div className='grid2'>
                            {
                                coursesDetail.slice(1, 4).map((course) => {
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
                    </div>
                </div>
            </section>
            <OurOnlineCourses />
        </>
    )
}

export default PopularCourses