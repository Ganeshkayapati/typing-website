import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCEAnY-MDiPn0-aOE2b-pKb9DpMT3DPqTQ",
  authDomain: "typing-website-a57eb.firebaseapp.com",
  projectId: "typing-website-a57eb",
  storageBucket: "typing-website-a57eb.firebasestorage.app",
  messagingSenderId: "876860267809",
  appId: "1:876860267809:web:954205809751b585c23260",
  measurementId: "G-83ZH8EZYFH"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();
const db=firebase.firestore();

export {auth,db}