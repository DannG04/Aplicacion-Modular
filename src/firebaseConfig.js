// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgc0c5Q36B2MFfow6ztxSG1CFpcBrAsZQ",
  authDomain: "mi-app-modular-dann.firebaseapp.com",
  projectId: "mi-app-modular-dann",
  storageBucket: "mi-app-modular-dann.firebasestorage.app",
  messagingSenderId: "83946645591",
  appId: "1:83946645591:web:e082924d99f998fc305b12",
  measurementId: "G-SJK40PLHBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializar Firestore y exportarlo para usarlo en la app
export const db = getFirestore(app);