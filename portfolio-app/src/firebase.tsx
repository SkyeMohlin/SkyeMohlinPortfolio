// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVKRykZpNLjnxfLzZn7tuSMOQ27vTrjyU",
  authDomain: "skyemohlinportfolio.firebaseapp.com",
  projectId: "skyemohlinportfolio",
  storageBucket: "skyemohlinportfolio.appspot.com",
  messagingSenderId: "530069884337",
  appId: "1:530069884337:web:96f7a950c1b92e801cc190",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage, app };
