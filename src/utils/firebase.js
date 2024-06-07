import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebase = {
  apiKey: "AIzaSyBCfkNwMOX1Uuy5mlu_9PLsX0bJzNVigDs",
  authDomain: "reactemail-d1eb7.firebaseapp.com",
  projectId: "reactemail-d1eb7",
  storageBucket: "reactemail-d1eb7.appspot.com",
  messagingSenderId: "449388521148",
  appId: "1:449388521148:web:9a7aabf7fd536bc7d592b9"
};


const app = initializeApp(firebase);
export const auth=getAuth(app)