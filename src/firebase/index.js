import firebase from "firebase";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyDIyBC0oWZlE1TlVO7j5OJi40A9lKBJqrc",
    authDomain: "npl-direct.firebaseapp.com",
    databaseURL: "https://npl-direct.firebaseio.com",
    projectId: "npl-direct",
    storageBucket: "npl-direct.appspot.com",
    messagingSenderId: "301740645078",
    appId: "1:301740645078:web:07f8f35678910e15300777",
    measurementId: "G-XDKY9H4MQL"
  })
  
  export { firebase }
  
  export const auth = firebase.auth
  export const db = firebase.firestore()
