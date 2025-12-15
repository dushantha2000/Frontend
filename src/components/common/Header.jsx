import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = ()=> {
  return (
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
  )
}

export default Header