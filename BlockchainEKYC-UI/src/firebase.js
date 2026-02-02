import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo0hw9LCqJXqMr-yn54k95nNH45BcqmvU",
  authDomain: "credify-ekyc.firebaseapp.com",
  projectId: "credify-ekyc",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
