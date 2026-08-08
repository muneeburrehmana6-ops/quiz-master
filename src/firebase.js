import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnIFO_601kSYH7m2iaQo-YXXcm88QsmJk",
  authDomain: "configure--analytics-9f2f3.firebaseapp.com",
  projectId: "configure--analytics-9f2f3",
  storageBucket: "configure--analytics-9f2f3.firebasestorage.app",
  messagingSenderId: "913258626811",
  appId: "1:913258626811:web:d69159c6163e99cbbd3a5e",
};

const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

// Firestore Database
export const db = getFirestore(app);

export default app;