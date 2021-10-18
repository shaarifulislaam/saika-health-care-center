import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthInitialize from "../pages/login/firebase/firebase.init";

firebaseAuthInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
      console.log(result.user);
    });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    });
  };

  //observer
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unSubscribed;
  }, []);

  const userRegisterHandle = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const loginProcessHandle = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
    userRegisterHandle,
    loginProcessHandle,
  };
};

export default useFirebase;
