import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCt_th1rt5N_or1RzCpM14WlxpfFXdX5uA",
    authDomain: "clone-6cf0d.firebaseapp.com",
    projectId: "clone-6cf0d",
    storageBucket: "clone-6cf0d.appspot.com",
    messagingSenderId: "502834175848",
    appId: "1:502834175848:web:a0519b96100c15c0d100dd",
    measurementId: "G-B347WXZQY2"
  };
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };