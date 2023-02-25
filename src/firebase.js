// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIaOnMUX2MboUEAsl5VppS4CGZ_4qImlM",
  authDomain: "quora-83269.firebaseapp.com",
  projectId: "quora-83269",
  storageBucket: "quora-83269.appspot.com",
  messagingSenderId: "125222233086",
  appId: "1:125222233086:web:e1f0750302554a11b856af",
  measurementId: "G-29NNKH4ZXS"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider };
export default db;
