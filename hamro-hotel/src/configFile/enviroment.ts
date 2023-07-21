export const environment = {
    production: false,
    apiKey: ''
  };
  

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmowod6rIM4i_u5LcLGQkJvTWu6jwdT-4",
  authDomain: "resort-388922.firebaseapp.com",
  databaseURL: "https://resort-388922-default-rtdb.firebaseio.com",
  projectId: "resort-388922",
  storageBucket: "resort-388922.appspot.com",
  messagingSenderId: "395257474609",
  appId: "1:395257474609:web:7c57a682de19aede06ef10",
  measurementId: "G-QQP96H7EEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);