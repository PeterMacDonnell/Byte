import firebase from 'firebase/app';
import 'firebase/auth';

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
  firebase.initializeApp(config);
}
const auth = firebase.auth();

export {
  auth,
};