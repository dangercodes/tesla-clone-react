import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDuPYa9XM7Ur2IuoYzGyb-_Zx6kWspkL_I",
  authDomain: "tesla-clone-react-20a1f.firebaseapp.com",
  projectId: "tesla-clone-react-20a1f",
  storageBucket: "tesla-clone-react-20a1f.appspot.com",
  messagingSenderId: "1047285785689",
  appId: "1:1047285785689:web:ee1b313129e21dec357d48"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export { auth, firebaseApp  }