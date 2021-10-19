import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthInitialize from "../pages/login/firebase/firebase.init";

firebaseAuthInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
 

  const auth = getAuth();

  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
    .finally(() => setIsLoading(false))
    
  };

  //logout
  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  //observer
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribed;
  }, []);


  //handle register
  const userRegisterHandle = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
       setError(errorMessage);
      });
  };
  //handle process
  const loginProcessHandle = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setUserName();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  //set userName
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading,
    userRegisterHandle,
    loginProcessHandle,
    handleNameChange,
    name,
    setUser,
  };
};

export default useFirebase;
