import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
