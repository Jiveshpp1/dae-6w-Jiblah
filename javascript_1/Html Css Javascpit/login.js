console.log('initial js load');

// Import the functions you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

console.log('import');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQTllvhfaCWrEPxgZsMV7yy6t1jhOTQQQ",
  authDomain: "calendarpreject-thingy.firebaseapp.com",
  projectId: "calendarpreject-thingy",
  storageBucket: "calendarpreject-thingy.firebasestorage.app",
  messagingSenderId: "885696417935",
  appId: "1:885696417935:web:463af5e32b67a55554a0fa",
  measurementId: "G-XK7FLC21XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

console.log("Firebase initialized");

// Signup function
function registerUser(email, password){
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredetail) => {
            const user = userCredetail.user;
            console.log('User Created: ', user.email);
            alert('You have created your account :)');
            console.log("Redirecting to main.html...");
            window.location.replace("main.html");  // redirect after signup
        })
        .catch((error) => {
            console.error('Error:', error.code, error.message);
            alert(error.message);
        });
}

// Login function
function signInUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredetail) => {
            console.log('Signed in:', userCredetail.user.email);
            alert('Welcome back!');
            window.location.replace("main.html");  // redirect after login
        })
        .catch((error) => {
            console.error('Sign-in error:', error.code, error.message);
            alert(error.message);
        });
}

// Attach event listeners after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  
  const signupForm = document.getElementById('s_form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email_s').value;
      const password = document.getElementById('pass_s').value;
      registerUser(email, password);
    });
  }

  const loginForm = document.getElementById('login_form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('user_name').value;
      const password = document.getElementById('pass').value;
      signInUser(email, password);
    });
  }

});
