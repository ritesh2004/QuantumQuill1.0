// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "quantumquill-843fa.firebaseapp.com",
  projectId: "quantumquill-843fa",
  storageBucket: "quantumquill-843fa.appspot.com",
  messagingSenderId: "916073513542",
  appId: process.env.REACT_APP_FIREBASE_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth(app);