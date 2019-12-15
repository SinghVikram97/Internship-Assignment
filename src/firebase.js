import firebase from "./firebase";
import "firebase/firestor";

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
