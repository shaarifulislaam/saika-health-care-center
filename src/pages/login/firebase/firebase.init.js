import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAuthInitialize = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthInitialize;