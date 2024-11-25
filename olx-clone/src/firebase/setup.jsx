
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDZ7c3SkeB-nyeS5BxaOyfo5AT3N4RX-XM",
  authDomain: "olx-clone-5beab.firebaseapp.com",
  projectId: "olx-clone-5beab",
  storageBucket: "olx-clone-5beab.firebasestorage.app",
  messagingSenderId: "438307320802",
  appId: "1:438307320802:web:a571074020f04e770f7fbb"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);