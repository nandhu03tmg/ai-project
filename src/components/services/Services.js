import React from 'react';
import './Services.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import TopNav from '../TopNav/TopNav';
import securecloud from '../../assets/securecloud.png';
import fc from '../../assets/fc.png';
import mff from '../../assets/mff.jpg';



const Services = () =>{
	return (
<div id='services' className="mt-5 pt-3 mt-lg-0  ">
<div>
        <TopNav/>
      </div>
  <Container fluid className="col-10">
    <div className="row">
      <h1 className="text-center">Our Services</h1>
      <div className="col-md-4 my-2">
        <Card className="shadow rounded">
          <img src={fc} alt="React Logo" className="Card-img-top rounded" />
          <Card.Body>
            <Card.Title>
              Free cloud
            </Card.Title>
            <Card.Text>
               We Porvide Free and unlimited Cloud storage for Students untill their studying period get over
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4 my-2">
        <Card className="shadow rounded">
          <img src={securecloud} alt="React Logo" className="Card-img-top rounded" />
          <Card.Body>
            <Card.Title>
              Security
            </Card.Title>
            <Card.Text>
            Firebase's algorithms secure cloud storage, peace of mind for data owners.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4 my-2">
        <Card className="shadow rounded">
          <img src={mff} alt="React Logo" className="Card-img-top rounded" />
          <Card.Body>
            <Card.Title>
              Supports Multiple file formats
            </Card.Title>
            <Card.Text>
            Supporting multiple file formats expands versatility, simplifies workflows, and enhances user experience.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>    
  </Container>
</div>
		);
};

export default Services;