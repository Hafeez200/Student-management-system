// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Q7278AxT3VtWd4Q-IXJ8rWmV2j01UsM",
  authDomain: "student-management-syste-4459c.firebaseapp.com",
  projectId: "student-management-syste-4459c",
  storageBucket: "student-management-syste-4459c.appspot.com",
  messagingSenderId: "837677173983",
  appId: "1:837677173983:web:742f5ecf95fe4c9d15ed6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export{db}