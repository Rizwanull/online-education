import React from 'react';
import { Students } from '../../DummyData';
import Title from '../home/Title';
import './studentstyle.css';

const OurSuccessfulStudent = () => {
    return (
        <>
            <section className='success_student padding'>
                <div className='container'>
                    <div className='textc'>
                        <Title title="Victories" subtitle="Our Succesful Students!" />
                    </div>
                    <div className='grid2'>
                        {Students.map((student) => (
                            <div className='items'>
                                <div className='box flex'>

                                    <div className='img'>
                                        <img src={student.cover} alt="student " />
                                        <i className='fa fa-quote-left icon'></i>
                                    </div>
                                    <div className='name'>
                                        <h2>{student.name}</h2>
                                        <span>{student.post}</span>
                                    </div>
                                </div>
                                <h3>{student.desc}</h3>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurSuccessfulStudent