import React from 'react';
import './Terms.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Card,Button,Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'


const Terms = () =>{

	return (
		<div id="terms">
	<Card style={{ width: '30rem' }}> 
	<Link to="/Signup" className="ms-auto">
         <FontAwesomeIcon icon={faSquareXmark}  style={{ color:'darkred' }} /></Link>
          <Card.Title className="text-center"><b>Terms & Conditions</b></Card.Title>
      <Card.Body>
        
        <Card.Text>
        <ol>
         <li>If you use this website (storageapp) you must above the age 10</li>
		 <li>If you create a profile in this website (storageapp) that will after your id card vailid date will be 
		expaired</li>
		 <li>Some times our website can be make a maintanence break like it just a half a day ,so that the time only
		you can't access .</li></ol>
		<Form.Check            
            label="Accept all Terms & Conditions"            
          />

        </Card.Text><center>
        <Link to="/Login">
        	<Button variant="success" >Continiue</Button>
        </Link>
        </center>
      </Card.Body>
    </Card>
</div>
		);
};

export default Terms;