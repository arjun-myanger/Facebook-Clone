import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrxfKiLl3m-TeUQHU17i8iHtfHH8HqMFM",
    authDomain: "facebook-clone-be800.firebaseapp.com",
    projectId: "facebook-clone-be800",
    storageBucket: "facebook-clone-be800.appspot.com",
    messagingSenderId: "397890577152",
    appId: "1:397890577152:web:e1acbaa6627b11f9a2c9e5",
    measurementId: "G-EZV99PBF7D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;