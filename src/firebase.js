import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBy9RN-rSo5Gz1szz8T9hWt9r0vt4dVamM",
  authDomain: "het-latin-lab.firebaseapp.com",
  projectId: "het-latin-lab",
  storageBucket: "het-latin-lab.firebasestorage.app",
  messagingSenderId: "61895123658",
  appId: "1:61895123658:web:036ff2b3977f9794d24a33",
  measurementId: "G-BBV41HHBVD"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)
export const auth = getAuth(app);
export const db = getFirestore(app);