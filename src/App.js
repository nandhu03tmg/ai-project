import * as React from 'react';
import {Routes,Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './components/Login/LogIn';
import Signin from './components/SignIn/SignIn';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Scaner from './components/scaner/Scaner';
import Terms from './components/terms/Terms';
import StorePage from './components/storepage/StorePage';
import Profile from './components/profile/Profile';



function App() {

  return (    
  <Routes>    
    <Route exact path="/" element={<Home/>}/>  
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Signup" element={<Signin/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/scaner" element={<Scaner/>}/>   
    <Route path="/terms" element={<Terms/>}/>   
    <Route path="/storepage" element={<StorePage/>}/>   
    <Route path="/profile" element={<Profile/>}/>   
  </Routes>
  );
}

export default App;
