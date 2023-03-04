import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDA5bLb9aDtipo9o2usdHSaXr0x3Sg7y50",
    authDomain: "clone-e19ee.firebaseapp.com",
    projectId: "clone-e19ee",
    storageBucket: "clone-e19ee.appspot.com",
    messagingSenderId: "1056271821189",
    appId: "1:1056271821189:web:aa2f57f6af64093b59bcec",
    measurementId: "G-88493NEZLW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };