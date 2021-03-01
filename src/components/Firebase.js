import firebase from 'firebase'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDHIn28XIo2zhvVA8yqdMdukSxZqSkqx9A",
    authDomain: "ucsb-web-project.firebaseapp.com",
    projectId: "ucsb-web-project",
    storageBucket: "ucsb-web-project.appspot.com",
    messagingSenderId: "141032442030",
    appId: "1:141032442030:web:62d7f2155d2174cbac853f",
    measurementId: "G-0GJ8SNH4X7"
};
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth;
export const db = firebase.database();
export default Firebase