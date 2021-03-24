import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzqaOEpldMie-bazjGXvQvFsXp2-3coHE",
    authDomain: "twitter-clone-d03a8.firebaseapp.com",
    projectId: "twitter-clone-d03a8",
    storageBucket: "twitter-clone-d03a8.appspot.com",
    messagingSenderId: "267974532207",
    appId: "1:267974532207:web:20a4954dd3099f520d019a",
    measurementId: "G-EQR69VJ6CV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;

