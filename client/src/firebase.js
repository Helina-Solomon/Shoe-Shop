// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shoe-shop-cc0f3.firebaseapp.com",
  projectId: "shoe-shop-cc0f3",
  storageBucket: "shoe-shop-cc0f3.appspot.com",
  messagingSenderId: "660280940313",
  appId: "1:660280940313:web:01573f28d37bdfa5959788"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);