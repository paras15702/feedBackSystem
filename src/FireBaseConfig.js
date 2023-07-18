import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCOUQAHgPjIUaSOIQB69q1P-oFfBRH_RpY",
  authDomain: "feedback12july23-7cad8.firebaseapp.com",
  databaseURL: "https://feedback12july23-7cad8-default-rtdb.firebaseio.com",
  projectId: "feedback12july23-7cad8",
  storageBucket: "feedback12july23-7cad8.appspot.com",
  messagingSenderId: "897398690002",
  appId: "1:897398690002:web:e88c2076a9bc49e357dd0b"
};


const app = initializeApp(firebaseConfig);
const db=getDatabase(app);
export default db;