import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAFCfzc0RM7pWN54L79Q5mX4a2snu3VmA",
    authDomain: "extended-legend-415308.firebaseapp.com",
    projectId: "extended-legend-415308",
    storageBucket: "extended-legend-415308.appspot.com",
    messagingSenderId: "769368000323",
    appId: "1:769368000323:web:04d94209abbbe2a66cd1f6",
    measurementId: "G-MEM6GG2HKE"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };