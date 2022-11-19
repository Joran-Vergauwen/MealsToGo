import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJDH4g7OTOWg9jyr7eFmUMgnoPJBbuieA",
  authDomain: "mealstogo-5dbdd.firebaseapp.com",
  projectId: "mealstogo-5dbdd",
  storageBucket: "mealstogo-5dbdd.appspot.com",
  messagingSenderId: "4298239448",
  appId: "1:4298239448:web:e0108ba33616a75caf56ad",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
