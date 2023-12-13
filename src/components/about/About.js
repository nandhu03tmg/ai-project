import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Container} from 'react-bootstrap';
import about from '../../assets/about.png';

import TopNav from '../TopNav/TopNav';


const About = () =>{
	return (
		<div id="about">
          <div>
        <TopNav/>
      </div>
             <Container fluid className="col-10">
			<div className="row">
			 <div className="col-lg-6 col-md-6 col-12 py-lg-0 py-5 ">
                  <img src={about} alt="React Logo" class="img-fluid" id='mainimg'/>
              </div>
              <div className="col-lg-6 col-md-6 col-12  pt-5 mt-lg-5">
                   <h6>About us</h6>
                   <h1 className="display-5"><span>StorageApp</span></h1>
                   <p className="my-lg-2 my-3">
                This is a fully (paid free) cloud storage 
                service, only for students with their 
                Identity card Verification using Artificial 
                Inteligence. This Site can be created by Varatharaj iii bca   
                </p>

              </div>             
          </div>
          </Container>
		</div>
		);
};

export default About;