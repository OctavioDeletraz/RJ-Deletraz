// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQcqkvoSpaaegYQdetYkaKQqS22NMzSUY",
    authDomain: "bonneville-react.firebaseapp.com",
    projectId: "bonneville-react",
    storageBucket: "bonneville-react.appspot.com",
    messagingSenderId: "542447645018",
    appId: "1:542447645018:web:4f4a32e1e18cb4f7f44363",
    measurementId: "G-BTDY9D9FLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)