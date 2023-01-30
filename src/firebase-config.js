import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "process.env.REACT_APP_FIREBASE_CONFIG_KEY",
    authDomain: "voyage-af186.firebaseapp.com",
    projectId: "voyage-af186",
    storageBucket: "voyage-af186.appspot.com",
    messagingSenderId: "688708316445",
    appId: "1:688708316445:web:ee012d9872619e4b8845f4",
    measurementId: "G-TLTDTFGE57"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth()