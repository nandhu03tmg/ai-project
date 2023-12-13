import React,{useEffect} from 'react';
import './Scaner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Webcam from "react-webcam";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
//import Tesseract from 'tesseract.js';
//import cv from 'opencv.js';

import TopNav from '../TopNav/TopNav';
import Swal from 'sweetalert2';

const Scaner = () =>{

  const navigate = useNavigate();


  useEffect(() => {
    const isFirstVisit = !localStorage.getItem('visited_before');
    if (isFirstVisit) {
      const timer = setTimeout(() => {
        Swal.fire("Can't find any text" ,"Show your identity card closly", "warning" )
        localStorage.setItem('visited_before', true);
      navigate('/Signup');// Change this to the URL of the page you want to navigate to
      }, 15000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        Swal.fire("Can't find any text" ,"Show your identity card closly", "warning" )
        
        navigate('/Signup'); // Change this to the URL of the page you want to navigate to
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);
 /*
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => {
        alert(`Error accessing camera: ${err}`);
      });
  }, []);

  const canvasRef = useRef(null);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
  };

  const detectIdentityCard = (imageData) => {
    // Convert the image to grayscale
    const gray = cv.cvtColor(imageData, cv.COLOR_RGBA2GRAY);
  
    // Apply edge detection to the image
    const edges = new cv.Mat();
    cv.Canny(gray, edges, 100, 200);
  
    // Apply template matching to detect the identity card template
    const template = cv.imread('identity-card-template.jpg');
    const result = new cv.Mat();
    cv.matchTemplate(edges, template, result, cv.TM_CCOEFF_NORMED);
    const maxVal = cv.minMaxLoc(result).maxVal;
  
    // Check if the maxVal is above a certain threshold to confirm that it's an identity card
    if (maxVal > 0.8) {
      return true;
    } else {
      return false;
    }
  };

  const extractText = (imageData) => {
    return Tesseract.recognize(imageData, { lang: 'eng' })
      .then(result => {
        return result.text;
      });
  };

  const scanImage = () => {
    const imageData = drawCanvas();
    if (detectIdentityCard(imageData)) {
      extractText(imageData)
        .then(text => {
          alert(`This is an identity card. Text: ${text}`);
        });
    } else {
      alert('This is not an identity card.');
    }
  };
  */
   
	return (		
	 <div id="scaner">
      <div>
        <TopNav/>
      </div>
      <div className="Col-6 mt-5">
      <Link to="/Signup">
        <Button variant="primary">Back <FontAwesomeIcon icon={faCircleArrowLeft} style={{color:'white', fontSize:'16px'}} className="icon"/></Button>
      </Link>
      {/*
      <div>
    <video ref={videoRef}></video>
    <canvas ref={canvasRef}></canvas>
    <button onClick={scanImage}>Scan Image</button>
  </div>   
  */}
      
     <div id="camera">
     <Webcam/>
  </div>
     </div>
   </div>
		);
};

export default Scaner;