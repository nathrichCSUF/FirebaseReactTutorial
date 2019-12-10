import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDLaROMOV_z0TePSSzfdzbkQ1yvpJXeBbc",
    authDomain: "fir-react-30d53.firebaseapp.com",
    databaseURL: "https://fir-react-30d53.firebaseio.com",
    projectId: "fir-react-30d53",
    storageBucket: "fir-react-30d53.appspot.com",
    messagingSenderId: "427104292237",
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")