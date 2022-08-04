import firebase from 'firebase'
import "firebase/storage"



const firebaseConfig = {
    apiKey: "AIzaSyAiGT55C72YPWS5aaUWSEuj2s4YMTWljuw",
    authDomain: "task-dffe5.firebaseapp.com",
    projectId: "task-dffe5",
    storageBucket: "task-dffe5.appspot.com",
    messagingSenderId: "802688263121",
    appId: "1:802688263121:web:390a366daab3a5db7ab6f0"
  };

  firebase.initializeApp(firebaseConfig)

const database = firebase.firestore()
export default database