
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAowjCTy97RXfH-TYjS6WQsaOttdNfUj4E",
    authDomain: "feba-messen.firebaseapp.com",
    databaseURL: "http://feba-messen.firebaseapp.com",
    projectId: "feba-messen",
    storageBucket: "feba-messen.appspot.com",
    messagingSenderId: "669590781789",
    appId: "1:669590781789:web:3db1d91f7ed58b221a72b4"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app);

export { auth, db, storage };