import React from 'react'

import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ServiceImg1 from '../../assets/images/construction1.jpg';
import ServiceImg2 from '../../assets/images/construction2.jpg';
import ServiceImg3 from '../../assets/images/construction3.jpg';
import ServiceImg4 from '../../assets/images/construction4.jpg';

import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';

import AvatarImg from '../../assets/images/author-2.jpg'
import AvatarImg2 from '../../assets/images/author-2.jpg'
import AvatarImg3 from '../../assets/images/author-2.jpg'
import AvatarImg4 from '../../assets/images/author-2.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  Pagination } from 'swiper/modules';
import 'swiper/css/pagination';


function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero section */}
        <section className='section-1'>
          <div className='hero d-flex align-items-center'>
            {/* 100 % sreen  container-fluid */}
            <div className='container-fluid'>
              <div className='text-center'>
                <span>Welcome Amazing Constructions</span>
                <h1>Crafting Dreams with <br />
                  Precision and excellence.</h1>
                <p>We excel at transforming visions into reality through outstanding craftsmanship and precise<br />
                  attention to detail. With years of experience and a dedication to quality.</p>
                <div className='mt-4'>
                  <a className='btn btn-primary'>Contact Now</a>
                  <a className='btn btn-secondary ms-3'>View Project</a>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/* end of hero section */}



        {/* About me section */}
        <section className='section-2  py-5'>
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
        {/* end of about us section */}

      </main>

      {/* Our Services */}
      <section className='section-3 bg-light py-5'>
        <div className='container-fluid py-5'>
          <div className='section-header text-center'>
            <span>our services</span>
            <h2>Our construction services</h2>
            <p>We offer a diverse array of construction services,
              spanning residential, commercial, and industrial projects.</p>
          </div>

          <div className='row pt-4'>

            {/* that support to the large resolutions 'col-lg-3' */}
            {/* service 1 */}
            <div className='col-md-3 col-lg-3'>
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

                  <a href='#' className='btn btn-primary'>Read more</a>
                </div>

              </div>


            </div>

            {/* service 2 */}
            <div className='col-md-3 col-lg-3'>
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

                  <a href='#' className='btn btn-primary'>Read more</a>
                </div>

              </div>


            </div>

            {/* service 3 */}
            <div className='col-md-3 col-lg-3'>
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

                  <a href='#' className='btn btn-primary'>Read more</a>
                </div>
              </div>
            </div>

            {/* service 4 */}
            <div className='col-md-3 col-lg-3'>
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
                  <a href='#' className='btn btn-primary'>Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Why choose us */}
      <section className='section-4'>
        <div className='container py-5'>
          <div className='section-header text-center'>
            <span>Why Choose Us</span>
            <h2>Discover our wide variety of projects.</h2>
            <p>Created in close partnership with our clients and collaborators, this approach merges industry expertise,
              decades of experience, innovation, and flexibility to consistently deliver excellence.</p>
          </div>

          <div className='row py-5'>
            <div className='col-md-4'>
              <div className='card shadow border-0 p-4'>
                <div className='card-icon'>
                  <img src={Icon1} alt="" />
                </div>
                <div className='card-title mt-3'>
                  <h3>Cutting-Edge Solutions</h3>
                </div>

                <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='card shadow border-0 p-4 '>
                <div className='card-icon'>
                  <img src={Icon2} alt="" />
                </div>
                <div className='card-title mt-3'>
                  <h3>Cutting-Edge Solutions</h3>
                </div>

                <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='card shadow border-0 p-4'>
                <div className='card-icon'>
                  <img src={Icon3} alt="" />
                </div>
                <div className='card-title mt-3'>
                  <h3>Cutting-Edge Solutions</h3>
                </div>

                <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>
              </div>
            </div>
          </div>


        </div>

      </section>


      {/* Our projects */}
      <section className='section-3 bg-light py-5'>
        <div className='container-fluid py-5'>
          <div className='section-header text-center'>
            <span>our projects</span>
            <h2>Discover our diverse range of projects</h2>
            <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
          </div>

          <div className='row pt-4'>
            {/* that support to the large resolutions 'col-lg-3' */}
            {/* project 1 */}
            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={ServiceImg1} className='w-100' alt=" Service Image" />
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
            <div className='col-md-3 col-lg-3'>
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

                  <a href='#' className='btn btn-primary'>Read more</a>
                </div>

              </div>


            </div>

            {/* project 3 */}
            <div className='col-md-3 col-lg-3'>
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

                  <a href='#' className='btn btn-primary'>Read more</a>
                </div>
              </div>
            </div>

            {/* project 4 */}
            <div className='col-md-3 col-lg-3'>
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
                  <a href='#' className='btn btn-primary'>Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Testimonials section */}
      <section className='section-5'>
        <div className='container py-5'>
          <div className='section-header text-center'>
            <span>Testimonials</span>
            <h2>What people are saying about us</h2>
            <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
          </div>

          <Swiper
          modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            
          >
            {/* card-1 */}
            <SwiperSlide>
              <div className='card shadow border-0'>
                <div className='card-body p-5'>
                  <div className='rating'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>

                  <div className='contect pt-4'>
                    <p>Our recent partnership with SAASA for a construction project yielded an outstanding experience. The team at SAASA consistently demonstrated exceptional professionalism, keen attention to detail, and a strong commitment to quality throughout all phases, from initial planning through final execution</p>
                  </div>

                  <hr/>
                  <div className='d-flex meta'>
                    <div>
                      <img src={AvatarImg} alt="" width={50} />
                    </div>
                    <div className='ps-3'>
                      <div className='name'>John Doe</div>
                      <div>CEO</div>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>

            {/* card-2 */}
             <SwiperSlide>
              <div className='card shadow border-0'>
                <div className='card-body p-5'>
                  <div className='rating'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>

                  <div className='contect pt-4'>
                    <p>Our recent partnership with SAASA for a construction project yielded an outstanding experience. The team at SAASA consistently demonstrated exceptional professionalism, keen attention to detail, and a strong commitment to quality throughout all phases, from initial planning through final execution</p>
                  </div>

                  <hr/>
                  <div className='d-flex meta'>
                    <div>
                      <img src={AvatarImg} alt="" width={50} />
                    </div>
                    <div className='ps-3'>
                      <div className='name'>John Doe</div>
                      <div>CEO</div>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>

            {/* card-3 */}
             <SwiperSlide>
              <div className='card shadow border-0'>
                <div className='card-body p-5'>
                  <div className='rating'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>

                  <div className='contect pt-4'>
                    <p>Our recent partnership with SAASA for a construction project yielded an outstanding experience. The team at SAASA consistently demonstrated exceptional professionalism, keen attention to detail, and a strong commitment to quality throughout all phases, from initial planning through final execution</p>
                  </div>

                  <hr/>
                  <div className='d-flex meta'>
                    <div>
                      <img src={AvatarImg} alt="" width={50} />
                    </div>
                    <div className='ps-3'>
                      <div className='name'>John Doe</div>
                      <div>CEO</div>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>

            {/* card-4 */}
             <SwiperSlide>
              <div className='card shadow border-0'>
                <div className='card-body p-5'>
                  <div className='rating'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>

                  <div className='contect pt-4'>
                    <p>Our recent partnership with SAASA for a construction project yielded an outstanding experience. The team at SAASA consistently demonstrated exceptional professionalism, keen attention to detail, and a strong commitment to quality throughout all phases, from initial planning through final execution</p>
                  </div>

                  <hr/>
                  <div className='d-flex meta'>
                    <div>
                      <img src={AvatarImg} alt="" width={50} />
                    </div>
                    <div className='ps-3'>
                      <div className='name'>John Doe</div>
                      <div>CEO</div>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>

          </Swiper>

        </div>
      </section>

      {/* footer section */}
      <Footer />
      {/* end of footer section */}
    </>
  )
}

export default Home