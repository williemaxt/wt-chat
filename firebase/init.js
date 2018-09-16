import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDaLCEsIDZwSwXzq-WYq0ozJ7btuJ0I4qU",
  authDomain: "wt-chat.firebaseapp.com",
  databaseURL: "https://wt-chat.firebaseio.com",
  projectId: "wt-chat",
  storageBucket: "wt-chat.appspot.com",
  messagingSenderId: "720090172939"
};

firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

db.settings({timestampsInSnapshots: true});

export default firebase.firestore();
