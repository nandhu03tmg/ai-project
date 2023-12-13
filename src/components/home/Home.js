import React, { useEffect } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Button,Container} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

import TopNav from '../TopNav/TopNav';

import homeimg from '../../assets/home.jpg';

const Home = () =>{

const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('email')){
      navigate('/storepage');
    }
  })

	return (	    
	     <div id='home'>
       <div>
        <TopNav/>
      </div>
        <Container fluid className="col-10">
          <div className="row">
              <div className="col-lg-6 col-md-6 col-12 order-1 pt-5">
                <h1 className="display-4">Welcome to <br/><span>StorageApp</span></h1>
                <p className="my-lg-2 my-3">
                This is a fully (paid free) cloud storage 
                service, only for students with their 
                Identi card Verification using Artificial 
                Inteligence</p>      
                <Link to="/Login">
                   <Button variant="primary"  className="my-lg-3 my-3" > Get Started</Button>                  
                   </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-12 py-lg-0 py-4 order-sm-2">
                  <img src={homeimg} alt="React Logo" className="img-fluid" />
              </div>
          </div>
          </Container>
       </div>
    
		);
};

export default Home;