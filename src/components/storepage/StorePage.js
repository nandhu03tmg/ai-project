import React, { useState,useRef , useEffect } from 'react';
import './StorePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Container,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFileUpload,faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";
import TopNav from '../TopNavtwo/TopNav';
import CreateFolder from '../createfolder/CreateFolder';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes , listAll, getDownloadURL, getMetadata,deleteObject } from 'firebase/storage';
import { useNavigate} from 'react-router-dom';
import { faFile ,faTrash} from "@fortawesome/free-solid-svg-icons";


const firebaseConfig = {
  apiKey: "AIzaSyBNEjQJlwtFLfhXtAYgCbCjctH-xzihHoc",
  authDomain: "student-a98a7.firebaseapp.com",
  projectId: "student-a98a7",
  storageBucket: "student-a98a7.appspot.com",
  messagingSenderId: "963059862373",
  appId: "1:963059862373:web:93ae89244d58a34d532f8c"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);



const StorePage = (props) =>{

  const [folders, setFolders] = useState([]);

  useEffect(() => {

    const parentFolderRef = ref(storage, "parentFolderName");

    listAll(parentFolderRef)
      .then((res) => {
        const folderPaths = res.prefixes.map((folderRef) => folderRef.fullPath);
        const folderNames = folderPaths.map((folderPath) => {
          const parts = folderPath.split("/");
          return parts[parts.length - 2]; // Return the second-last part of the path (i.e., the folder name)
        });
        setFolders(folderNames);
      })
      .catch((error) => {
        console.error("Error listing folders:", error);
      });
  }, []);

  const navigate = useNavigate();

useEffect(() => {
  if(!localStorage.getItem('email')){
    navigate('/home');
    Swal.fire('unAutherised User', '' , 'warning');
  }
})

  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchfiles()
  }, []);
  
  
  const  fetchfiles = () => {
    // Code to fetch files from Firebase Storage
    const folderRef = ref(storage, '');
  listAll(folderRef).then((res) => {
    const promises = res.items.map((itemRef) => {
      return Promise.all([getDownloadURL(itemRef), getMetadata(itemRef)]);
    });
    Promise.all(promises).then((results) => {
      const files = results.map((result) => {
        const url = result[0];
        const metadata = result[1];
        return { url, name: metadata.name };
      });
      setFiles(files);
    }).catch((error) => {
      console.error('Error getting file metadata:', error);
    });
  }).catch((error) => {
    console.error('Error listing files:', error);
  }); }
  // Code to display the files
  

  const fileInputRef = React.useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  }

 
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file);
    Swal.fire('File uploaded successfully','','success').then(() => {
      fetchfiles();
    })
  
  }
  





    
  const [inputValue, setInputValue] = useState("");
  const [components, setComponents] = useState([]);
  const fileInput = useRef(null);

  const handleFolderButtonClick = async () => {

   
    
              
    Swal.fire({
      title: "Folder name",
      input: "text",
      inputValue: inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      }
    }).then(async (result) => {
      if (result.value) {
          setInputValue(result.value);
            setComponents([...components, <CreateFolder name={result.value}/>])
            Swal.fire("The Folder has been Successfully Created", "StorageApp", "success");
             
        }
    });  
  
  };

  const handleDownload = async (a, b) => {
    const fileName = b;
    const fileRef = ref(storage, `${fileName}`);
    const downloadURL = await getDownloadURL(fileRef);
    window.open(downloadURL);
  };
 
  function deleteFile(fileRef) {
    deleteObject(fileRef)
      .then(() => {
        Swal.fire('File deleted successfully','', 'success');
      })
      .catch((error) => {
        Swal.fire(`${error}`,'', error);
      });
  }

  const handleDeleteClick = (fileRef) => {
    deleteFile(fileRef);
  };

  return (
  <div id="storepage">      
        
      <TopNav/>
      
       <Container fluid className="col-lg-6" style={{backgroundColor:'#B1B1B1',marginTop:'66px'}}>

        <Button
        onClick={ ()=>{handleButtonClick()}}
          type="file"
          ref={fileInput}
          id="plusbtn1"
          style={{ color:'#fff',fontSize:'25px' }}
          >
            <FontAwesomeIcon icon={faFileUpload}/>
        </Button>
        <input
        ref={fileInputRef}
        type="file"
        accept={props.accept}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />


        <Button
          id="plusbtn2"
          style={{color:'#fff',fontSize:'25px'}}
          onClick={handleFolderButtonClick}>
           <FontAwesomeIcon icon={faFolderPlus}/>
        </Button>
       
        

          {components}

          <div>
      {folders.map((folderName) => (
        <div key={folderName}>{folderName}</div>
      ))}
    </div>

          <div >
      {files.map((file) => (
        <div key={file.name} style={{backgroundColor:'#8C92AC',display:'flex',alignItems:'center',margin:'5px', padding:'2px',justifyContent:'space-around'}}>
          {/* <img src={file.url} alt={file.name}  onClick={() => handleDownload(file.url, file.name)}style={{width:'80px'}}/> */}
          <FontAwesomeIcon icon={faFile} size="2x" onClick={() => handleDownload(file.url, file.name)}/>
          <p style={{fontSize:'10px'}}  onClick={() => handleDownload(file.url, file.name)}>{file.name} </p>
         
          <FontAwesomeIcon icon={faTrash} style={{fontSize:'20px'}}  onClick={() => handleDeleteClick(ref(storage, file.name))}/>
        </div>
      ))}
    </div>



       </Container>

    </div>
    );
};

export default StorePage;