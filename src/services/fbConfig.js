import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDQNpmX3zk_HG7nTQ7QWBmANUci_lpQp1s",
  authDomain: "react-spring-social.firebaseapp.com",
  projectId: "react-spring-social",
  storageBucket: "react-spring-social.appspot.com",
  messagingSenderId: "930562808300",
  appId: "1:930562808300:web:c812c06870936553bb88c9"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectAuth = firebase.auth()

export { projectAuth }
