import React from 'react'
import { team } from '../../DummyData';
const TeamBox = () => {
    return (
        <>
            {
                team.map((teacher) => {
                    return (
                        <div className='items'>
                            <div className='img'>
                                <img src={teacher.cover} alt="teacher" />
                                <div className='overlay'>
                                    <i className='fab fa-facebook-f icon'></i>
                                    <i className='fab fa-instagram icon'></i>
                                    <i className='fab fa-twitter icon'></i>
                                    <i className='fab fa-youtube icon'></i>
                                    <i className='fab fa-tiktok icon'></i>
                                </div>
                            </div>
                            <div className='details'>
                                <h2>{teacher.name}</h2>
                                <div className='d-1'>{teacher.work}</div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TeamBox;