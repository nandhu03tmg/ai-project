import React from 'react';
import './TopNav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
 

const TopNav = () =>{
	return (
		
	<Navbar bg="light" expand="lg" id="navbar">
      <Container>
        <Navbar.Brand className="bold"><b>StorageApp</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">        
            <Link to="/profile" className="mx-lg-3 mt-lg-1">
               <FontAwesomeIcon icon={faUser} className="icon" style={{width:'24px',fontSize:'30px'}}/>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
			
		);
};

export default TopNav;