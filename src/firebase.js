
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDbqAVwzYwpXyf9DDXZmxysAm69NQzlA8Q",
  authDomain: "chat-cd813.firebaseapp.com",
  projectId: "chat-cd813",
  storageBucket: "chat-cd813.appspot.com",
  messagingSenderId: "14012333524",
  appId: "1:14012333524:web:1f46aaea0765b468902a41"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();