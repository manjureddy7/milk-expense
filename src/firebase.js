import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC7AMuIoY8L3mYVgDf1ReuqY4o80Esw5rk",
    authDomain: "milk-expense-tracker.firebaseapp.com",
    databaseURL: "https://milk-expense-tracker.firebaseio.com",
    projectId: "milk-expense-tracker",
    storageBucket: "milk-expense-tracker.appspot.com",
    messagingSenderId: "402860968180",
    appId: "1:402860968180:web:93957b0621f1ca860ef6a1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const db = firebase.firestore();