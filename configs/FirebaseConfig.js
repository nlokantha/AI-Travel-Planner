// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsBdOH4Mz_JpzA9DqVbW42ZlZ0aHrwUlM",
    authDomain: "fir-demo-3953b.firebaseapp.com",
    databaseURL: "https://fir-demo-3953b-default-rtdb.firebaseio.com",
    projectId: "fir-demo-3953b",
    storageBucket: "fir-demo-3953b.appspot.com",
    messagingSenderId: "614829356287",
    appId: "1:614829356287:web:a3aabc53bc7f9e619b08ca",
    measurementId: "G-VRS4Y4KHQC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
