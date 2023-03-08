import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmMHY_zygWXrMmyfP1KWDe1mev4TnPKGk",
  authDomain: "react-native-tinder-a94f2.firebaseapp.com",
  projectId: "react-native-tinder-a94f2",
  storageBucket: "react-native-tinder-a94f2.appspot.com",
  messagingSenderId: "648403455597",
  appId: "1:648403455597:web:cd18cd5a6cdc2b15607964",
  measurementId: "G-6VX2D2W1WC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
