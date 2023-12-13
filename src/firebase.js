
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getStorage } from 'firebase/storage';



// Initialize Firebase
const firebaseConfig = {
   apiKey: "AIzaSyBNEjQJlwtFLfhXtAYgCbCjctH-xzihHoc",
  authDomain: "student-a98a7.firebaseapp.com",
  projectId: "student-a98a7",
  storageBucket: "student-a98a7.appspot.com",
  messagingSenderId: "963059862373",
  appId: "1:963059862373:web:93ae89244d58a34d532f8c"
};

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;
 export const storage = getStorage(app);