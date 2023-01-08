// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaifoBtdHqkHukZf9IyOAD-EhEALiMg44",
  authDomain: "car-hire-330d6.firebaseapp.com",
  projectId: "car-hire-330d6",
  storageBucket: "car-hire-330d6.appspot.com",
  messagingSenderId: "561727531920",
  appId: "1:561727531920:web:5cdf6a8d709fe529f22115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;