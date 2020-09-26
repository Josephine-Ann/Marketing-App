import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCEhv2p2xUcbiaq8V6Q4so06TYyDJdo14M",
    authDomain: "marketing-app-97cfc.firebaseapp.com",
    databaseURL: "https://marketing-app-97cfc.firebaseio.com",
    projectId: "marketing-app-97cfc",
    storageBucket: "marketing-app-97cfc.appspot.com",
    messagingSenderId: "211232103652",
    appId: "1:211232103652:web:909874d51f98cf0b9d20f1",
    measurementId: "G-2L6CXBVD1Z"
}

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default };