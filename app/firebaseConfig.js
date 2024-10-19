
// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // If using Firestore
import { getDatabase } from "firebase/database"; // If using Realtime Database

const firebaseConfig = {
    apiKey: "AIzaSyCJN4AuHqtq0SSCm3I4lmcDF8tR_PghLXM",
    authDomain: "renny-shop.firebaseapp.com",
    projectId: "renny-shop",
    storageBucket: "renny-shop.appspot.com",
    messagingSenderId: "12099061426",
    appId: "1:12099061426:web:cdcf6fda5ddad4cf4d2bab",
    measurementId: "G-3KXJKZ686F"
  };
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app); // If using Firestore
export const database = getDatabase(app); // If using Realtime Database
