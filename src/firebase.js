import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAC8ibQcLm6Mn2ifWvlbInCdsgbe8TVwsY",
    authDomain: "twitter-clone-a0974.firebaseapp.com",
    databaseURL: "https://twitter-clone-a0974.firebaseio.com",
    projectId: "twitter-clone-a0974",
    storageBucket: "twitter-clone-a0974.appspot.com",
    messagingSenderId: "743661332904",
    appId: "1:743661332904:web:bc2b9ca29b3cfee384159d",
    measurementId: "G-GSZRMSDTGY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();


export default db;
