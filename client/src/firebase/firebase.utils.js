import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCJSBCz606EaPh_iumRLayz9lPQXRvjFdI",
    authDomain: "crowndb-ken07.firebaseapp.com",
    databaseURL: "https://crowndb-ken07.firebaseio.com",
    projectId: "crowndb-ken07",
    storageBucket: "crowndb-ken07.appspot.com",
    messagingSenderId: "469082919897",
    appId: "1:469082919897:web:14358b385ff955f2e1bfc8",
    measurementId: "G-EJ906H64P4"
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;