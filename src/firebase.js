// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEoqBkzu1_DAR4gahf7TPJj-Wjy04iw-M",
  authDomain: "realtor-clone-react-deb0a.firebaseapp.com",
  projectId: "realtor-clone-react-deb0a",
  storageBucket: "realtor-clone-react-deb0a.appspot.com",
  messagingSenderId: "35245151300",
  appId: "1:35245151300:web:a0db9a7900a4ed41769811",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
