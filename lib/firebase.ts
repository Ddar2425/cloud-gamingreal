import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmiK88Z4Z8JAaTOboNyjuUx5ttEAR8emc",
  authDomain: "vortex-gaming-d6f70.firebaseapp.com",
  projectId: "vortex-gaming-d6f70",
  storageBucket: "vortex-gaming-d6f70.appspot.com",
  messagingSenderId: "344818162686",
  appId: "1:344818162686:web:cc90acbbcfd619c0cf7eaf",
  measurementId: "G-6LY2FBM6T4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔐 AUTH (THIS WAS MISSING)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();