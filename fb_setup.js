/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeKv0lyJAyYeDWhctZZQtNmjRvQmTd1U0",
  authDomain: "jalwa-faisal-12comp.firebaseapp.com",
  databaseURL: "https://jalwa-faisal-12comp-default-rtdb.firebaseio.com",
  projectId: "jalwa-faisal-12comp",
  storageBucket: "jalwa-faisal-12comp.firebasestorage.app",
  messagingSenderId: "248210801474",
  appId: "1:248210801474:web:11e1b6b42ed36afeae7edb",
  measurementId: "G-Z4D9LRQMGS"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
