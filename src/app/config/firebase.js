import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "reventsfirebase-73313.firebaseapp.com",
    databaseURL: "https://reventsfirebase-73313.firebaseio.com",
    projectId: "reventsfirebase-73313",
    storageBucket: "reventsfirebase-73313.appspot.com",
    messagingSenderId: "899562411600",
    appId: "1:899562411600:web:70117be1530faf9f96e355"

}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;