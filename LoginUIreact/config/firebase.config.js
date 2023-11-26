// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDceZSz8SPu97Z9F9i9MSBQsZoYIvMb9gE",
  authDomain: "reactnative-firebase-63395.firebaseapp.com",
  projectId: "reactnative-firebase-63395",
  storageBucket: "reactnative-firebase-63395.appspot.com",
  messagingSenderId: "974504111355",
  appId: "1:974504111355:web:5be1b11a0ac33f2569545e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});