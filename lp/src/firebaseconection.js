import { initializeApp } from 'firebase/app'  
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBAi1ZMaK-NqHPViVVNGZmiICo2ZMU_G6Q",
    authDomain: "studiolp-738ad.firebaseapp.com",
    projectId: "studiolp-738ad",
    storageBucket: "studiolp-738ad.appspot.com",
    messagingSenderId: "597393583327",
    appId: "1:597393583327:web:7e8ef1cae7e01fb7390d6a",
    measurementId: "G-BQH8R2WC4W"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore (firebaseApp);

export { db };