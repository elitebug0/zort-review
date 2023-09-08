import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';
const Header = () => {
  return (
    <section className="header">
      {['lg',].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3">
          <Container >
            <Navbar.Brand href="/">
              <img src="/images/logo.svg" alt="logo" />
            </Navbar.Brand>
            <div className=" header-button mobile-button"  >
              <Button style={{
                borderColor: "#FFF",
              }}> Log In</Button>
              <Button style={{
                borderColor: "#6FF3F3",
              }} >Sign Up</Button>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
                <rect width="28" height="3" rx="1.5" fill="white" />
                <path d="M9 9.5C9 8.67157 9.67157 8 10.5 8H26.5C27.3284 8 28 8.67157 28 9.5C28 10.3284 27.3284 11 26.5 11H10.5C9.67157 11 9 10.3284 9 9.5Z" fill="white" />
                <path d="M2 17.5C2 16.6716 2.67157 16 3.5 16H26.5C27.3284 16 28 16.6716 28 17.5C28 18.3284 27.3284 19 26.5 19H3.5C2.67157 19 2 18.3284 2 17.5Z" fill="white" />
              </svg>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">About</Nav.Link>
                  <Nav.Link href="/">How It Works</Nav.Link>
                  <Nav.Link href="/">Reviews</Nav.Link>
                  <Nav.Link href="/">Contact</Nav.Link>
                </Nav>
                <div className="d-flex header-button">
                  <Button style={{
                    borderColor: "#FFF",
                  }}> Log In</Button>
                  <Button style={{
                    borderColor: "#6FF3F3",
                  }} >Sign Up</Button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </section>
  )
}

export default Header