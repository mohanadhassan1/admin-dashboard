// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJAhLNpPmXZpFkeb3Zb1BnV531GwZSclY",
  authDomain: "admin-dashboard-68c6b.firebaseapp.com",
  projectId: "admin-dashboard-68c6b",
  storageBucket: "admin-dashboard-68c6b.appspot.com",
  messagingSenderId: "707180321091",
  appId: "1:707180321091:web:7ab6fca6a1da7a473477f6",
  measurementId: "G-TVRR1TPKN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
