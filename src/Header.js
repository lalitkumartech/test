import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';  // Import the icon
import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function Header() {

  const nevigato = useNavigate();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={()=> nevigato('/')} >React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link onClick={()=> nevigato('/')}>Home</Nav.Link>
              <Nav.Link >Courses</Nav.Link>
              <NavDropdown title="Courses" id="collapsible-nav-dropdown-one">
                <NavDropdown.Item onClick={()=> nevigato('/englishclasses')}>English Classes</NavDropdown.Item>
                <NavDropdown.Item >Computer Classes</NavDropdown.Item>
                <NavDropdown.Item >Live Classes</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Gallery" id="collapsible-nav-dropdown-two">
              <NavDropdown.Item >Director</NavDropdown.Item>
                <NavDropdown.Item >Staff</NavDropdown.Item>
                <NavDropdown.Item >Students</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={()=> nevigato('/about')}>About</Nav.Link>
              <Nav.Link onClick={()=> nevigato('/contact')}>Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <button variant="primary" className='rounded-full border-1 xxl:py-3 xl:py-3 lg:py-3 md:py-3 py-3 px-3 border-white bg-yellow-400 text-sm text-white capitalize '>
                Get An Appointment <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Nav>
          </Navbar.Collapse>  
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
