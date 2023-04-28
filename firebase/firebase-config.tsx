// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-sYD6MPsLPWF68D-_OhCyj5f2G72pwbU",
  authDomain: "suti-e9aba.firebaseapp.com",
  projectId: "suti-e9aba",
  storageBucket: "suti-e9aba.appspot.com",
  messagingSenderId: "629346615612",
  appId: "1:629346615612:web:1145f28421a0aa92c15e39",
  measurementId: "G-H56NJ2HTC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);