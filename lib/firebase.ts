// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmiK88Z4Z8JAaTOboNyjuUx5ttEAR8emc",
  authDomain: "vortex-gaming-d6f70.firebaseapp.com",
  projectId: "vortex-gaming-d6f70",
  storageBucket: "vortex-gaming-d6f70.firebasestorage.app",
  messagingSenderId: "344818162686",
  appId: "1:344818162686:web:cc90acbbcfd619c0cf7eaf",
  measurementId: "G-6LY2FBM6T4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);