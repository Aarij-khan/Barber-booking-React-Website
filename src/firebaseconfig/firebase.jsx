import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAAIgJwHxt1UWAhLlP3RwMU5a_B8zAbZWc",
    authDomain: "paractice-one.firebaseapp.com",
    projectId: "paractice-one",
    storageBucket: "paractice-one.appspot.com",
    messagingSenderId: "1016080307563",
    appId: "1:1016080307563:web:2f106c5aea2bb8e1eb682e"
  };
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);