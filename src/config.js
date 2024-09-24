// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNKbI9Vo8MhGfvFltkjkLcv_iZEj8y3fA",
  authDomain: "bsbe-alumni-page.firebaseapp.com",
  projectId: "bsbe-alumni-page",
  storageBucket: "bsbe-alumni-page.appspot.com",
  messagingSenderId: "97021366987",
  appId: "1:97021366987:web:669c39ee360a8ff5cd414e",
  measurementId: "G-PW57HF1YFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;