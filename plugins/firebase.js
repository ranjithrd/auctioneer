// Your web app's Firebase configuration

import * as firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCDguAp4HaZ18bmP2P9Ix2HLh7pgxPPNSk",
    authDomain: "auctioneer-9f092.firebaseapp.com",
    databaseURL: "https://auctioneer-9f092.firebaseio.com",
    projectId: "auctioneer-9f092",
    storageBucket: "auctioneer-9f092.appspot.com",
    messagingSenderId: "920500927842",
    appId: "1:920500927842:web:e62e15285de6f50f2e803b"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }
//   let app = null
//   if (!firebase.app.length) {
//       firebase.initializeApp(firebaseConfig)
//   }

  export const db = firebase.database()
//   const auth = firebase.auth()

  export default firebase