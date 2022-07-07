import React from 'react';
import { useLocation } from 'react-router-dom';
import './backtitle.css';

const BackTitles = ({ title }) => {
    const navigate = useLocation();
    return (
        <>
            <section className='back_title'>
                <h2>Home/ {navigate.pathname.split("/")[1]}</h2>
                <h1>{title}</h1>
            </section>
            <div className='marginn'></div>
        </>
    )
}

export default BackTitles