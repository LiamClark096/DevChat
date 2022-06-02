import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyD17JwZIM24w4a-UfGUrrV5BLmhuppFxo8",
  authDomain: "chat-c909a.firebaseapp.com",
  databaseURL: "https://chat-c909a-default-rtdb.firebaseio.com",
  projectId: "chat-c909a",
  storageBucket: "chat-c909a.appspot.com",
  messagingSenderId: "1094819406486",
  appId: "1:1094819406486:web:0b9458298cf872178b98b7",
  measurementId: "G-GRL8B5JCVD"
};
firebase.initializeApp(config);

export default firebase;
