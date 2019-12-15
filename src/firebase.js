import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyTnUbHxZPJrAs57ZRBR_9Ke1T8pagYdc",
  authDomain: "internship-assignment-b2599.firebaseapp.com",
  databaseURL: "https://internship-assignment-b2599.firebaseio.com",
  projectId: "internship-assignment-b2599",
  storageBucket: "internship-assignment-b2599.appspot.com",
  messagingSenderId: "101695779050",
  appId: "1:101695779050:web:9f40e418054a5f5b7de793",
  measurementId: "G-JS32PZJCKK"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
