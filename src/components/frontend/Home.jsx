import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import AboutImg from '../../assets/images/about-us.jpg';

function Home() {
  return (
    <>
      <header>
        <div className='container'>
          <Navbar expand="lg" >
            <Navbar.Brand href="#home" className='logo'>
              <span>UrbanEdge </span>
              Constructions
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>About Us</Nav.Link>
                <Nav.Link href="#home" className='nav-link'>Services</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>Blogs</Nav.Link>
                <Nav.Link href="#home" className='nav-link'>Our Project</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>
        </div>
      </header>

      <main>
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
                <h2>Crafting structures that <br/> last a lifetime</h2>
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





        <section className='section-3'>

        </section>

        <section className='section-4'>

        </section>

      </main>
      <footer></footer>
    </>
  )
}

export default Home