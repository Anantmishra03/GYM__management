// Firebase code


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuf4l97aufxn2xW4vtkLRIzzmxb2B-Bpo",
  authDomain: "gym-management-c1f10.firebaseapp.com",
  projectId: "gym-management-c1f10",
  storageBucket: "gym-management-c1f10.firebasestorage.app",
  messagingSenderId: "58963986231",
  appId: "1:58963986231:web:7b66516ef2ebf798d9fcb2",
  measurementId: "G-XZHZ03BBZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


// Submit 
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()

  //  Input 
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Loggin in...")
      window.location.href = "dashboard.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });

})
