import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: process.ENV.API_KEY,
//     authDomain: process.ENV.AUTH_DOMAIN,
//     projectId: process.ENV.PROJECT_ID,
//     storageBucket: process.ENV.STORAGE_BUCKET,
//     messagingSenderId: process.ENV.MESSAGING_SENDER_ID,
//     appId: process.ENV.APP_ID,
//     measurementId: process.ENV.MEASUREMENT_ID
// };
  const firebaseConfig = {
    apiKey: "AIzaSyCJcvi5R2HbpxGDNMCPYM-sxBDlBdPkn3U",
    authDomain: "recipe-app-720f2.firebaseapp.com",
    projectId: "recipe-app-720f2",
    storageBucket: "recipe-app-720f2.appspot.com",
    messagingSenderId: "949281821801",
    appId: "1:949281821801:web:c23ff2fc4e63330c8afef8"
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;