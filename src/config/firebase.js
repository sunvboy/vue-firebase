import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import 'firebase/database'
import "firebase/auth";

firebase.initializeApp(firebaseConfig)
const database = firebase.database()
const auth = firebase.auth()

const taskRef = database.ref('tasks');
const usersRef = database.ref('users');

export {
    database,taskRef,auth,usersRef
}