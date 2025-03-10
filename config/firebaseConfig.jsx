import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  initializeAuth, 
  browserLocalPersistence,
  getReactNativePersistence
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyAVCO68km4dVKDkSSP4V5QyBknbtoBgPWE",
  authDomain: "letcode-c0bf0.firebaseapp.com",
  projectId: "letcode-c0bf0",
  storageBucket: "letcode-c0bf0.firebasestorage.app",
  messagingSenderId: "523512842358",
  appId: "1:523512842358:web:c0bce7ff3e163ea9953757",
  measurementId: "G-DTRDE7Y7NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Configure Firebase Auth persistence
const auth =
  Platform.OS === "web"
? getAuth(app)  // Default auth for web
    : initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage), // Using AsyncStorage for React Native
      });

const db = getFirestore(app);

export { auth, db, app };
