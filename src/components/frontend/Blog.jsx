import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import AboutImg from '../../assets/images/about-us.jpg';

import BlogImg from '../../assets/images/construction4.jpg';

function Blog() {
    return (
        <>

            <Header />

            <mian>

                <Hero preHeadering='Quality. Integrity. Value.'
                    heading='Blogs'
                    text='We offer a diverse array of construction services,
                  spanning residential, commercial, and industrial projects.'/>


                <section className='section-9 py-5'>
                    <div className='container py-5'>
                        {/* create 2 rows */}
                        {/* first row */}
                        <dvi className='row'>
                            <div className='col-md-6'>
                                <img src={AboutImg} className='w-100' />
                            </div>

                            {/* second row */}
                            <div className='col-md-6'>

                                <a href='#'>
                                    <span>Populer Blog</span>
                                    <h2>Crafting structures that <br /> last a lifetime</h2> </a>
                                <p>Right now your code is wrong because you’re calling dispatch immediately, instead of waiting for the user to confirm. <br />Crafting structures that <br /> last a lifetime
                                    Right now your code is wrong because you’re calling dispatch immediately, instead of waiting for the user to confirm.
                                </p>

                            </div>
                        </dvi>
                    </div>
                </section>

                {/* blogs */}
                <section className='section-6 bg-light py-5'>
                    <div className='container py-5'>
                        <div className='section-header text-center'>
                            <span>Blog & News</span>
                            <h2>Articles & blog posts</h2>
                            <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                        </div>


                        <div className='row py-5'>
                            {/* blog 1 */}
                            <div className='col-md-4 '>
                                <div className='card shadow border-0'>
                                    <div className='card-img-top'>
                                        <img src={BlogImg} alt="" className='w-100' />
                                    </div>
                                    <div className='card-body p-4'>
                                        <div className='mb-3'>
                                            <a href='' className='title'>One of the defining characteristics of civil construction </a>
                                        </div>
                                        <a href='' className='btn btn-primary small'>Read more</a>
                                    </div>
                                </div>
                            </div>

                            {/* blog 2 */}
                            <div className='col-md-4 '>
                                <div className='card shadow border-0'>
                                    <div className='card-img-top'>
                                        <img src={BlogImg} alt="" className='w-100' />
                                    </div>
                                    <div className='card-body p-4'>
                                        <div className='mb-3'>
                                            <a href='' className='title'>One of the defining characteristics of civil construction </a>
                                        </div>
                                        <a href='' className='btn btn-primary small'>Read more</a>
                                    </div>
                                </div>
                            </div>

                            {/* blog 3 */}
                            <div className='col-md-4 '>
                                <div className='card shadow border-0'>
                                    <div className='card-img-top'>
                                        <img src={BlogImg} alt="" className='w-100' />
                                    </div>
                                    <div className='card-body p-4'>
                                        <div className='mb-3'>
                                            <a href='' className='title'>One of the defining characteristics of civil construction </a>
                                        </div>
                                        <a href='' className='btn btn-primary small'>Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>





            </mian>

            <Footer />



        </>
    )
}

export default Blog