import React from 'react';
import './TopNav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
 

const TopNav = () =>{
	return (
		
	<Navbar bg="light" expand="lg" id="navbar">
      <Container>
        <Navbar.Brand className="bold"><b>StorageApp</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <Link to="/home">
            <Nav.Link href="#home" className="text-primary"><b>Home</b></Nav.Link>
          </Link>
          <Link to="/services">
            <Nav.Link href="#services"className="text-primary"><b>Service</b></Nav.Link>
            </Link>
            <Link to ="/contact">
            <Nav.Link href="#contact"className="text-primary"><b>Contact</b></Nav.Link>
            </Link>
            <Link to = "/about">
            <Nav.Link href="#about"className="text-primary"><b>About</b></Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
			
		);
};

export default TopNav;