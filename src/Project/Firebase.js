import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyCB0JJyIN9YIGWh8H4QIfjUXj0o_LwE2ok",
  authDomain: "login-97e23.firebaseapp.com",
  projectId: "login-97e23",
  storageBucket: "login-97e23.appspot.com",
  messagingSenderId: "517029142109",
  appId: "1:517029142109:web:736965d3a33251c380b7b4",
  measurementId: "G-DC507HFY06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provided = new GoogleAuthProvider();
