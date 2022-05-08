// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8gC1EDXSF530b7xgG-v7gqA05JYbQtkk",
  authDomain: "warehouse-ae41e.firebaseapp.com",
  projectId: "warehouse-ae41e",
  storageBucket: "warehouse-ae41e.appspot.com",
  messagingSenderId: "945769854247",
  appId: "1:945769854247:web:e2db7a0cab302f7648e502"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;