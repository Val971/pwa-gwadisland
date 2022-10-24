import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
