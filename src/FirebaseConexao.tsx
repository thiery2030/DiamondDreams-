import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJOBJnvS75pPNh6kJ-A_3C0bLAXY9_r-0",
  authDomain: "diamonddreams-41bf4.firebaseapp.com",
  projectId: "diamonddreams-41bf4",
  storageBucket: "diamonddreams-41bf4.firebasestorage.app",
  messagingSenderId: "740643165397",
  appId: "1:740643165397:web:4a3b74be64bc529263be5c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const autenticacao = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { db, autenticacao };