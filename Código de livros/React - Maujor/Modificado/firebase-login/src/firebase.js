import { initializeApp } from 'firebase/app'
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9N8WQ8spqKYsmuUI7Z8i5ckIIYg4wLdY",
    authDomain: "primeiro-projeto-5af80.firebaseapp.com",
    projectId: "primeiro-projeto-5af80",
    storageBucket: "primeiro-projeto-5af80.appspot.com",
    messagingSenderId: "805268245164",
    appId: "1:805268245164:web:b565c739e79cdcc74f6d09"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  export default app;