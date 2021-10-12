import firebase from 'firebase';
import database from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyAXfwp45qDnLaqDdJmE-oLyNpSi_sbrOxU",
    authDomain: "contact-list-d7810.firebaseapp.com",
    databaseURL: "https://contact-list-d7810-default-rtdb.firebaseio.com",
    projectId: "contact-list-d7810",
    storageBucket: "gs://contact-list-d7810.appspot.com/",
    messagingSenderId: "566246548730",
    appId: "1:566246548730:web:10ae4e5cf7707f1f8fd543",
    measurementId: "G-XD0QFJKR8H"
};
    
firebase.initializeApp(firebaseConfig);
  
export default database;