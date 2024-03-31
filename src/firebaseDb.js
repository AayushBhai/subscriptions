import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9u9woMVRzo_Mm4tVeATeyRvxHhmMOY-Y",
  authDomain: "subscriptions-aac0a.firebaseapp.com",
  projectId: "subscriptions-aac0a",
  storageBucket: "subscriptions-aac0a.appspot.com",
  messagingSenderId: "916055180510",
  appId: "1:916055180510:web:4553de66863327dcb8ee4f"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
