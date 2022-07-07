import React from 'react';
import { Aboutdata } from '../../DummyData';
import Title from '../home/Title';

const About_Services = () => {
    return (
        <>
            <div className='marginn'>
                <section className='about_home'>
                    <div className='flex'>
                        <div className='row left'>
                            <img src="/images/about1.webp" />

                        </div>
                        <div className='row right'>
                            <Title title="LEARN EDUCATION" subtitle="Advantages About online education" />
                            <div className='items'>
                                {Aboutdata.map((item) => {
                                    return (
                                        <div className='item'>
                                            <div className='img'>
                                                <img src={item.cover} />
                                            </div>
                                            <div className='text'>

                                                <h2>{item.title}</h2>
                                                <p style={{ color: "black" }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    )

                                })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About_Services