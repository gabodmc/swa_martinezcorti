import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8p4QszjVTvpkJVlsSfGkO88PZu02sODw",
  authDomain: "swa-coder.firebaseapp.com",
  projectId: "swa-coder",
  storageBucket: "swa-coder.appspot.com",
  messagingSenderId: "498151036371",
  appId: "1:498151036371:web:81cdf1c24a29766f52cb26"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };





// import * as firebase from './firebase/app';
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyA8p4QszjVTvpkJVlsSfGkO88PZu02sODw",
//   authDomain: "swa-coder.firebaseapp.com",
//   projectId: "swa-coder",
//   storageBucket: "swa-coder.appspot.com",
//   messagingSenderId: "498151036371",
//   appId: "1:498151036371:web:81cdf1c24a29766f52cb26"
// };

// const app = initializeApp(firebaseConfig);

// export const GetFirebase = () => app;
// export { getFirestore };