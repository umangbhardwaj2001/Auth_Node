// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import { storage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLeSAhZgR738XCEbX2RcOOtInPWVtcK6E",
  authDomain: "thoughtbook-1.firebaseapp.com",
  projectId: "thoughtbook-1",
  storageBucket: "thoughtbook-1.appspot.com",
  messagingSenderId: "254680223252",
  appId: "1:254680223252:web:f42c1460c41ae4dd9d2101",
  measurementId: "G-PCZWYNCKFB",
};
const uri =
  "https://firebasestorage.googleapis.com/v0/b/thoughtbook-1.appspot.com/o/IMG-20211225-WA0005.jpg?alt=media&token=276c0290-c6a1-4366-884a-c3633bfb4cc7";
// apiKey: "YOUR_API_KEY",
// authDomain: "YOUR_AUTH_DOMAIN",
// projectId: "YOUR_PROJECT_ID",
// storageBucket: "YOUR_STORAGE_BUCKET",
// messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
// appId: "YOUR_APP_ID"

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

initializeApp(firebaseConfig);

const storage = storage();

export { storage, firebase as default };
