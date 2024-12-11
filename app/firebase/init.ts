// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWrOhoPEGHEWD1N04QmR0JhNZJOLHEUus",
  authDomain: "tlc-revenue.firebaseapp.com",
  projectId: "tlc-revenue",
  storageBucket: "tlc-revenue.firebasestorage.app",
  messagingSenderId: "991665778832",
  appId: "1:991665778832:web:306910917195384cc0a815",
  measurementId: "G-NR340VKVVJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
