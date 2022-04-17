// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEu5A8rXOso4C6i5Azo3WzebTIvdqxyjE",
  authDomain: "tourist-travel-guide-b4ac3.firebaseapp.com",
  projectId: "tourist-travel-guide-b4ac3",
  storageBucket: "tourist-travel-guide-b4ac3.appspot.com",
  messagingSenderId: "1066461501136",
  appId: "1:1066461501136:web:ee944ce11b357f1ddc70d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth