import React,{useState,useRef, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { getStorage, ref, uploadBytes , listAll, getDownloadURL, getMetadata,deleteObject } from 'firebase/storage';
import Swal from "sweetalert2";
import { initializeApp } from 'firebase/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder,faFile, faTrash,faFileUpload } from '@fortawesome/free-solid-svg-icons';



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


const CreateFolder = (props) =>{

 const [showComponent, setShowComponent] = useState(true);

  const handleDelete = () => {
      Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
        setShowComponent(false);
  }
})

  }; 
 

 

  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchfiles()
  }, []);
  
  
  const  fetchfiles = () => {
    // Code to fetch files from Firebase Storage
    const folderRef = ref(storage, 'folder/');
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
    const storageRef = ref(storage, `folder/${file.name}`);
    await uploadBytes(storageRef, file);
    Swal.fire('File uploaded successfully','','success').then(() => {
      fetchfiles();
    })
  
  }
  





    

  const fileInput = useRef(null);


  const handleDownload = async (a, b) => {
    const fileName = b;
    const fileRef = ref(storage,`folder/${fileName}`);
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
      showComponent &&(
      <div className='Container-fluid col-12' >
        <div className='row' style={{backgroundColor:'#eee',position:'relative'}}>
        <div className='mx-4 col-lg-10'>
          
          <FontAwesomeIcon icon={faFolder} className='mt-2' style={{fontSize:'20px'}}/>
          <p className='mx-4' style={{fontWeight:'bold'}}> {props.name} / </p>
         
        </div>         
        <div className='col' style={{top:'40%',left:'80%',position:'absolute'}}>
           <FontAwesomeIcon icon={faFileUpload} style={{fontSize:'20px',marginRight:'10px'}}  onClick={ ()=>{handleButtonClick()}}
          type="file"
          ref={fileInput}/>
          <input
        ref={fileInputRef}
        type="file"
        accept={props.accept}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
           <FontAwesomeIcon icon={faTrash} style={{fontSize:'20px'}} onClick={handleDelete}/>
        </div>
        <div >
      {files.map((file) => (
        <div key={file.name} style={{display:'flex',alignItems:'center',margin:'5px', padding:'2px',justifyContent:'space-around'}}>
          {/* <img src={file.url} alt={file.name}  onClick={() => handleDownload(file.url, file.name)}style={{width:'80px'}}/> */}
          <FontAwesomeIcon icon={faFile} size="2x" onClick={() => handleDownload(file.url, file.name)}/>
          <p style={{fontSize:'10px'}}  onClick={() => handleDownload(file.url, file.name)}>{file.name} </p>
          <FontAwesomeIcon icon={faTrash} style={{fontSize:'20px'}}  onClick={() => handleDeleteClick(ref(storage, file.name))}/>
        </div>
      ))}
    </div>
        </div>
      </div>
      )
    );
};

export default CreateFolder;