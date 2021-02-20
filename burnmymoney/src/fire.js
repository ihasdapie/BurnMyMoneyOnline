import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAcegFDnCzZQz4aeWS8yahJm1wJdZItH6U",
    authDomain: "burnmymoney-cc9f3.firebaseapp.com",
    projectId: "burnmymoney-cc9f3",
    storageBucket: "burnmymoney-cc9f3.appspot.com",
    messagingSenderId: "38738764551",
    appId: "1:38738764551:web:94182abe327e67aec81ba2"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;