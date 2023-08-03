import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCCuyzp8qk6jUEptkoVy7k3f4QOSw-5ypM",
    authDomain: "tickets-9e55a.firebaseapp.com",
    projectId: "tickets-9e55a",
    storageBucket: "tickets-9e55a.appspot.com",
    messagingSenderId: "341846644051",
    appId: "1:341846644051:web:3e23ccfa33a0db1c9dfda6",
    measurementId: "G-XX303FC2VK"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };