import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAR5QIvfJo6ArzfMVwEvpP2RHwAQfja0D8",
    authDomain: "delaygram-5140b.firebaseapp.com",
    databaseURL: "https://delaygram-5140b-default-rtdb.firebaseio.com",
    projectId: "delaygram-5140b",
    storageBucket: "delaygram-5140b.appspot.com",
    messagingSenderId: "273413703652",
    appId: "1:273413703652:web:06fe4bb7e9378729d7e9f1",
    measurementId: "G-V3B5E1F40Z"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };