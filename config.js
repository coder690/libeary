import * as firebase from "firebase"
require ("firebase/firestore")


  var firebaseConfig = {
    apiKey: "AIzaSyBHYmChhY2AfPc4Six9PTVUU9nofZ9Gqa8",
    authDomain: "wirelessapp-a6df6.firebaseapp.com",
    projectId: "wirelessapp-a6df6",
    storageBucket: "wirelessapp-a6df6.appspot.com",
    messagingSenderId: "937783335992",
    appId: "1:937783335992:web:d642519f7938983eb8dacd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()