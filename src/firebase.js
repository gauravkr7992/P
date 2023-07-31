
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1JstWou2sVKwHhDhTYchXMuwECMnFoDs",
  authDomain: "gaurav-s-portfolio-da74f.firebaseapp.com",
  projectId: "gaurav-s-portfolio-da74f",
  storageBucket: "gaurav-s-portfolio-da74f.appspot.com",
  messagingSenderId: "212232499559",
  appId: "1:212232499559:web:76a9fd28e76c6e6f48ffc2"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore();