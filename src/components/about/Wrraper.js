import React from 'react'
import { awrapper } from '../../DummyData'
const Wrraper = () => {
    return (
        <>
            <section className='wraper-section'>
                <div className='container grid'>
                    {
                        awrapper.map((item) => {
                            return (
                                <div className="box">

                                    <div className="img">
                                        <img src={item.cover} />
                                    </div>
                                    <div className='text'>
                                        <h1>{item.data}</h1>
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Wrraper