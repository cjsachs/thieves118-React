// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe-2eKe0cYoWE5LRZApfo2VEEGzfV1L2E",
  authDomain: "thieves118-react.firebaseapp.com",
  projectId: "thieves118-react",
  storageBucket: "thieves118-react.appspot.com",
  messagingSenderId: "283417530740",
  appId: "1:283417530740:web:9347918d3aebb4167e9c21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)