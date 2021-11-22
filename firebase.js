import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCEeBRojXEXkxivFAbhZ7tSl73YMomnuY",
  authDomain: "global-chat-80ab3.firebaseapp.com",
  projectId: "global-chat-80ab3",
  storageBucket: "global-chat-80ab3.appspot.com",
  messagingSenderId: "405392556419",
  appId: "1:405392556419:web:562d012b108561b8be76b6",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
