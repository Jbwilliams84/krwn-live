import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB57RrawR6cqIQ2D4Wor22wFuwh4gE_Hh4',
  authDomain: 'crwn-db-89186.firebaseapp.com',
  databaseURL: 'https://crwn-db-89186.firebaseio.com',
  projectId: 'crwn-db-89186',
  storageBucket: 'crwn-db-89186.appspot.com',
  messagingSenderId: '924635871069',
  appId: '1:924635871069:web:e2935d6d94bdd0ae2d5ab4',
  measurementId: 'G-764K3ZVWM1'
};

//create user information in the database

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
