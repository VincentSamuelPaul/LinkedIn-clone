import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAr6yqP03gl33Bdm47Wux9cnZ-e73yKTS0",
    authDomain: "linkedin-f1620.firebaseapp.com",
    projectId: "linkedin-f1620",
    storageBucket: "linkedin-f1620.appspot.com",
    messagingSenderId: "804843459239",
    appId: "1:804843459239:web:0143a7bcb3a61d2f59c182"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };