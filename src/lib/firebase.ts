import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Replace with real config
const firebaseConfig = {
  apiKey: "AIzaSyAu6fNPZ_yuB4IyALrcgsg1pXvTHhWwo6E",
  authDomain: "nanozenix-d70ba.firebaseapp.com",
  projectId: "nanozenix-d70ba",
  storageBucket: "nanozenix-d70ba.firebasestorage.app",
  messagingSenderId: "1055799281317",
  appId: "1:1055799281317:web:b6b202c97dd9faefe12f4c",
  measurementId: "G-3L7JT4DHWD"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
