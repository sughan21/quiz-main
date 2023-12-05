import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB_SvMqAM1YuUVR5SDwt4EYUShhOMCpzCA",
  authDomain: "quiz-c394f.firebaseapp.com",
  projectId: "quiz-c394f",
  storageBucket: "quiz-c394f.appspot.com",
  messagingSenderId: "74922252886",
  appId: "1:74922252886:web:913f291cf506a32bc279f7",
};
const app = initializeApp(firebaseConfig);

const appAuth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGooglePopup = async () =>
  await signInWithPopup(appAuth, googleProvider);

const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(appAuth, email, password);
};

const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(appAuth, email, password);
};

const appDB = getFirestore(app);
const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(appDB, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("Error creating User", err.message);
    }
  }
  return userDocRef;
};

export {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  appDB,
};
