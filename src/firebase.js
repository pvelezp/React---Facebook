import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBATQufJDuWMUAdUf5gewivUydXJRQMfeE",
    authDomain: "facebook-clone-de16b.firebaseapp.com",
    databaseURL: "https://facebook-clone-de16b.firebaseio.com",
    projectId: "facebook-clone-de16b",
    storageBucket: "facebook-clone-de16b.appspot.com",
    messagingSenderId: "353327430100",
    appId: "1:353327430100:web:a2fcc224f51a34bc5c3e41",
    measurementId: "G-LRH0BPB41E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db  = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider, storage}
  export default db