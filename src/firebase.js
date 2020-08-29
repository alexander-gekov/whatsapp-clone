import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfWu3_-fvODzokIoBLdQWeLc7iBZ8wDmI",
  authDomain: "whatsapp-clone-b968b.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-b968b.firebaseio.com",
  projectId: "whatsapp-clone-b968b",
  storageBucket: "whatsapp-clone-b968b.appspot.com",
  messagingSenderId: "463697533854",
  appId: "1:463697533854:web:05d24fc21cfdd9a868948f",
  measurementId: "G-XQSSD7Y30X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;