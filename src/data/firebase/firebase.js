// Import the functions you need from the SDKs you need
import { buildQueries } from "@testing-library/react";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, setDoc, addDoc, Timestamp, query, where } from "firebase/firestore/lite";

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

// Collections
const PERIPHERALS = "peripherals";
const BUY_ORDERS = "buyOrders";

export default firestoreDB;

export async function GetAllPeripherals() {
    const peripheralCollection = collection(firestoreDB, PERIPHERALS);
    const getPeripheralDocs = await getDocs(peripheralCollection);

    let peripheralArray = getPeripheralDocs.docs.map(doc => doc.data());

    return peripheralArray;
}

export async function GetPeripheralById(productId = null) {
    const peripheralCollection = collection(firestoreDB, PERIPHERALS);
    const queryFB = query(peripheralCollection, where("id", "==", parseInt(productId)))
    const getPeripheralDocs = await getDocs(queryFB);

    let peripheralArray = getPeripheralDocs.docs.map(doc => doc.data());

    return peripheralArray;
}

export async function GetPeripheralsByCategoryId(categoryId = null) {
    console.log("categoria: ");
    console.log(categoryId);
    const peripheralCollection = collection(firestoreDB, PERIPHERALS);
    
    const queryFB = query(peripheralCollection, where("categoryId", "==", parseInt(categoryId)))
    const getPeripheralDocs = await getDocs(queryFB);

    let peripheralArray = getPeripheralDocs.docs.map(doc => doc.data());
    console.log(peripheralArray);

    return peripheralArray;
}

export async function CreateBuyOrder(orderData) {
    const orderWithDate = { ...orderData, date: Timestamp.now() };
    
    const buyOrderCollection = collection(firestoreDB, BUY_ORDERS);
    const orderDoc = await addDoc(buyOrderCollection, orderWithDate);
}