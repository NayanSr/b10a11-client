import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;





















/* 
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCwIzkFU9lKPfqWixGCMkOsRtM8TqDcvtw",
  authDomain: "b10-a11-historical-artifact.firebaseapp.com",
  projectId: "b10-a11-historical-artifact",
  storageBucket: "b10-a11-historical-artifact.firebasestorage.app",
  messagingSenderId: "510062775117",
  appId: "1:510062775117:web:d4b6e848ff615de36a8504"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 */