import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';


function About() {
    return (
        <>
        <section className='section-2 py-5'>
            <div className='container py-5'>
                {/* create 2 rows */}
                {/* first row */}
                <dvi className='row'>
                    <div className='col-md-6'>
                        <img src={AboutImg} className='w-100' />
                    </div>

                    {/* second row */}
                    <div className='col-md-6'>
                        <span>About us</span>
                        <h2>Crafting structures that <br /> last a lifetime</h2>
                        <p>Building enduring structures requires a comprehensive approach
                            that combines advanced materials, resilient design, routine
                            maintenance, and sustainable practices. By drawing on historical
                            insights and utilizing modern technology. <br /><br />
                            Designing structures that stand the test of time involves a seamless
                            blend of cutting-edge materials, durable design, ongoing upkeep,
                            and eco-friendly practices. By combining lessons from the past with
                            the power of modern technology.</p>
                    </div>
                </dvi>
            </div>
        </section>


        </>
    )
}

export default About