import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ServiceImg1 from '../../assets/images/construction1.jpg';
import ServiceImg2 from '../../assets/images/construction2.jpg';
import ServiceImg3 from '../../assets/images/construction3.jpg';
import ServiceImg4 from '../../assets/images/construction4.jpg';

function Project() {
    return (
        <>
            <Header />

            <main>

                <Hero preHeadering='Quality. Integrity. Value.'
                    heading='Projects'
                    text='We offer a diverse array of construction services,
                  spanning residential, commercial, and industrial projects.'/>



                {/* Our projects */}
                <section className='section-3 bg-light py-5'>
                    <div className='container py-5'>
                        <div className='section-header text-center'>
                            <span>our projects</span>
                            <h2>Discover our diverse range of projects</h2>
                            <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                        </div>

                        <div className='row pt-4'>
                            {/* that support to the large resolutions 'col-lg-3' */}
                            {/* project 1 */}
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImg1} className='w-100 cover' alt=" Service Image" />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>
                                                Modern Apartment Complex</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>
                                                A state-of-the-art residential complex featuring sustainable design, modern amenities, and eco-friendly materials. Completed in 2023, this project showcases our commitment to innovative living spaces.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary'>Read more</a>
                                    </div>
                                </div>
                            </div>

                            {/* project 2 */}
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImg2} className='w-100' alt=" Service Image" />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>
                                                Corporate Office Tower</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>
                                                A 15-story office building designed for productivity and employee well-being. Features include open floor plans, green spaces, and energy-efficient systems, completed ahead of schedule in 2022.</p>
                                        </div>

                                        <a href='#' className='btn btn-primary small'>Read more</a>
                                    </div>

                                </div>


                            </div>

                            {/* project 3 */}
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImg3} className='w-100' alt=" Service Image" />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>
                                                Highway Bridge Renovation</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>
                                                Major infrastructure project involving the restoration and strengthening of a key highway bridge. Utilized advanced materials and techniques to extend the structure's lifespan by 30 years.</p>
                                        </div>

                                        <a href='#' className='btn btn-primary small'>Read more</a>
                                    </div>
                                </div>
                            </div>

                            {/* project 4 */}
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImg4} className='w-100' alt=" Service Image" />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>
                                                Historic Building Restoration</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>
                                                Careful renovation of a century-old building, preserving its architectural heritage while modernizing interiors and systems. This project won local preservation awards for its meticulous craftsmanship.</p>
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

export default Project