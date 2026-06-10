// TODO: Replace this object with your actual Firebase Configuration keys from Step 2!
 const firebaseConfig = {
    apiKey: "AIzaSyD27_oVOMY_7M7aSOh_H6VP6pUtqaRok4w",
    authDomain: "wifi-splash-page-9d07b.firebaseapp.com",
    projectId: "wifi-splash-page-9d07b",
    storageBucket: "wifi-splash-page-9d07b.firebasestorage.app",
    messagingSenderId: "915776610963",
    appId: "1:915776610963:web:7d57b5f0e05c19ce16e366",
    measurementId: "G-E4WK8167DH"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Grab HTML elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const messageText = document.getElementById('message');

// Logic for creating an account (Sign Up)
signupBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            messageText.style.color = "green";
            messageText.innerText = "Account created successfully! You are logged in.";
        })
        .catch((error) => {
            messageText.style.color = "red";
            messageText.innerText = error.message;
        });
});

// Logic for logging in (Sign In)
loginBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            messageText.style.color = "green";
            messageText.innerText = "Welcome back! Login successful.";
            // Optional: window.location.href = "welcome.html"; (Redirect user here)
        })
        .catch((error) => {
            messageText.style.color = "red";
            messageText.innerText = error.message;
        });
});
