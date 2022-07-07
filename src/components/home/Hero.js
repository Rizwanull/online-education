import React from 'react';
import Title from './Title';

const Hero = () => {
    return (
        <>
            <section className='hero-section' >
                <div className='container'>
                    <div className='row1'>
                        <Title title="Wellcome to programming joker's" subtitle="Best Online Academy" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptate voluptates, officiis
                            facere iure hic, perferendis reiciendis exercitationem nulla asperiores cumque repellat, ea magnam
                            nobis ad recusandae modi distinctio ratione?
                        </p>
                        <div className="button">
                            <button>
                                WELLCOME TO EDUCATION VALLEY <i className="fa fa-long-arrow-alt-right" ></i> </button>
                            <button className="secondry-btn">
                                PROGRAMMING JOKE'S <i className="fa fa-long-arrow-alt-right" ></i> </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero