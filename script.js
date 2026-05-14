/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld() {
  console.log("Running helloWorld()")
  firebase.database().ref('/info').set(
    {
      message: 'Kia ora te ao!'
    }
  )
}
function Goodbye() {
  console.log("Running Goodbye()")
  firebase.database().ref('/info').set(
    {
      message: 'Goodbye!'
    }
  )
}
function simpleRead() {
  console.log("Reading message");
  firebase.database().ref('/info/message').once('value', display);
  console.log("Leaving simpleRead")
}
function readListener() {
  console.log("Reading Listener");
  firebase.database().ref('/info/message').on('value', display);
  console.log("Leaving readListener")
}
var G1;
function display(snapshot) {
  console.log("Running display(), the message is: " + snapshot.val());
  console.log(snapshot.val())
  G1 = snapshot.val()
  HTML_OUTPUT.innerHTML = "Hello World"//snapshot.val();
}
firebase.database().ref('/').set(
  {
    game1: {
      users: {
        Dhruv: 9999,
        Jack: 100000,
        toby: 9,
        yug: 987654321,
      }
    },
    game2: {
      users: {
        Imy: 77,
        John: 65,
        Alex: 3,
      }
    }
  }
)
function logDatabaseRead(snapshot) {
  console.log("Running logDatabaseRead");
  firebase.database().ref('/info/message').on('value', display);
  console.log("Leaving Log DatabaseRead")
}

function fb_readHighScores() {
  console.log("Reading High Scores");
  firebase.database().ref('game1/users').once('value', display)
}
const users = ["Dhruv", "Jack", "Toby", "Yug"];
let Score = users.HighScores;

for (i = 0; i < users.length; i++) {
  let key = users[i];
  console.log("Score " + i + " is for " + key)
   HTML_OUTPUT.innerHTML += "Score " + i + " is for " + key
}
