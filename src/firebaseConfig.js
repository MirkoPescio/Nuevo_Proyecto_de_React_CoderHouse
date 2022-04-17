
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCkC1ZxicqHgC1XIoiNniArLrZN8d_Hva8",
  authDomain: "proyecto-de-react---coderhouse.firebaseapp.com",
  projectId: "proyecto-de-react---coderhouse",
  storageBucket: "proyecto-de-react---coderhouse.appspot.com",
  messagingSenderId: "988614725753",
  appId: "1:988614725753:web:67ec091622bfcf7c2a84a8"
};

const appFirebase = initializeApp(firebaseConfig);
export default appFirebase
