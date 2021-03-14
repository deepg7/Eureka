import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcG44f7PUu2KT1sX48CurYHXAWzINbIB4",
  authDomain: "hack-43248.firebaseapp.com",
  projectId: "hack-43248",
  storageBucket: "hack-43248.appspot.com",
  messagingSenderId: "350212425548",
  appId: "1:350212425548:web:9a7cb521480466a0f731e9",
  measurementId: "G-2264NL1P80",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
