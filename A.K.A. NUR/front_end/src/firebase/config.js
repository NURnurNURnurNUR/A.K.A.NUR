import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAInUqsuhQeZKRSOiGLldX-McWoYd8Vyhk",
  authDomain: "aka-nur.firebaseapp.com",
  projectId: "aka-nur",
  storageBucket: "aka-nur.appspot.com",
  messagingSenderId: "925916971283",
  appId: "1:925916971283:web:b4db6cc9d0d7d7e3a01ae6"
};

  const firebaseApp = initializeApp(firebaseConfig);
  const projectFirestore = getFirestore(firebaseApp);


  export default projectFirestore;