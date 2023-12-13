import React, { useEffect } from 'react';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Container, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate,Link } from 'react-router-dom';
import Swal from "sweetalert2";
import TopNav from '../TopNavtwo/TopNav';


const Profile = () =>{
  const history = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('email')){
      history('/home');
      Swal.fire('unAutherised User', '' , 'warning');
    }
  })


  function handleClick() {
      Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to Logout",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Logout !'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Logout Successfully !',
        'Your Accound has been removed on the Browser',
        'success'
      )
        localStorage.removeItem('email');
        history('/home');
    }
  })
  
  }

  let email = localStorage.getItem('email');

  return (
    <div id="profile">
          <div>
        <TopNav/>
      </div>
     
       <Container fluid className="col-lg-6" style={{backgroundColor:'#eee'}}>
        <div className="row">
         <FontAwesomeIcon
          icon={faUser}
          className="icon"
          style={{fontSize:'80px',
          color:'black',
          
          paddingBottom:'100px',
         }}/>

         <div className="" >
          <h6 className="display-5" style={{fontSize:'20px'}}>currently logedin</h6>
          <h1 style={{fontSize:'20px'}}><span>{email}</span></h1>
         </div>

         <row className="mt-5">
         <col-6>
         
         <Button variant="danger" onClick={handleClick} className="mb-3">Log Out</Button><br/>         
         
         <Link to="/storepage">
         <Button variant="primary" className="px-4">Back</Button>
         </Link>
         </col-6>
         </row>
</div>

       </Container>
    </div>
    );
};

export default Profile;