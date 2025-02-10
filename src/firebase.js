// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0CdpsfAZCXp6Jk3aG_VHgmF2pISxoY1o",
    authDomain: "savingstride.firebaseapp.com",
    databaseURL: "https://savingstride-default-rtdb.firebaseio.com",
    projectId: "savingstride",
    storageBucket: "savingstride.firebasestorage.app",
    messagingSenderId: "995103266534",
    appId: "1:995103266534:web:a89039e821f016b0f40d27",
    measurementId: "G-T6P91ZFF55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);