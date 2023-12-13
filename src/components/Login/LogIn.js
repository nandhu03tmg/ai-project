import React, {  useEffect, useState } from 'react';
import './LogIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Form, Button,Container }from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
import logimg from '../../assets/logimg.png';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import auth from '../../firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';





const LogIn = () =>{

  useEffect(() => {
    if (localStorage.getItem('email')){
      navigate('/storepage');
    }
  })

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);      
       swal.fire({
            title: `Login successfully`,
            icon : 'success'
        });
      navigate('/storepage');
      localStorage.setItem('email', `${email}`);
    } catch (error) {
      
      swal.fire({
            title : error,
            icon : 'error'
        });
    }
  };

 const handleResetPassword = (event) => {
    event.preventDefault();


 swal.fire({
    title: "Forgot Password",
    text: "Please enter your email address",
    input: "email",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Submit",
    showLoaderOnConfirm: true,
    preConfirm: (email) => {
      return email;
    },
    allowOutsideClick: () => !swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      const email = result.value;
      // handle password reset with email

        sendPasswordResetEmail(auth, email)
      .then(() => {
        swal.fire({
          icon: "success",
          title: "Password reset email sent",
          text: "Please check your email inbox to reset your password.",
        });
      })
      .catch((error) => {
        swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      });
    }
  });




  };



	return (    
      <div id="LogPage">
        <div>
          <TopNav/>
        </div>
        <Container fluid className="col-10">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 py-lg-0 py-1 " id="firstcol">
              <img src={logimg} class="img-fluid" id='mainimga' alt="logimg"/>
            </div>
            <div className="col-lg-6 col-md-6 col-12  " >
              <h6>LogIn</h6>
              <hr/>

              <Form className="my-lg-2 my-3" onSubmit={handleSignIn} >
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={handleEmailChange}
                    placeholder="Enter email"
                    />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={handlePasswordChange} 
                    />
                </Form.Group>
            
                <Form.Group className="mb-4">
                  <Form.Text><u style={{color:'blue'}} 
                   onClick={handleResetPassword}>
                   Forgot password?
                   </u></Form.Text>       
                </Form.Group>

               
                  <Button variant="primary"
                    type="submit" 
                    className="px-4 py-2 mb-2"
                    >
                    Login
                  </Button>
               

                <Form.Group>
                  <b id="boldq"> Don't have an account? 
                    <Link to="/Signup">
                      <u style={{color:'red'}}>Register</u>
                    </Link>
                  </b>
                </Form.Group>
              </Form>
            </div> 
          </div>
        </Container>
      </div>
		);
};

export default LogIn;