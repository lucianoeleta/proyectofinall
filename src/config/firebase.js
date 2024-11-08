// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3hrtMAz1Bf63_t3eRrTqE-R1ej6pDG6Q",
  authDomain: "proyectofinal-ferreteria.firebaseapp.com",
  projectId: "proyectofinal-ferreteria",
  storageBucket: "proyectofinal-ferreteria.firebasestorage.app",
  messagingSenderId: "947357577405",
  appId: "1:947357577405:web:a50910bfd47cedb23987d4",
  measurementId: "G-0TF27D9ZEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };