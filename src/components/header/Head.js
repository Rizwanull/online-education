import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import user from '../images/user.jpg';
import './head.css';
const Head = () => {
    const [mobile, setMobile] = useState(false);
    return (
        <>
            <div className='head'>
                <div className='container flex'>
                    <div className='web-title'>
                        <h1>Education system</h1>
                        <span>THE JOKER'S PROGRAMMING ACADEMY</span></div>

                    <div className='social-icons'>
                        <Link to="/"><i className='fab fa-facebook-f icon'></i></Link>
                        <Link to="/"> <i className='fab fa-linkedin icon'></i> </Link>
                    </div>

                </div>

            </div>
            <header>
                <nav className='flex'>
                    <ul className={mobile ? 'mobile-navbar' : 'flex'} onClick={() => setMobile(false)}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About US</Link></li>
                        <li><Link to="/course">Courses</Link></li>
                        <li><Link to="/ourteam">Our Team</Link></li>
                        <li><Link to="/contact">Contact US</Link></li>
                        <li><Link to="/admission">Admission</Link></li>
                        <li><Link to="/result">Results</Link></li>
                    </ul>
                    <div className='auth-img'>
                        <img src='/images/user.jpg' alt="principal" />
                    </div>
                    <button className='toggle-menu-bar' onClick={() => setMobile(!mobile)}>
                        {mobile ? <i className='fa fa-times'></i> :
                            <i className='fa fa-bars'></i>
                        }
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Head;