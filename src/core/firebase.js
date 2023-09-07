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
    apiKey: "AIzaSyDx9CdK08ucdj2ji3OR202wrrRW7Oh-7j0",
    authDomain: "recipe-finding-app.firebaseapp.com",
    projectId: "recipe-finding-app",
    storageBucket: "recipe-finding-app.appspot.com",
    messagingSenderId: "321115652248",
    appId: "1:321115652248:web:edc9de8d552c3e24ba90ed",
    measurementId: "G-D139NPS0H1"
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;