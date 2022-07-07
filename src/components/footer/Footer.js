import React from 'react'
import './footer.css';
const Footer = () => {
    return (
        <>
            <section className='footer_section'>
                <div className='container flex'>
                    <div className='row left'>
                        <h1>Newsletter -Stay and get the latest Update</h1>
                        <span>about your city and far far a mountains i love it</span>
                    </div>
                    <div className='right row'>
                        <input type="text" placeholder='Enter Your E-mail address' />
                        <i className='fa fa-paper-plane'></i>
                    </div>
                </div>
            </section>
            <footer>
                <div className='container padding'>
                    <div className='box logo'>
                        <h1>Education system & Online learning</h1>
                        <span>THE JOKER'S PROGRAMMING ACADEMY</span>
                        <p className='parag'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta veritatis deserunt
                            voluptatum optio facere asperiores expedita blanditiis dolore architecto!</p>
                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-instagram icon'></i>
                        <i className='fab fa-twitter icon'></i>
                        <i className='fab fa-youtube icon'></i>
                        <i className='fab fa-tiktok icon'></i>
                    </div>
                    <div className='box link'>
                        <h3>Explore</h3>
                        <ul>
                            <li>Team</li>
                            <li>About US</li>
                            <li>Contact US</li>
                            <li>Home</li>
                            <li>Online Courses</li>
                        </ul>
                    </div>
                    <div className='box link'>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Web Sites</li>
                            <li>E-mail</li>
                            <li>Summary</li>
                            <li>Admission</li>
                            <li>Results</li>
                        </ul>
                    </div>
                    <div className='box last'>
                        <h3>Have a Question?</h3><ul>
                            <li><i className='fa fa-map'></i>
                                204 Fake st. Mount View pakistan india barat,caolforinia ,USA,</li>
                            <li>
                                <i className='fa fa-phone-alt'></i>
                                +92 333 6938 069
                            </li>
                            <li>
                                <i className='fa fa-paper-plane'></i>
                                rizwanullahpk64@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className='right-legal'>
                <p className='parag'>Copyright @2022 <br />
                    Jokers Programmer | <i className='fa fa-heart'></i>
                </p>
            </div>
        </>
    )
}

export default Footer