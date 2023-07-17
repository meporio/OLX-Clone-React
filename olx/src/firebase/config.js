import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfUm7ZDKi536XVdheDQUvChYCmw5GTqFk",
    authDomain: "olxclone-5960a.firebaseapp.com",
    projectId: "olxclone-5960a",
    storageBucket: "olxclone-5960a.appspot.com",
    messagingSenderId: "506573469729",
    appId: "1:506573469729:web:a17d14995b8ea9dc2b4b60",
    measurementId: "G-6JGPM6HFQZ"
  };

  export default  firebase.initializeApp(firebaseConfig)