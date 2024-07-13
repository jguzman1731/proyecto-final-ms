import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDh_Dc4XTTXnkm8ypAyAk8JFsKQyFCR2xY",
  authDomain: "proyecto-unidad-educativa.firebaseapp.com",
  projectId: "proyecto-unidad-educativa",
  storageBucket: "proyecto-unidad-educativa.appspot.com",
  messagingSenderId: "929349730940",
  appId: "1:929349730940:web:09aa986d37bddc46f4fff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth();

