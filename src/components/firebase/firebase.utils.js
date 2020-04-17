import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBx0Z4SEjUAUV5qfQ6dvcJgQhRHOJepnnI",
    authDomain: "crwn-db-df451.firebaseapp.com",
    databaseURL: "https://crwn-db-df451.firebaseio.com",
    projectId: "crwn-db-df451",
    storageBucket: "crwn-db-df451.appspot.com",
    messagingSenderId: "854495920753",
    appId: "1:854495920753:web:384938135515fc135651d0"
  };


  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
