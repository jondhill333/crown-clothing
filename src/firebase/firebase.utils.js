import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAjZMYq6TINnGZwZHSVLNXKlUkckVgS1rw",
    authDomain: "crown-clothing-b1dc4.firebaseapp.com",
    databaseURL: "https://crown-clothing-b1dc4.firebaseio.com",
    projectId: "crown-clothing-b1dc4",
    storageBucket: "crown-clothing-b1dc4.appspot.com",
    messagingSenderId: "417741569104",
    appId: "1:417741569104:web:705f9945fff946a99aa555",
    measurementId: "G-VJ0Z5464FL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;