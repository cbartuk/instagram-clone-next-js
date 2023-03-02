// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5Lqa5gwAWMBfX-k8-Dvur5al1OdXi6ew",
  authDomain: "insta-cbk.firebaseapp.com",
  projectId: "insta-cbk",
  storageBucket: "insta-cbk.appspot.com",
  messagingSenderId: "262156976755",
  appId: "1:262156976755:web:14f8a3ad8ae03dfff2a006",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export { app, db, storage };