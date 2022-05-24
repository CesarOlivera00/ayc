// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZEPGREJf9MZGbX1gT-fiXZaEWySI5960",
    authDomain: "ayc-project-444d2.firebaseapp.com",
    projectId: "ayc-project-444d2",
    storageBucket: "ayc-project-444d2.appspot.com",
    messagingSenderId: "977809183860",
    appId: "1:977809183860:web:00d8bee308e5932e552d21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function GetPeripherals(productId = null, categoryId = null) {
    const peripheralCollection = collection(firestoreDB, "peripherals");
    const getPeripheralDocs = await getDocs(peripheralCollection);

    let peripheralArray = getPeripheralDocs.docs.map(doc => doc.data());

    if (productId != null) {
        peripheralArray = peripheralArray.filter(item => item.id == productId);
    }
    else if (categoryId != null) {
        peripheralArray = peripheralArray.filter(item => item.categoryId == categoryId);
    }

    return peripheralArray;
}