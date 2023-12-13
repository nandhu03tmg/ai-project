import React , { useRef,useState } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form }from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import emailjs from '@emailjs/browser';
import {Container} from 'react-bootstrap';
import Swal from 'sweetalert2';
import TopNav from '../TopNav/TopNav';


const Contact = () =>{

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

 const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

 if (name === '' || message === '' || email === '' ) {
      Swal.fire(
            'Error!',
            'Please fill all the Fields!',
            'error'
          )
    } else {

    emailjs.sendForm('service_edyjn3m', 'template_x0r5grz', form.current, 'rOErVzOvWuL7-CzfJ')
      .then((result) => {
        Swal.fire('Your Message successfully','', 'success');
          e.target.reset();
      }, (error) => {
          Swal.fire(
            'Error!',
            'Check your Internet connection!',
            'error'
          )
      });
     } 
  };




	return (
	   <div id='contact'>
     <div>
        <TopNav/>
      </div>
        <Container fluid className="col-10">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 text-center order-1 ">
          <div  className="my-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon"/>
            <div className="title">Address</div>
            <div className="details">3/144 Tirumangalam<br/>Madurai-625706</div>
           </div> 
           <div className="my-4">
           <FontAwesomeIcon icon={faPhone} className="icon"/>
            <div className="title">Phone</div>
            <div className="details">+91 936 073 3323<br/>+91 999 492 6069</div>
           </div> 
           <div className="my-4">
           <FontAwesomeIcon icon={faEnvelope} className="icon"/>           
            <div className="title">Email</div>
            <div className="details">tamilgreenscreenlyrics@gmail.com<br/>varathan2512002@gmail.com</div>
           </div> 
        </div>
        <div className="col-lg-8 col-md-8 col-12 order-sm-2 my-1 lg-my-5 mt-4 pt-5">
          <h1>Send us a message</h1>
          <p className="h6">If you may have any other needs or quries related to our application, you can send me message from here. It's my pleasure to help you</p>
        
  <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">       
        <Form.Control 
          type="text" 
          placeholder="Enter your name" 
          name="user_name" 
          onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="email" 
          placeholder="Enter your email" 
          name="user_email"
          onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">        
        <Form.Control 
          as="textarea"
          rows={3} 
          placeholder="Enter your message..."  
          name="message" 
          onChange={(e) => setMessage(e.target.value)}/>
      </Form.Group>
       <Button variant="primary"  type="submit">Send Now</Button>{' '}
    </Form>
    </div>   
      </div>
      </Container>
     </div>
		);
};

export default Contact;