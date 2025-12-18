import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import ServiceImg1 from '../../assets/images/construction1.jpg';
import ServiceImg2 from '../../assets/images/construction2.jpg';
import ServiceImg3 from '../../assets/images/construction3.jpg';
import ServiceImg4 from '../../assets/images/construction4.jpg';

import Hero from '../common/Hero'

function Services() {
    return (
        <>
            <Header />

            <main>

                <Hero preHeadering='Quality. Integrity. Value.'
                    heading='Services'
                    text='We offer a diverse array of construction services,
                  spanning residential, commercial, and industrial projects.'/>


            
                {/* Our Services */}
                <section className='section-3 bg-light py-5'>
                    <div className='container py-5'>
                        <div className='section-header text-center'>
                            <span>our services</span>
                            <h2>Our construction services</h2>
                            <p>We offer a diverse array of construction services,
                                spanning residential, commercial, and industrial projects.</p>
                        </div>

                        <div className='row pt-4'>

                            {/* that support to the large resolutions 'col-lg-3' */}
                            {/* service 1 */}
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImg1} className='w-100' alt=" Service Image" />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>
                                                Residential Construction</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>
                                                Residential construction involves building homes and living spaces tailored to individual needs. We specialize in creating comfortable, sustainable, and aesthetically pleasing residences that stand the test of time.</p>
                                        </div>

                                        <a href='#' className='btn btn-primary small'>Read more</a>
                                    </div>

                                </div>


                            </div>

                            {/* service 2 */}
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImg2} className='w-100' alt=" Service Image" />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>
                                                Commercial Construction</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>
                                                Commercial construction focuses on developing office buildings, retail spaces, and other business facilities. Our team ensures efficient designs that promote productivity and meet modern business requirements.</p>
                                        </div>

                                        <a href='#' className='btn btn-primary small'>Read more</a>
                                    </div>

                                </div>


                            </div>

                            

                            {/* service 3 */}
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImg3} className='w-100' alt=" Service Image" />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>
                                                Infrastructure Development</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>
                                                Infrastructure development includes roads, bridges, and utilities essential for community growth. We deliver robust projects that enhance connectivity and support long-term urban planning.</p>
                                        </div>

                                        <a href='#' className='btn btn-primary small'>Read more</a>
                                    </div>
                                </div>
                            </div>

                            {/* service 4 */}
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImg4} className='w-100' alt=" Service Image" />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>
                                                Renovation and Remodeling</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>
                                                Renovation and remodeling services transform existing structures into modern, functional spaces. We handle everything from minor updates to major overhauls with attention to detail and quality craftsmanship.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary small'>Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


            </main>

            <Footer />
        </>
    )
}

export default Services