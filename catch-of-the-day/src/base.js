import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBo3oN39ekEm11pkqluXnEo_mt-drU2Tyk",
  authDomain: "wb-react-catch-of-the-da-43cc1.firebaseapp.com",
  databaseURL: "https://wb-react-catch-of-the-da-43cc1.firebaseio.com"
  // projectId: "wb-react-catch-of-the-da-43cc1",
  // storageBucket: "wb-react-catch-of-the-da-43cc1.appspot.com",
  // messagingSenderId: "435781399791"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
