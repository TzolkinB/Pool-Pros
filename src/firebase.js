import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAyb-1G1FwiERnpk__jo50GPAR-5c4oAM4",
  authDomain: "pool-pros-1234.firebaseapp.com",
  databaseURL: "https://pool-pros-1234.firebaseio.com",
  projectId: "pool-pros-1234",
  storageBucket: "pool-pros-1234.appspot.com",
  messagingSenderId: "885877285793"
};
firebase.initializeApp(config);

export default firebase;
