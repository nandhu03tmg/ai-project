import React,{ useState } from 'react';
import './SignIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Form, Button,Container }from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import logimg from '../../assets/logimg.png';
import TopNav from '../TopNav/TopNav';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import auth from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';





const SignIn = () =>{
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
       await createUserWithEmailAndPassword(auth, email, password);
     
       swal.fire({
            title: `Signup Successfully`,
            icon : 'success'
        });
      navigate('/terms');
    } catch (error) {
      swal.fire({
            title : error,
            icon : 'error'
        });
    }
  };

	return (
       <div id="signPage">
       <div>
    <TopNav/>
    </div>
          <Container fluid className="col-10">
      <div className="row">
       <div className="col-lg-6 col-md-6 col-12 py-lg-0 py-1 " id="firstcol">
                  <img src={logimg} class="img-fluid mt-5 lg-mt-0" id='mainimga' alt="signimg"/>
              </div>     
               <div className="col-lg-6 col-md-6 col-12  ">
                   <h6>Signup</h6>
                   <hr className="mb-3"/>
                    Scan your Id Card
            <Link to="/scaner">
               <Button variant="primary" className="shadow my-1">
                    <FontAwesomeIcon icon={faCamera} className="icon"/>
               </Button>
            </Link>
                  <Form className="my-lg-2 my-3" onSubmit={handleSignup}>
                <Form.Group className="mb-2"  controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email" 
          onChange={handleEmailChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        </Form.Group>
       
      <Button variant="primary" type="submit" className="px-4 py-2 mb-2">
        Signup
      </Button>
     
      <Form.Group>
        <b>Already have an account?<Link to="/Login">
        <u style={{color:'red'}}> Login</u></Link></b>
      </Form.Group>
                </Form>

              </div>              
          </div>
          </Container>
    </div>
		);
};

export default SignIn;