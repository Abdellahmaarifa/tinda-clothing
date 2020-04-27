import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDsh3l6EeFkmOo0CjdUB0RIb092LKA0XaU",
    authDomain: "tinda-clothing-db.firebaseapp.com",
    databaseURL: "https://tinda-clothing-db.firebaseio.com",
    projectId: "tinda-clothing-db",
    storageBucket: "tinda-clothing-db.appspot.com",
    messagingSenderId: "844939905858",
    appId: "1:844939905858:web:ac1ea0eb4090c23235d6db"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {

    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email}  = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('erroe creating user ', error.message);
        }
    }
        return userRef;
    }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
