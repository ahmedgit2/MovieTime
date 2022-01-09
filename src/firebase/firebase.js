import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDk-SFy2Eni0oINkD005Q3Jh2YWhMPw14o",
    authDomain: "movietime-b3c1e.firebaseapp.com",
    projectId: "movietime-b3c1e",
    storageBucket: "movietime-b3c1e.appspot.com",
    messagingSenderId: "168231506157",
    appId: "1:168231506157:web:7f8f2685e93292dd16bce4"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default getAuth();


