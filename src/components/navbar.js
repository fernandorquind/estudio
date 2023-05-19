import React from "react";
import logo from "../assets/img/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarComponent() {

    return (
        <>
        <Navbar bg="dark" expand="lg">
          <Container fluid className="text-light">
            <Navbar.Brand href="/suma">
               <div width="200px" className=" d-flex align-items-center">
               <img  src={logo}  width="60px" alt="logo calculator" />
                <h2 className="px-2 mt-2  text-light">Calculator</h2>
               </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Nav
               
                className="my-2 my-lg-0 text-light"
                style={{ maxHeight: '100px',color: '#fff'}}
                navbarScroll
              >
                <Nav.Link className="text-light" href="/suma">Suma</Nav.Link>
                <Nav.Link className="text-light"  href="/resta">Resta</Nav.Link>
                <Nav.Link className="text-light"  href="/multi">Multiplicacion</Nav.Link>
                <Nav.Link className="text-light"  href="/divi">Division</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
        
      );
}

export default NavbarComponent;
