
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC0poWFcnXcI9mHbSKKymOXBSSGcolvaZc",
  authDomain: "asctech-6c2e9.firebaseapp.com",
  projectId: "asctech-6c2e9",
  storageBucket: "asctech-6c2e9.appspot.com",
  messagingSenderId: "124414155335",
  appId: "1:124414155335:web:a1f81204b578dc47682f62"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db