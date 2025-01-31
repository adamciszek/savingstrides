import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);