import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
//import "firebase/functions";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4nZMhf_P4W8dKN4PSpoGgC9fXLKj4qDA",
  authDomain: "myproject-3aa68.firebaseapp.com",
  databaseURL: "https://myproject-3aa68.firebaseio.com",
  projectId: "myproject-3aa68",
  storageBucket: "myproject-3aa68.appspot.com",
  messagingSenderId: "448672931184",
  appId: "1:448672931184:web:5c8cb99c0687a182d703b5",
  measurementId: "G-JM5L1T2W0N",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const storage = app.storage();
const auth = firebase.auth();

export { db, storage, auth };
