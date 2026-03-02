// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6cqHXDtjh4kKTNBlutnRAsdhSucVllJI",
  authDomain: "netflixgpt-7e6b8.firebaseapp.com",
  projectId: "netflixgpt-7e6b8",
  storageBucket: "netflixgpt-7e6b8.firebasestorage.app",
  messagingSenderId: "719852770570",
  appId: "1:719852770570:web:2d97cb39908f73784f96f3",
  measurementId: "G-D0CX4YX04B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
