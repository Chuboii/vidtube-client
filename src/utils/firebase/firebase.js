import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBl1rAfSOgVIjLf-TrLTmtjGxX9mMVTCP0",
  authDomain: "vidtube-4927a.firebaseapp.com",
  projectId: "vidtube-4927a",
  storageBucket: "vidtube-4927a.appspot.com",
  messagingSenderId: "1043692140454",
  appId: "1:1043692140454:web:fe99dae13cf7dbf1608167",
  measurementId: "G-QDYWTXGL28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    'select_account': 'signup'
  });
export const auth = getAuth(app)

export const signInWitGoogle =  () =>  signInWithPopup(auth, provider)

export const storage = getStorage()