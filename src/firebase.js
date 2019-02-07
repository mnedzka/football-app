import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDc8voz9m_fgZIPB4ZkFwgTRTm_gRbj7pQ",
  authDomain: "man-city-374c7.firebaseapp.com",
  databaseURL: "https://man-city-374c7.firebaseio.com",
  projectId: "man-city-374c7",
  storageBucket: "man-city-374c7.appspot.com",
  messagingSenderId: "186516693877"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebaseDB
};
