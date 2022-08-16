// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq05oY6aXE0n4CVb1Afxf-vpqdxSoLGwo",
  authDomain: "labeneko-test-board.firebaseapp.com",
  projectId: "labeneko-test-board",
  storageBucket: "labeneko-test-board.appspot.com",
  messagingSenderId: "570452042378",
  appId: "1:570452042378:web:b5085d3da75224c5fac373"
};

// Firebaseのインスタンスが存在しない場合にのみ、インスタンスを作成します
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);