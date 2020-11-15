import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBrTGu_4XDbWf3Tf1MCX7xNiuKsDFo-K5I",
  authDomain: "reactfirebase-twitter.firebaseapp.com",
  databaseURL: "https://reactfirebase-twitter.firebaseio.com",
  projectId: "reactfirebase-twitter",
  storageBucket: "reactfirebase-twitter.appspot.com",
  messagingSenderId: "322108640478",
  appId: "1:322108640478:web:8561cc2df6dc5362aec64f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;