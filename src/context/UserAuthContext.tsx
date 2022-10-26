import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

//import { auth, db } from '../config/firebase';

const userAuthContext = createContext({});

const firebaseConfig = {
  apiKey: 'AIzaSyAdxpSfys9t77YBowOwZFBP1hknb05NGPQ',
  authDomain: 'gwadisland-app.firebaseapp.com',
  projectId: 'gwadisland-app',
  storageBucket: 'gwadisland-app.appspot.com',
  messagingSenderId: '334927853709',
  appId: '1:334927853709:web:e44871e3a2208c0ddb0ac4',
  measurementId: 'G-T20N1P3WSK',
};

// Initialize Firebase
const app: any = initializeApp(firebaseConfig);
const auth: any = getAuth(app);
const db: any = getFirestore(app);
//const storage = getStorage(app);

export function UserAuthContextProvider({ children }: any) {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [sucessMessage, setSucessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const logIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((res: any) => {
        if (res && res.user && res.user.accessToken) {
          saveTokenInLocalStorage(auth.currentUser);
          navigate('/');
        }
      })
      .catch((err: any) => {
        if (
          err.message.includes('auth/wrong-password') ||
          err.message.includes('auth/user-not-found')
        ) {
          setError('Your email or password are incorrect.');
        } else {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));
  };
  const signUp = ({ email, password, username }: any) => {
    const usersCollectionRef = collection(db, 'users');
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res: any) => {
        return updateProfile(auth.currentUser, {
          displayName: username,
        });
      })
      .then((res: any) => {
        const newUser = {
          uid: auth.currentUser.uid,
          email: auth.currentUser.email,
          displayName: username,
        };
        addDoc(usersCollectionRef, newUser);
        saveTokenInLocalStorage(auth.currentUser);
        navigate('/');
      })
      .catch((err: any) => {
        console.log(err.message);
        if (err.message.includes('auth/email-already-in-use')) {
          setError('Your email is already use');
        } else {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));
  };
  const logOut = () => {
    return signOut(auth)
      .then(() => {
        localStorage.removeItem('userAuth');
        navigate('/');
      })
      .catch((err: any) => setError(err.message));
  };
  const clearMessages = () => {
    return setError('');
  };
  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  const forgotPassword = (email: string) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        setSucessMessage('Password reset email had send!');
      })
      .catch((err: any) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const saveTokenInLocalStorage = (data: any) => {
    runLogoutTimer(900000);
    localStorage.setItem('userAuth', JSON.stringify(data));
  };
  const runLogoutTimer = (timer: number) => {
    setTimeout(() => {
      logOut();
    }, timer);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser: any) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue = {
    user,
    logIn,
    signUp,
    logOut,
    googleSignIn,
    forgotPassword,
    error,
    loading,
    clearMessages,
    sucessMessage,
  };
  return <userAuthContext.Provider value={contextValue}>{children}</userAuthContext.Provider>;
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
