import React from 'react';
import BackTitle from '../common/BackTitles';
import './team.css';
import TeamBox from './TeamBox';
const Team = () => {
    return (
        <>
            <section className='popular_section '>
                <BackTitle title="Our Team " />
            </section>
            <div className='marginn'></div>
            <section className='team padding '>
                <div className='container grid'>
                    <TeamBox />
                </div>
            </section>
        </>
    )
}

export default Team;