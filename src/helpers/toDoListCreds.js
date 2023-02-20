// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7kfsfQg0CVFU8HPVtWd7tNCchi5c5ojo",
  authDomain: "todoapp-ac272.firebaseapp.com",
  projectId: "todoapp-ac272",
  storageBucket: "todoapp-ac272.appspot.com",
  messagingSenderId: "219832343813",
  appId: "1:219832343813:web:2f209499fa6f78dfe46b6c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
