// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm0KBN4vSmfJVVHYxIM8RgqtM5wcBoUH8",
  authDomain: "netflixgpt-7abd3.firebaseapp.com",
  projectId: "netflixgpt-7abd3",
  storageBucket: "netflixgpt-7abd3.appspot.com",
  messagingSenderId: "386146937822",
  appId: "1:386146937822:web:1a8ad368525141279d4b4f",
  measurementId: "G-WWLWDJ7LPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const Auth=getAuth()