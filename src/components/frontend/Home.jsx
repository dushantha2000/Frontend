import React from 'react'


import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ServiceImg from '../../assets/images/construction1.jpg'

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
                  <img src={ServiceImg} className='w-100' alt=" Service Image" />
                </div>
                <div className='service-body'>
                  <div className='service-title'>
                    <h3>
                      Industrial Construction</h3>
                  </div>
                  <div className='service-content'>
                    <p>
                      Industrial Construction
                      Industrial construction is a specialized sector within the construction industry that focuses on the design, development, and construction of facilities for industrial use.</p>
                  </div>

                  <a href='#' className='btn btn-primary'>Read move</a>
                </div>

              </div>


            </div>

             {/* service 2 */}
            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={ServiceImg} className='w-100' alt=" Service Image" />
                </div>
                <div className='service-body'>
                  <div className='service-title'>
                    <h3>
                      Industrial Construction</h3>
                  </div>
                  <div className='service-content'>
                    <p>
                      Industrial Construction
                      Industrial construction is a specialized sector within the construction industry that focuses on the design, development, and construction of facilities for industrial use.</p>
                  </div>

                  <a href='#' className='btn btn-primary'>Read move</a>
                </div>

              </div>


            </div>

             {/* service 3 */}
            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={ServiceImg} className='w-100' alt=" Service Image" />
                </div>
                <div className='service-body'>
                  <div className='service-title'>
                    <h3>
                      Industrial Construction</h3>
                  </div>
                  <div className='service-content'>
                    <p>
                      Industrial Construction
                      Industrial construction is a specialized sector within the construction industry that focuses on the design, development, and construction of facilities for industrial use.</p>
                  </div>

                  <a href='#' className='btn btn-primary'>Read move</a>
                </div>
              </div>
            </div>

             {/* service 4 */}
            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={ServiceImg} className='w-100' alt=" Service Image" />
                </div>
                <div className='service-body'>
                  <div className='service-title'>
                    <h3>
                      Industrial Construction</h3>
                  </div>
                  <div className='service-content'>
                    <p>
                      Industrial Construction
                      Industrial construction is a specialized sector within the construction industry that focuses on the design, development, and construction of facilities for industrial use.</p>
                  </div>
                  <a href='#' className='btn btn-primary'>Read move</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* footer section */}
      <Footer />
      {/* end of footer section */}
    </>
  )
}

export default Home