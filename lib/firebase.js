// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq05oY6aXE0n4CVb1Afxf-vpqdxSoLGwo",
  authDomain: "labeneko-test-board.firebaseapp.com",
  projectId: "labeneko-test-board",
  storageBucket: "labeneko-test-board.appspot.com",
  messagingSenderId: "570452042378",
  appId: "1:570452042378:web:b5085d3da75224c5fac373",
  measurementId: "G-Q12M9TEW8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
///ブラウザのみで動作させる
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}

export const db = getFirestore();