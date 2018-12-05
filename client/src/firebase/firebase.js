import * as firebase from 'firebase';
import 'firebase/firestore';

// import firebase from 'firebase/app';
// import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyC7pIntHRdVBcw0XEDwuUH6b1IGLfi0Wgk",
    authDomain: "byte-app-1538515658350.firebaseapp.com",
    databaseURL: "https://byte-app-1538515658350.firebaseio.com",
    projectId: "byte-app-1538515658350",
    storageBucket: "byte-app-1538515658350.appspot.com",
    messagingSenderId: "1090937809988"
  };
  firebase.initializeApp(config);
  

if (!firebase.apps.length){
  firebase.initializeApp(config);}

  //advised by console log
  const firestore = firebase.firestore();
  const settings = {timestampsInSnapshots: true};
  firestore.settings(settings);
  // const timestamp = snapshot.get('created_at');
  // const date = timestamp.toDate();

  // const db = firebase.firestore().collection("rooms");

  // db.settings({
  //   timestampsInSnapshots: true
  // });
 

export default {firebase};
