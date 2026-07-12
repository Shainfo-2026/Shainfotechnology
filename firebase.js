// Firebase Configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// Your Firebase Config

const firebaseConfig = {
  apiKey: "AIzaSyAyPLokOO9XGcOuIdJITjBaAx378ds55us",
  authDomain: "sha-infotechnology-reviews.firebaseapp.com",
  projectId: "sha-infotechnology-reviews",
  storageBucket: "sha-infotechnology-reviews.firebasestorage.app",
  messagingSenderId: "456947271362",
  appId: "1:456947271362:web:6d37f73d83bd0d769e9d5b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Firestore Database

const db = getFirestore(app);

export { db };