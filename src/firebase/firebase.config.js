// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvSg8twElqraQGxWSwviLrIIrafC_ItwQ",
  authDomain: "italy-visa.firebaseapp.com",
  projectId: "italy-visa",
  storageBucket: "italy-visa.appspot.com",
  messagingSenderId: "987147138999",
  appId: "1:987147138999:web:8c908e4055ef2ff878da32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app