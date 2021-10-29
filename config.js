import firebase from 'firebase'
require("@firebase/firestore")

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwJuWvD0MfNTXkncH-rcMAI-c0il0Mh-0",
    authDomain: "story-797fa.firebaseapp.com",
    projectId: "story-797fa",
    storageBucket: "story-797fa.appspot.com",
    messagingSenderId: "677676805253",
    appId: "1:677676805253:web:92dcd75f22b18afe3a8dec",
    databaseURL: "https://console.firebase.google.com/u/0/project/story-797fa/settings/general/web:ZjQzYTNlMDItMmVkYi00MTBhLWEwMjQtY2UyNGFjNTQyZjEz"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firebase();