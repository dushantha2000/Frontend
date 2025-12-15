import React from 'react'

function Footer() {
  return (
    <footer>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-3'>
              <h3 className='mb-3'>UrbanEdge Constructions</h3>
              <p>Our post-construction services gives you peace of<br/> 
                mind knowing that we are still here for you even after.</p>
            </div>

            <div className='col-md-3'>
              <h3 className='mb-3'>Our Services</h3>
              <ul>
                <li>
                  <a href=''>Specialty Construction</a>
                </li>
                <li>
                  <a href=''>Specialty Construction</a>
                </li>
                <li>
                  <a href=''>Specialty Construction</a>
                </li>
                <li>
                  <a href=''>Specialty Construction</a>
                </li>
              </ul>
            </div>

            <div className='col-md-3'>
              <h3 className='mb-3'>Quick Links</h3>
              <ul>
                <li>
                  <a href=''>About Us</a>
                </li>
                <li>
                  <a href=''>Services</a>
                </li>
                <li>
                  <a href=''>Projects</a>
                </li>
                <li>
                  <a href=''>Blogs</a>
                </li>
                <li>
                  <a href=''>Contact us</a>
                </li>
              </ul>
            </div>

             <div className='col-md-3'>
              <h3 className='mb-3'>Contact Us</h3>
              <ul>
                <li>
                  <a href=''>(888-000-0000)</a>
                </li>
                <li>
                  <a href=''>info@example.com</a>
                </li>
                <li>
                  <p>B-18X, Rajaji Puram <br/> Lucknow, Uttar Pradesh, <br/> 2260170522400XXXX</p>
                </li>

                <li className='d-flex align-items-center py-2'>
                    <input type='text' placeholder='Enter email'/>
                    <button className='btn btn-Submit ms-2'>Submit</button>
                </li>
              </ul>
            </div>

            <hr/>
            <div className='text-center pt-4'>Copyright © 2024 UrbanEdge Construtions. All Rights Reserved.</div>

          </div>
        </div>
      </footer>
  )
}

export default Footer