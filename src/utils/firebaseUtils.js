import firebase from 'firebase';

const prodConfig = //use your own information here

const devConfig = //use your own information here

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();

