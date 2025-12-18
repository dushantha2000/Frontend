import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import AboutUs from '../common/AboutUs';

function About() {
  return (
    <>
      {/* Header section */}
      <Header />
      <main>
        <section className='section-7 '>
          <div className='hero d-flex align-items-center'>
            <div className='container'>
              <div className='text-left'>
                <span>Quality. Integrity. Value.</span>
                <h1>About Us</h1>
                <p>We excel at transforming visions into reality<br />
                  through outstanding craftsmanship and precise.</p>
              </div>
            </div>
          </div>

        </section>

        {/* About me section */}
        <AboutUs />
        {/* end of about us section */}

      </main>

      {/* Footer section */}
      <Footer />
    </>
  )
}

export default About