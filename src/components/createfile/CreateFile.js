import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Swal from "sweetalert2";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faTrash } from '@fortawesome/free-solid-svg-icons';




const CreateFile = (props) =>{

 const [showComponent, setShowComponent] = useState(true);

  const handleDelete = () => {
    Swal.fire("The Folder has been Successfully Created", "StorageApp", "success");
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


  return (
      showComponent &&(
      <div className='Container-fluid col-12' >
        <div className='row' style={{backgroundColor:'#eee',position:'relative'}}>
        <div className='mx-4 col-lg-10'>
          
          <FontAwesomeIcon icon={faFile} className='mt-2 mx-3' style={{fontSize:'80px'}}/>
          <p className='mx-4' style={{fontWeight:'bold'}}> {props.name} </p>
         
        </div>         
        <div className='col' style={{top:'40%',left:'80%',position:'absolute'}}>
           <FontAwesomeIcon icon={faTrash} style={{fontSize:'30px'}} onClick={handleDelete}/>
        </div>
        </div>
      </div>
      )
    );
};

export default CreateFile;