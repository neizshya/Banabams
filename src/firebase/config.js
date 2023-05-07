// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDJba6_sJvKMilS7b033TQmVgOdjl8a1EM",

  authDomain: "banabams-fdbd5.firebaseapp.com",

  databaseURL:
    "https://banabams-fdbd5-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "banabams-fdbd5",

  storageBucket: "banabams-fdbd5.appspot.com",

  messagingSenderId: "190791898362",

  appId: "1:190791898362:web:0f364e5e15e2893b2a6543",

  measurementId: "G-9TE4Y2QKY3",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getDatabase(app);
