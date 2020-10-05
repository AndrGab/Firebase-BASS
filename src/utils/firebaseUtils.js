import firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyC4P35SCgj6VAfNVBUl4UD-lhk6jsSQVlI",
  authDomain: "go-inventory.firebaseapp.com",
  databaseURL: "https://go-inventory.firebaseio.com",
  projectId: "go-inventory",
  storageBucket: "go-inventory.appspot.com",
  messagingSenderId: "36299629969",
  appId: "1:36299629969:web:062bc9b4d1d665326ba630",
  measurementId: "G-Z9HJS5B7SQ"
};

const devConfig = {
  apiKey: "AIzaSyC4P35SCgj6VAfNVBUl4UD-lhk6jsSQVlI",
  authDomain: "go-inventory.firebaseapp.com",
  databaseURL: "https://go-inventory.firebaseio.com",
  projectId: "go-inventory",
  storageBucket: "go-inventory.appspot.com",
  messagingSenderId: "36299629969",
  appId: "1:36299629969:web:062bc9b4d1d665326ba630",
  measurementId: "G-Z9HJS5B7SQ"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();

