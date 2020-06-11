import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "unreadablestuff",
  authDomain: "your-project-name.firebaseapp.com",
  databaseURL: "https://your-project-name.firebaseio.com",
  projectId: "your-project-name",
  storageBucket: "your-project-name.appspot.com",
  messagingSenderId: "0112358132134",
  appId: "1:000000002:web:0000000000000f",
  measurementId: "G-000000000",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
